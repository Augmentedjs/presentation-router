import { AugmentedObject } from "next-core-object";
import { addClass, removeClass, isRegExp, result, isFunction } from "./utilities.js";
import History from "./history.js";

// Cached regular expressions for matching named param parts and splatted
// parts of route strings.
const optionalParam = /\((.*?)\)/g;
const namedParam    = /(\(\?)?:\w+/g;
const splatParam    = /\*\w+/g;
const escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

/**
 * Routers map faux-URLs to actions, and fire events when routes are
 * matched. Creating a new one sets its `routes` hash, if not set statically.<br/>
 * Supports passing routes to the constructor as well as a transition flag.
 * @example
 * const router = new Router({
 *    "routes": { ... },
 *    "transition": { "in": #, "out": # }
 * });
 * @extends AugmentedObject
 */
class Router extends AugmentedObject {
  constructor(options) {
    if (!options) {
      options = {};
    }
    super(options);
    if (options.routes) {
      this.routes = options.routes;
    }
    if (options.transition) {
      this.transition = options.transition;
    }
    this.history = new History();
    this._bindRoutes();
    this.initialize(options);
  };

  /**
   * Parse a query string and return as an object
   * @param {string} queryString
   * @returns {object} Object of the query params
   * @static
   */
  static parseQuery(queryString) {
    let query = {},
        pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString).split("&"),
        i = 0;
    const l = pairs.length;

    for (i = 0; i < l; i++) {
        const pair = pairs[i].split("=");
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
  };

  /**
   * @property {Presentation.View} view Read only property to current view
   */
  get view() {
    return this._view;
  };

  /**
   * Load a view safely and remove the last view by calling cleanup, then remove
   * @param {View} view The View to load
   */
  async loadView(view) {
    try {
      //console.debug("router loadView");
      if (view) {
        const oldView = this._view;
        if (this.transition && this.transition.in) {
          //await console.debug("have old view", (oldView) );
          if (oldView) {
            await addClass(view.el, "transition-out");
            //await console.debug("calling cleanup");
            await this.cleanup();
            //await console.debug("Just cleaned up");
          }
          await window.setTimeout(() => {
            // wait
            //console.debug("waiting...");
          }, this.transition.out);

          if (view.render) {
            await window.setTimeout(() => {
              // wait
              //console.debug("waiting...");
              //console.log("el", view.el);
              removeClass(view.el, "transition-out");
              view.render();
            }, this.transition.in);

          }
          if (view.delegateEvents) {
            await view.delegateEvents();
          }

          this._view = view;
        } else {
          if (oldView) {
            await this.cleanup(oldView);
          }
          await view.render();
          if (view.delegateEvents) {
            await view.delegateEvents();
          }
          this._view = view;
          //console.debug("new view " + JSON.stringify(this._view));
        }
      } else {
        console.warn("No view passed.");
      }
    } catch(e) {
      console.error(e);
    }
    return this;
  };

  /**
   * Remove the last view by calling cleanup, then removes
   */
  async cleanup(oldView) {
    //console.debug(`router cleanup view '${(this._view) ? (this._view.name) : "no view"}'`);
    if (oldView || this._view) {
      //console.debug(`router cleanup view '${(router._view.el) ? (router._view.el) : "no el"}'`);
      const view = (oldView) ? oldView : this._view;
      if (this.transition && this.transition.out && view.el) {

        //console.debug("view transition-out");
        const cleanupView = async () => {
          //if (Dom.containsClass(view.el, "transition-in")) {
          //  await Dom.replaceClass(view.el, "transition-in", "transition-out");
          //} else {
          //  await Dom.addClass(view.el, "transition-out");
          //}
          if (view.remove) {
            //await console.debug(`router removing view ${this._view.remove()}`);
            await view.remove();
          }
          //await Dom.removeClass(view.el, "transition-out");
          return view;
        };
        await window.setTimeout(cleanupView, this.transition.out);
        this._view = null;
      } else {
        if (this.view.remove) {
          //console.debug(`router removing view ${this._view.remove()}`);
          await this.view.remove();
        }
        this._view = null;
      }
    } else {
      //console.warn("No view to clean up.");
    }
    return this;
  };

  /**
   * Initialize is an empty function by default. Override it with your own
   * initialization logic.
   */
  initialize(options) {
    return super.initialize(options);
  };

  /**
   * Manually bind a single named route to a callback.
   * @param {string} route The route
   * @param {string} name The function binding name
   * @param {function} callback binding function
   * @example
   * this.route('search/:query/p:num', 'search', (query, num) => {
   *   ...
   * });
   */
  route(route, name, callback) {
    if (!isRegExp(route)) {
      route = this._routeToRegExp(route);
    }
    if (isFunction(name)) {
      callback = name;
      name = '';
    }
    if (!callback) {
      callback = this[name];
    }
    const router = this;

    this.history.route(route, (fragment) => {
      const args = router._extractParameters(route, fragment);

      if (router.execute(callback, args, name) !== false) {
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        this.history.trigger('route', router, name, args);
      }
    });
    return this;
  };

  /**
   * Execute a route handler with the provided parameters.  This is an
   * excellent place to do pre-route setup or post-route cleanup.
   * @param {function} callback binding function
   * @param {array} args The arges passed
   */
  execute(callback, args) {
    if (callback) {
      callback.apply(this, args);
    }
  };

  /**
   * Simple proxy to `history` to save a fragment into the history.
   * @param {string} fragment route fragment
   * @param {object} options any options to pass
   */
  navigate(fragment, options) {
    this.history.navigate(fragment, options);
    return { "routes": this.routes };
  };

  /**
   * Start the history using browser History API
   * @param {object} options any options to pass
   */
  startHistory(options) {
    if (!this.history.started) {
      this.history.start(options);
    }
    return true;
  };

  // Bind all defined routes to `history`. We have to reverse the
  // order of the routes here to support behavior where the most general
  // routes can be defined at the bottom of the route map.
  _bindRoutes() {
    if (!this.routes) {
      return;
    }
    this.routes = result(this, "routes");
    let route,
        routes = Object.keys(this.routes);
    while ((route = routes.pop()) != null) {
      this.route(route, this.routes[route]);
    }
  };

  // Convert a route string into a regular expression, suitable for matching
  // against the current location hash.
  _routeToRegExp(route) {
    route = route.replace(escapeRegExp, '\\$&')
                 .replace(optionalParam, '(?:$1)?')
                 .replace(namedParam, (match, optional) => {
                   return optional ? match : '([^/?]+)';
                 })
                 .replace(splatParam, '([^?]*?)');
    return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
  };

  // Given a route, and a URL fragment that it matches, return the array of
  // extracted decoded parameters. Empty or unmatched parameters will be
  // treated as `null` to normalize cross-browser behavior.
  _extractParameters(route, fragment) {
    const params = route.exec(fragment).slice(1);
    if (Array.isArray(params)) {
      return params.map((param, i) => {
        // Don't decode the search params.
        if (i === params.length - 1) {
          return param || null;
        }
        return param ? decodeURIComponent(param) : null;
      });
    }
    return null;
  };
};

export default Router;
