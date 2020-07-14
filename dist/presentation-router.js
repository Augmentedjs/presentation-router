!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("next-core-utilities"),require("next-core-object"),require("presentation-dom"),require("lodash.map"),require("lodash.isregexp")):"function"==typeof define&&define.amd?define("presentation-router",["next-core-utilities","next-core-object","presentation-dom","lodash.map","lodash.isregexp"],e):"object"==typeof exports?exports["presentation-router"]=e(require("next-core-utilities"),require("next-core-object"),require("presentation-dom"),require("lodash.map"),require("lodash.isregexp")):t["presentation-router"]=e(t["next-core-utilities"],t["next-core-object"],t["presentation-dom"],t["lodash.map"],t["lodash.isregexp"])}(this,(function(t,e,s,i,r){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dist/",s(s.s=5)}([function(e,s){e.exports=t},function(t,s){t.exports=e},function(t,e){t.exports=s},function(t,e){t.exports=i},function(t,e){t.exports=r},function(t,e,s){"use strict";s.r(e),s.d(e,"Router",(function(){return v})),s.d(e,"History",(function(){return c})),s.d(e,"serialize",(function(){return _}));var i=s(1),r=s(0);const n=/^[#\/]|\s+$/g,o=/^\/+|\/+$/g,a=/#.*$/;class h extends i.AugmentedObject{constructor(t){super(t),this.handlers=[],this.checkUrl=this.checkUrl.bind(this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history),this.interval=50,this.started=!1}atRoot(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root&&!this.getSearch()}matchRoot(){return this.decodeFragment(this.location.pathname).slice(0,this.root.length-1)+"/"===this.root}decodeFragment(t){return decodeURI(t.replace(/%25/g,"%2525"))}getSearch(){const t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""}getHash(t){const e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""}getPath(){const t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===t.charAt(0)?t.slice(1):t}getFragment(t){return null==t&&(t=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash()),t.replace(n,"")}start(t){if(this.started)throw new Error("History has already been started");if(this.started=!0,this.options=Object(r.extend)({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=`/${this.root}/`.replace(o,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){const t=this.root.slice(0,-1)||"/";return this.location.replace(`${t}#${this.getPath()}`),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;const t=document.body,e=t.insertBefore(this.iframe,t.firstChild).contentWindow;e.document.open(),e.document.close(),e.location.hash="#"+this.fragment}const e=window.addEventListener?window.addEventListener:(t,e)=>attachEvent("on"+t,e);if(this._usePushState?e("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?e("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),!this.options.silent)return this.loadUrl()}stop(){const t=window.removeEventListener?window.removeEventListener:(t,e)=>detachEvent("on"+t,e);this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),this.started=!1}route(t,e){this.handlers.unshift({route:t,callback:e})}checkUrl(t){let e=this.getFragment();if(e===this.fragment&&this.iframe&&(e=this.getHash(this.iframe.contentWindow)),e===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()}loadUrl(t){return!!this.matchRoot()&&(t=this.fragment=this.getFragment(t),this.handlers&&Array.isArray(this.handlers)?this.handlers.some(e=>{if(e.route.test(t))return e.callback(t),!0}):null)}navigate(t,e){if(!this.started)return!1;e&&!0!==e||(e={trigger:!!e}),t=this.getFragment(t||"");let s=this.root;""!==t&&"?"!==t.charAt(0)||(s=s.slice(0,-1)||"/");const i=s+t;if(t=this.decodeFragment(t.replace(a,"")),this.fragment!==t){if(this.fragment=t,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,i);else{if(!this._wantsHashChange)return this.location.assign(i);if(this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)){const s=this.iframe.contentWindow;e.replace||(s.document.open(),s.document.close()),this._updateHash(s.location,t,e.replace)}}return e.trigger?this.loadUrl(t):void 0}}_updateHash(t,e,s){if(s){const s=t.href.replace(/(javascript:|#).*$/,"");t.replace(s+"#"+e)}else t.hash="#"+e}}var c=h,u=s(2);const l=s(3),d=s(4),p=/\((.*?)\)/g,f=/(\(\?)?:\w+/g,g=/\*\w+/g,m=/[\-{}\[\]+?.,\\\^$|#\s]/g;class w extends i.AugmentedObject{constructor(t){t||(t={}),super(t),t.routes&&(this.routes=t.routes),t.transition&&(this.transition=t.transition),this.history=new c,this._bindRoutes(),this.initialize(t)}static parseQuery(t){let e={},s=("?"===t[0]?t.substr(1):t).split("&"),i=0;const r=s.length;for(i=0;i<r;i++){const t=s[i].split("=");e[decodeURIComponent(t[0])]=decodeURIComponent(t[1]||"")}return e}get view(){return this._view}async loadView(t){try{if(t){const e=this._view;this.transition&&this.transition.in?(e&&(await u.Dom.addClass(t.el,"transition-out"),await this.cleanup()),await window.setTimeout(()=>{},this.transition.out),t.render&&await window.setTimeout(()=>{u.Dom.removeClass(t.el,"transition-out"),t.render()},this.transition.in),t.delegateEvents&&await t.delegateEvents(),this._view=t):(e&&await this.cleanup(e),await t.render(),t.delegateEvents&&await t.delegateEvents(),this._view=t)}else console.warn("No view passed.")}catch(t){console.error(t)}return this}async cleanup(t){if(t||this._view){const e=t||this._view;if(this.transition&&this.transition.out&&e.el){const t=async()=>(e.remove&&await e.remove(),e);await window.setTimeout(t,this.transition.out),this._view=null}else this.view.remove&&await this.view.remove(),this._view=null}return this}initialize(t){return super.initialize(t)}route(t,e,s){d(t)||(t=this._routeToRegExp(t)),Object(r.isFunction)(e)&&(s=e,e=""),s||(s=this[e]);const i=this;return this.history.route(t,r=>{const n=i._extractParameters(t,r);!1!==i.execute(s,n,e)&&(i.trigger.apply(i,["route:"+e].concat(n)),i.trigger("route",e,n),this.history.trigger("route",i,e,n))}),this}execute(t,e){t&&t.apply(this,e)}navigate(t,e){return this.history.navigate(t,e),{routes:this.routes}}startHistory(t){return this.history.started||this.history.start(t),!0}_bindRoutes(){if(!this.routes)return;this.routes=Object(r.result)(this,"routes");let t,e=Object.keys(this.routes);for(;null!=(t=e.pop());)this.route(t,this.routes[t])}_routeToRegExp(t){return t=t.replace(m,"\\$&").replace(p,"(?:$1)?").replace(f,(t,e)=>e?t:"([^/?]+)").replace(g,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")}_extractParameters(t,e){let s=t.exec(e).slice(1);return l(s,(t,e)=>e===s.length-1?t||null:t?decodeURIComponent(t):null)}}var v=w;var _=t=>{let e=[],s=null;for(s in t)t.hasOwnProperty(s)&&e.push(`${encodeURIComponent(s)}=${encodeURIComponent(t[s])}`);return e.join("&")}}])}));
//# sourceMappingURL=presentation-router.js.map