!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("next-core-object"),require("next-core-utilities"),require("presentation-dom"),require("lodash.map"),require("lodash.isregexp")):"function"==typeof define&&define.amd?define("presentation-router",["next-core-object","next-core-utilities","presentation-dom","lodash.map","lodash.isregexp"],e):"object"==typeof exports?exports["presentation-router"]=e(require("next-core-object"),require("next-core-utilities"),require("presentation-dom"),require("lodash.map"),require("lodash.isregexp")):t["presentation-router"]=e(t["next-core-object"],t["next-core-utilities"],t["presentation-dom"],t["lodash.map"],t["lodash.isregexp"])}(this,function(t,e,r,n,i){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=38)}([function(t,e,r){"use strict";var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,r){"use strict";var n=r(26)("wks"),i=r(27),o=r(0).Symbol,s="function"==typeof o;(t.exports=function(t){return n[t]||(n[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=n},function(t,e,r){"use strict";var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,r){"use strict";var n=r(5);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){"use strict";var n=r(11),i=r(24);t.exports=r(6)?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){"use strict";t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){"use strict";t.exports=!r(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";t.exports={}},function(t,e,r){"use strict";var n=r(0),i=r(2),o=r(9),s=r(4),a=r(12),u=function(t,e,r){var c,f,h,l=t&u.F,p=t&u.G,d=t&u.S,v=t&u.P,y=t&u.B,m=t&u.W,g=p?i:i[e]||(i[e]={}),x=g.prototype,_=p?n:d?n[e]:(n[e]||{}).prototype;for(c in p&&(r=e),r)(f=!l&&_&&void 0!==_[c])&&a(g,c)||(h=f?_[c]:r[c],g[c]=p&&"function"!=typeof _[c]?r[c]:y&&f?o(h,n):m&&_[c]==h?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(h):v&&"function"==typeof h?o(Function.call,h):h,v&&((g.virtual||(g.virtual={}))[c]=h,t&u.R&&x&&!x[c]&&s(x,c,h)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,r){"use strict";var n=r(10);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){"use strict";t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){"use strict";var n=r(3),i=r(49),o=r(50),s=Object.defineProperty;e.f=r(6)?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),i)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){"use strict";var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,r){"use strict";var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,r){"use strict";var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,r){"use strict";t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){"use strict";t.exports=!0},function(t,e,r){"use strict";var n=r(5),i=r(0).document,o=n(i)&&n(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,r){"use strict";var n=r(57),i=r(15);t.exports=function(t){return n(i(t))}},function(t,e,r){"use strict";var n=r(26)("keys"),i=r(27);t.exports=function(t){return n[t]||(n[t]=i(t))}},function(t,e,r){"use strict";var n=r(11).f,i=r(12),o=r(1)("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},function(t,e,r){"use strict";var n=r(10);t.exports.f=function(t){return new function(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=n(e),this.reject=n(r)}(t)}},function(t,e,r){"use strict";var n=r(16),i=r(8),o=r(51),s=r(4),a=r(7),u=r(52),c=r(20),f=r(60),h=r(1)("iterator"),l=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,r,d,v,y,m){u(r,e,d);var g,x,_,w=function(t){if(!l&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},b=e+" Iterator",P="values"==v,S=!1,j=t.prototype,k=j[h]||j["@@iterator"]||v&&j[v],O=k||w(v),L=v?P?w("entries"):O:void 0,E="Array"==e&&j.entries||k;if(E&&(_=f(E.call(new t)))!==Object.prototype&&_.next&&(c(_,b,!0),n||"function"==typeof _[h]||s(_,h,p)),P&&k&&"values"!==k.name&&(S=!0,O=function(){return k.call(this)}),n&&!m||!l&&!S&&j[h]||s(j,h,O),a[e]=O,a[b]=p,v)if(g={values:P?O:w("values"),keys:y?O:w("keys"),entries:L},m)for(x in g)x in j||o(j,x,g[x]);else i(i.P+i.F*(l||S),e,g);return g}},function(t,e,r){"use strict";t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){"use strict";var n=r(14),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},function(t,e,r){"use strict";var n=r(2),i=r(0),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:r(16)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e,r){"use strict";var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,r){"use strict";t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){"use strict";var n=r(0).document;t.exports=n&&n.documentElement},function(t,e,r){"use strict";var n=r(13),i=r(1)("toStringTag"),o="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:o?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,r){"use strict";var n=r(3),i=r(10),o=r(1)("species");t.exports=function(t,e){var r,s=n(t).constructor;return void 0===s||void 0==(r=n(s)[o])?e:i(r)}},function(t,e,r){"use strict";var n,i,o,s=r(9),a=r(72),u=r(29),c=r(17),f=r(0),h=f.process,l=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,y=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},x=function(t){g.call(t.data)};l&&p||(l=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return m[++y]=function(){a("function"==typeof t?t:Function(t),e)},n(y),y},p=function(t){delete m[t]},"process"==r(13)(h)?n=function(t){h.nextTick(s(g,t,1))}:v&&v.now?n=function(t){v.now(s(g,t,1))}:d?(o=(i=new d).port2,i.port1.onmessage=x,n=s(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):n="onreadystatechange"in c("script")?function(t){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),g.call(t)}}:function(t){setTimeout(s(g,t,1),0)}),t.exports={set:l,clear:p}},function(t,e,r){"use strict";t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,r){"use strict";var n=r(3),i=r(5),o=r(21);t.exports=function(t,e){if(n(t),i(e)&&e.constructor===t)return e;var r=o.f(t);return(0,r.resolve)(e),r.promise}},function(e,r){e.exports=t},function(t,r){t.exports=e},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(35),i=r(36);const o=/^[#\/]|\s+$/g,s=/^\/+|\/+$/g,a=/#.*$/;e.default=class extends n.AugmentedObject{constructor(t){super(t),this.handlers=[],this.checkUrl=this.checkUrl.bind(this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history),this.interval=50,this.started=!1}atRoot(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root&&!this.getSearch()}matchRoot(){return this.decodeFragment(this.location.pathname).slice(0,this.root.length-1)+"/"===this.root}decodeFragment(t){return decodeURI(t.replace(/%25/g,"%2525"))}getSearch(){const t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""}getHash(t){const e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""}getPath(){const t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===t.charAt(0)?t.slice(1):t}getFragment(t){return null==t&&(t=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash()),t.replace(o,"")}start(t){if(this.started)throw new Error("History has already been started");if(this.started=!0,this.options=(0,i.extend)({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||document.documentMode>7),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=`/${this.root}/`.replace(s,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){const t=this.root.slice(0,-1)||"/";return this.location.replace(`${t}#${this.getPath()}`),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;const t=document.body,e=t.insertBefore(this.iframe,t.firstChild).contentWindow;e.document.open(),e.document.close(),e.location.hash="#"+this.fragment}const e=window.addEventListener?window.addEventListener:(t,e)=>attachEvent("on"+t,e);if(this._usePushState?e("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?e("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),!this.options.silent)return this.loadUrl()}stop(){const t=window.removeEventListener?window.removeEventListener:(t,e)=>detachEvent("on"+t,e);this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),this.started=!1}route(t,e){this.handlers.unshift({route:t,callback:e})}checkUrl(t){let e=this.getFragment();if(e===this.fragment&&this.iframe&&(e=this.getHash(this.iframe.contentWindow)),e===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()}loadUrl(t){return!!this.matchRoot()&&(t=this.fragment=this.getFragment(t),this.handlers&&Array.isArray(this.handlers)?this.handlers.some(e=>{if(e.route.test(t))return e.callback(t),!0}):null)}navigate(t,e){if(!this.started)return!1;e&&!0!==e||(e={trigger:!!e}),t=this.getFragment(t||"");let r=this.root;""!==t&&"?"!==t.charAt(0)||(r=r.slice(0,-1)||"/");const n=r+t;if(t=this.decodeFragment(t.replace(a,"")),this.fragment!==t){if(this.fragment=t,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);if(this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)){const r=this.iframe.contentWindow;e.replace||(r.document.open(),r.document.close()),this._updateHash(r.location,t,e.replace)}}return e.trigger?this.loadUrl(t):void 0}}_updateHash(t,e,r){if(r){const r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else t.hash="#"+e}}},function(t,e,r){"use strict";var n=s(r(39)),i=s(r(37)),o=s(r(83));function s(t){return t&&t.__esModule?t:{default:t}}t.exports.Router=n.default,t.exports.History=i.default,t.exports.serialize=o.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(r(40)),i=c(r(43)),o=r(35),s=r(36),a=c(r(37)),u=c(r(80));function c(t){return t&&t.__esModule?t:{default:t}}const f=r(81),h=r(82),l=/\((.*?)\)/g,p=/(\(\?)?:\w+/g,d=/\*\w+/g,v=/[\-{}\[\]+?.,\\\^$|#\s]/g;e.default=class extends o.AugmentedObject{constructor(t){t||(t={}),super(t),t.routes&&(this.routes=t.routes),t.transition&&(this.transition=t.transition),this.history=new a.default,this._bindRoutes(),this.initialize(t)}static parseQuery(t){let e={},r=("?"===t[0]?t.substr(1):t).split("&"),n=0;const i=r.length;for(n=0;n<i;n++){const t=r[n].split("=");e[decodeURIComponent(t[0])]=decodeURIComponent(t[1]||"")}return e}get view(){return this._view}loadView(t){var e=this;return(0,i.default)(n.default.mark(function r(){var o,s,a;return n.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!t){r.next=24;break}if(o=e._view,!e.transition||!e.transition.in){r.next=13;break}if(s=(0,i.default)(n.default.mark(function r(){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!u.default.containsClass(t.el,"transition-out")){e.next=5;break}return e.next=3,u.default.replaceClass(t.el,"transition-out","transition-in");case 3:e.next=7;break;case 5:return e.next=7,u.default.addClass(t.el,"transition-in");case 7:if(!t.render){e.next=10;break}return e.next=10,t.render();case 10:if(!t.delegateEvents){e.next=13;break}return e.next=13,t.delegateEvents();case 13:return e.next=15,u.default.removeClass(t.el,"transition-in");case 15:return e.abrupt("return",t);case 16:case"end":return e.stop()}},r,e)})),a=function(){return s.apply(this,arguments)},!o){r.next=8;break}return r.next=8,e.cleanup();case 8:return r.next=10,window.setTimeout(a,e.transition.in);case 10:e._view=t,r.next=22;break;case 13:if(!o){r.next=16;break}return r.next=16,e.cleanup(o);case 16:return r.next=18,t.render();case 18:if(!t.delegateEvents){r.next=21;break}return r.next=21,t.delegateEvents();case 21:e._view=t;case 22:r.next=25;break;case 24:console.warn("No view passed.");case 25:r.next=30;break;case 27:r.prev=27,r.t0=r.catch(0),console.error(r.t0);case 30:return r.abrupt("return",e);case 31:case"end":return r.stop()}},r,e,[[0,27]])}))()}cleanup(t){var e=this;return(0,i.default)(n.default.mark(function r(){var o,s,a;return n.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!t&&!e._view){r.next=15;break}if(o=t||e._view,!(e.transition&&e.transition.out&&o.el)){r.next=9;break}return s=(0,i.default)(n.default.mark(function t(){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!u.default.containsClass(o.el,"transition-in")){t.next=5;break}return t.next=3,u.default.replaceClass(o.el,"transition-in","transition-out");case 3:t.next=7;break;case 5:return t.next=7,u.default.addClass(o.el,"transition-out");case 7:if(!o.remove){t.next=10;break}return t.next=10,o.remove();case 10:return t.next=12,u.default.removeClass(o.el,"transition-out");case 12:return t.abrupt("return",o);case 13:case"end":return t.stop()}},t,e)})),a=function(){return s.apply(this,arguments)},r.next=6,window.setTimeout(a,e.transition.out);case 6:e._view=null,r.next=13;break;case 9:if(!e.view.remove){r.next=12;break}return r.next=12,e.view.remove();case 12:e._view=null;case 13:r.next=15;break;case 15:return r.abrupt("return",e);case 16:case"end":return r.stop()}},r,e)}))()}initialize(t){return super.initialize(t)}route(t,e,r){h(t)||(t=this._routeToRegExp(t)),(0,s.isFunction)(e)&&(r=e,e=""),r||(r=this[e]);const n=this;return this.history.route(t,i=>{const o=n._extractParameters(t,i);!1!==n.execute(r,o,e)&&(n.trigger.apply(n,["route:"+e].concat(o)),n.trigger("route",e,o),this.history.trigger("route",n,e,o))}),this}execute(t,e){t&&t.apply(this,e)}navigate(t,e){return this.history.navigate(t,e),{routes:this.routes}}startHistory(t){return this.history.started||this.history.start(t),!0}_bindRoutes(){if(!this.routes)return;this.routes=(0,s.result)(this,"routes");let t,e=Object.keys(this.routes);for(;null!=(t=e.pop());)this.route(t,this.routes[t])}_routeToRegExp(t){return t=t.replace(v,"\\$&").replace(l,"(?:$1)?").replace(p,(t,e)=>e?t:"([^/?]+)").replace(d,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")}_extractParameters(t,e){let r=t.exec(e).slice(1);return f(r,(t,e)=>e===r.length-1?t||null:t?decodeURIComponent(t):null)}}},function(t,e,r){"use strict";t.exports=r(41)},function(t,e,r){"use strict";var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(42),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e,r){"use strict";!function(e){var r,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"==typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{(f=e.regeneratorRuntime=c?t.exports:{}).wrap=_;var h="suspendedStart",l="suspendedYield",p="executing",d="completed",v={},y={};y[s]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(T([])));g&&g!==n&&i.call(g,s)&&(y=g);var x=S.prototype=b.prototype=Object.create(y);P.prototype=x.constructor=S,S.constructor=P,S[u]=P.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===P||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(x),t},f.awrap=function(t){return{__await:t}},j(k.prototype),k.prototype[a]=function(){return this},f.AsyncIterator=k,f.async=function(t,e,r,n){var i=new k(_(t,e,r,n));return f.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},j(x),x[u]="Generator",x[s]=function(){return this},x.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var u=i.call(s,"catchLoc"),c=i.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;E(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function _(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,o=Object.create(i.prototype),s=new C(n||[]);return o._invoke=function(t,e,r){var n=h;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return M()}for(r.method=i,r.arg=o;;){var s=r.delegate;if(s){var a=O(s,r);if(a){if(a===v)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=w(t,e,r);if("normal"===u.type){if(n=r.done?d:l,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,s),o}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function b(){}function P(){}function S(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,s){var a=w(t[r],t,n);if("throw"!==a.type){var u=a.arg,c=u.value;return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,s)},function(t){e("throw",t,o,s)}):Promise.resolve(c).then(function(t){u.value=t,o(u)},s)}s(a.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=w(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,r){"use strict";e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r(44));e.default=function(t){return function(){var e=t.apply(this,arguments);return new n.default(function(t,r){return function i(o,s){try{var a=e[o](s),u=a.value}catch(t){return void r(t)}if(!a.done)return n.default.resolve(u).then(function(t){i("next",t)},function(t){i("throw",t)});t(u)}("next")})}}},function(t,e,r){"use strict";t.exports={default:r(45),__esModule:!0}},function(t,e,r){"use strict";r(46),r(47),r(62),r(66),r(78),r(79),t.exports=r(2).Promise},function(t,e,r){"use strict"},function(t,e,r){"use strict";var n=r(48)(!0);r(22)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){"use strict";var n=r(14),i=r(15);t.exports=function(t){return function(e,r){var o,s,a=String(i(e)),u=n(r),c=a.length;return u<0||u>=c?t?"":void 0:(o=a.charCodeAt(u))<55296||o>56319||u+1===c||(s=a.charCodeAt(u+1))<56320||s>57343?t?a.charAt(u):o:t?a.slice(u,u+2):s-56320+(o-55296<<10)+65536}}},function(t,e,r){"use strict";t.exports=!r(6)&&!r(23)(function(){return 7!=Object.defineProperty(r(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){"use strict";var n=r(5);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){"use strict";t.exports=r(4)},function(t,e,r){"use strict";var n=r(53),i=r(24),o=r(20),s={};r(4)(s,r(1)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(s,{next:i(1,r)}),o(t,e+" Iterator")}},function(t,e,r){"use strict";var n=r(3),i=r(54),o=r(28),s=r(19)("IE_PROTO"),a=function(){},u=function(){var t,e=r(17)("iframe"),n=o.length;for(e.style.display="none",r(29).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;n--;)delete u.prototype[o[n]];return u()};t.exports=Object.create||function(t,e){var r;return null!==t?(a.prototype=n(t),r=new a,a.prototype=null,r[s]=t):r=u(),void 0===e?r:i(r,e)}},function(t,e,r){"use strict";var n=r(11),i=r(3),o=r(55);t.exports=r(6)?Object.defineProperties:function(t,e){i(t);for(var r,s=o(e),a=s.length,u=0;a>u;)n.f(t,r=s[u++],e[r]);return t}},function(t,e,r){"use strict";var n=r(56),i=r(28);t.exports=Object.keys||function(t){return n(t,i)}},function(t,e,r){"use strict";var n=r(12),i=r(18),o=r(58)(!1),s=r(19)("IE_PROTO");t.exports=function(t,e){var r,a=i(t),u=0,c=[];for(r in a)r!=s&&n(a,r)&&c.push(r);for(;e.length>u;)n(a,r=e[u++])&&(~o(c,r)||c.push(r));return c}},function(t,e,r){"use strict";var n=r(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){"use strict";var n=r(18),i=r(25),o=r(59);t.exports=function(t){return function(e,r,s){var a,u=n(e),c=i(u.length),f=o(s,c);if(t&&r!=r){for(;c>f;)if((a=u[f++])!=a)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){"use strict";var n=r(14),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=n(t))<0?i(t+e,0):o(t,e)}},function(t,e,r){"use strict";var n=r(12),i=r(61),o=r(19)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,r){"use strict";var n=r(15);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";r(63);for(var n=r(0),i=r(4),o=r(7),s=r(1)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var c=a[u],f=n[c],h=f&&f.prototype;h&&!h[s]&&i(h,s,c),o[c]=o.Array}},function(t,e,r){"use strict";var n=r(64),i=r(65),o=r(7),s=r(18);t.exports=r(22)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},function(t,e,r){"use strict";t.exports=function(){}},function(t,e,r){"use strict";t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,r){"use strict";var n,i,o,s,a=r(16),u=r(0),c=r(9),f=r(30),h=r(8),l=r(5),p=r(10),d=r(67),v=r(68),y=r(31),m=r(32).set,g=r(73)(),x=r(21),_=r(33),w=r(74),b=r(34),P=u.TypeError,S=u.process,j=S&&S.versions,k=j&&j.v8||"",O=u.Promise,L="process"==f(S),E=function(){},C=i=x.f,T=!!function(){try{var t=O.resolve(1),e=(t.constructor={})[r(1)("species")]=function(t){t(E,E)};return(L||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof e&&0!==k.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),M=function(t){var e;return!(!l(t)||"function"!=typeof(e=t.then))&&e},R=function(t,e){if(!t._n){t._n=!0;var r=t._c;g(function(){for(var n=t._v,i=1==t._s,o=0,s=function(e){var r,o,s,a=i?e.ok:e.fail,u=e.resolve,c=e.reject,f=e.domain;try{a?(i||(2==t._h&&A(t),t._h=1),!0===a?r=n:(f&&f.enter(),r=a(n),f&&(f.exit(),s=!0)),r===e.promise?c(P("Promise-chain cycle")):(o=M(r))?o.call(r,u,c):u(r)):c(n)}catch(t){f&&!s&&f.exit(),c(t)}};r.length>o;)s(r[o++]);t._c=[],t._n=!1,e&&!t._h&&F(t)})}},F=function(t){m.call(u,function(){var e,r,n,i=t._v,o=H(t);if(o&&(e=_(function(){L?S.emit("unhandledRejection",i,t):(r=u.onunhandledrejection)?r({promise:t,reason:i}):(n=u.console)&&n.error&&n.error("Unhandled promise rejection",i)}),t._h=L||H(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},H=function(t){return 1!==t._h&&0===(t._a||t._c).length},A=function(t){m.call(u,function(){var e;L?S.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},I=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),R(e,!0))},U=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw P("Promise can't be resolved itself");(e=M(t))?g(function(){var n={_w:r,_d:!1};try{e.call(t,c(U,n,1),c(I,n,1))}catch(t){I.call(n,t)}}):(r._v=t,r._s=1,R(r,!1))}catch(t){I.call({_w:r,_d:!1},t)}}};T||(O=function(t){d(this,O,"Promise","_h"),p(t),n.call(this);try{t(c(U,this,1),c(I,this,1))}catch(t){I.call(this,t)}},(n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(75)(O.prototype,{then:function(t,e){var r=C(y(this,O));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=L?S.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&R(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n;this.promise=t,this.resolve=c(U,t,1),this.reject=c(I,t,1)},x.f=C=function(t){return t===O||t===s?new o(t):i(t)}),h(h.G+h.W+h.F*!T,{Promise:O}),r(20)(O,"Promise"),r(76)("Promise"),s=r(2).Promise,h(h.S+h.F*!T,"Promise",{reject:function(t){var e=C(this);return(0,e.reject)(t),e.promise}}),h(h.S+h.F*(a||!T),"Promise",{resolve:function(t){return b(a&&this===s?O:this,t)}}),h(h.S+h.F*!(T&&r(77)(function(t){O.all(t).catch(E)})),"Promise",{all:function(t){var e=this,r=C(e),n=r.resolve,i=r.reject,o=_(function(){var r=[],o=0,s=1;v(t,!1,function(t){var a=o++,u=!1;r.push(void 0),s++,e.resolve(t).then(function(t){u||(u=!0,r[a]=t,--s||n(r))},i)}),--s||n(r)});return o.e&&i(o.v),r.promise},race:function(t){var e=this,r=C(e),n=r.reject,i=_(function(){v(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return i.e&&n(i.v),r.promise}})},function(t,e,r){"use strict";t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,e,r){"use strict";var n=r(9),i=r(69),o=r(70),s=r(3),a=r(25),u=r(71),c={},f={},h=t.exports=function(t,e,r,h,l){var p,d,v,y,m=l?function(){return t}:u(t),g=n(r,h,e?2:1),x=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(o(m)){for(p=a(t.length);p>x;x++)if((y=e?g(s(d=t[x])[0],d[1]):g(t[x]))===c||y===f)return y}else for(v=m.call(t);!(d=v.next()).done;)if((y=i(v,g,d.value,e))===c||y===f)return y};h.BREAK=c,h.RETURN=f},function(t,e,r){"use strict";var n=r(3);t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&n(o.call(t)),e}}},function(t,e,r){"use strict";var n=r(7),i=r(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[i]===t)}},function(t,e,r){"use strict";var n=r(30),i=r(1)("iterator"),o=r(7);t.exports=r(2).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,e,r){"use strict";t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},function(t,e,r){"use strict";var n=r(0),i=r(32).set,o=n.MutationObserver||n.WebKitMutationObserver,s=n.process,a=n.Promise,u="process"==r(13)(s);t.exports=function(){var t,e,r,c=function(){var n,i;for(u&&(n=s.domain)&&n.exit();t;){i=t.fn,t=t.next;try{i()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(u)r=function(){s.nextTick(c)};else if(!o||n.navigator&&n.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);r=function(){f.then(c)}}else r=function(){i.call(n,c)};else{var h=!0,l=document.createTextNode("");new o(c).observe(l,{characterData:!0}),r=function(){l.data=h=!h}}return function(n){var i={fn:n,next:void 0};e&&(e.next=i),t||(t=i,r()),e=i}}},function(t,e,r){"use strict";var n=r(0).navigator;t.exports=n&&n.userAgent||""},function(t,e,r){"use strict";var n=r(4);t.exports=function(t,e,r){for(var i in e)r&&t[i]?t[i]=e[i]:n(t,i,e[i]);return t}},function(t,e,r){"use strict";var n=r(0),i=r(2),o=r(11),s=r(6),a=r(1)("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:n[t];s&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,r){"use strict";var n=r(1)("iterator"),i=!1;try{var o=[7][n]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var r=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:r=!0}},o[n]=function(){return s},t(o)}catch(t){}return r}},function(t,e,r){"use strict";var n=r(8),i=r(2),o=r(0),s=r(31),a=r(34);n(n.P+n.R,"Promise",{finally:function(t){var e=s(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return a(e,t()).then(function(){return r})}:t,r?function(r){return a(e,t()).then(function(){throw r})}:t)}})},function(t,e,r){"use strict";var n=r(8),i=r(21),o=r(33);n(n.S,"Promise",{try:function(t){var e=i.f(this),r=o(t);return(r.e?e.reject:e.resolve)(r.v),e.promise}})},function(t,e){t.exports=r},function(t,e){t.exports=n},function(t,e){t.exports=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=(t=>{let e=[],r=null;for(r in t)t.hasOwnProperty(r)&&e.push(`${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`);return e.join("&")})}])});
//# sourceMappingURL=presentation-router.js.map