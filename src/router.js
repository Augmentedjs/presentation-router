import Augmented from "augmentedjs-next";
import History from "./history.js";
import Dom from "presentation-dom";

const _map = require("lodash.map");
const _isRegExp = require("lodash.isregexp");

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
 * @extends Augmented.Object
 */
class Router extends Augmented.Object {
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
  loadView(view) {
    //console.debug("router loadView");
    if (view) {
      this._view = view;
      if (this.transition && this.transition.in && this._view.el) {
        const view = this._view;
        const renderView = () => {
          Dom.removeClass(view.el, "transition-out");
          Dom.addClass(view.el, "transition-in");
          //console.debug("view transition-in");
          if (view.render) {
            view.render();
          }
          if (view.delegateEvents) {
            view.delegateEvents();
          }
          return Promise.resolve(this);
        };
        Promise.all([
          this.cleanup(),
          window.setTimeout(renderView, this.transition.in)
        ]);

      } else {
        if (this._view.render) {
          this._view.render();
        }
        if (this._view.delegateEvents) {
          this._view.delegateEvents();
        }
      }
    }
    return Promise.resolve(this);
  };

  /**
   * Remove the last view by calling cleanup, then removes
   */
  cleanup() {
    //console.debug(`router cleanup view '${(this._view) ? (this._view.name) : "no view"}'`);
    if (this._view) {
      //console.debug(`router cleanup view '${(this._view.el) ? (this._view.el) : "no el"}'`);
      if (this.transition && this.transition.out && this._view.el) {
        const view = this._view;
        Dom.removeClass(view.el, "transition-in");
        Dom.addClass(view.el, "transition-out");
        //console.debug("view transition-out");
        const cleanupView = () => {
          // TODO: deprecated
          if (view.cleanup) {
            console.warn(`View ${view.name}'s "cleanup" method is deprecated,
              please add code to "remove" method.`);
            view.cleanup();
          }
          if (view.remove) {
            //console.debug(`router removing view ${this._view.remove()}`);
            view.remove();
          }
          //view = null;
          return Promise.resolve(this);
        };
        window.setTimeout(cleanupView, this.transition.out);
      } else {
        // TODO: deprecated
        if (this._view.cleanup) {
          console.warn(`View ${view.name}'s "cleanup" method is deprecated,
            please add code to "remove" method.`);
          this._view.cleanup();
        }
        if (this._view.remove) {
          //console.debug(`router removing view ${this._view.remove()}`);
          this._view.remove();
        }
        this._view = null;
      }
    }
    return Promise.resolve(this);
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
    if (!_isRegExp(route)) {
      route = this._routeToRegExp(route);
    }
    if (Augmented.isFunction(name)) {
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
    this.routes = Augmented.result(this, "routes");
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
    let params = route.exec(fragment).slice(1);
    return _map(params, (param, i) => {
      // Don't decode the search params.
      if (i === params.length - 1) {
        return param || null;
      }
      return param ? decodeURIComponent(param) : null;
    });
  };
};

export default Router;
