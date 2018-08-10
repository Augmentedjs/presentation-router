(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash.isregexp"), require("lodash.map"), require("presentation-dom"));
	else if(typeof define === 'function' && define.amd)
		define("presentation-router", ["lodash.isregexp", "lodash.map", "presentation-dom"], factory);
	else if(typeof exports === 'object')
		exports["presentation-router"] = factory(require("lodash.isregexp"), require("lodash.map"), require("presentation-dom"));
	else
		root["presentation-router"] = factory(root["lodash.isregexp"], root["lodash.map"], root["presentation-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_lodash_isregexp__, __WEBPACK_EXTERNAL_MODULE_lodash_map__, __WEBPACK_EXTERNAL_MODULE_presentation_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/augmentedjs-next/dist/augmented-next.js":
/*!**************************************************************!*\
  !*** ./node_modules/augmentedjs-next/dist/augmented-next.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (t, e) {
   true ? module.exports = e() : undefined;
}(window, function () {
  return function (t) {
    var e = {};function r(n) {
      if (e[n]) return e[n].exports;var i = e[n] = { i: n, l: !1, exports: {} };return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }return r.m = t, r.c = e, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
    }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function (e) {
        return t[e];
      }.bind(null, i));return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "/dist/", r(r.s = 32);
  }([function (t, e, r) {
    "use strict";
    var n;n = function () {
      return this;
    }();try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (n = window);
    }t.exports = n;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });const n = {};n.OAUTH2 = Symbol("oauth2"), n.ACL = Symbol("acl"), e.default = n;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = s(r(3)),
        i = s(r(15)),
        o = r(36);function s(t) {
      return t && t.__esModule ? t : { default: t };
    }const a = r(37);e.default = class {
      constructor(t) {
        t || (t = {}), this._options || (this._options = {}), Object.assign(this._options, t), t && t.events ? this._events = t.events : this._events = {}, this._listeningTo = {}, this._listenId = {}, this._listeners = {};
      }initialize(...t) {
        return this;
      }get options() {
        return this._options;
      }set options(t) {
        this._options = t;
      }get events() {
        return this._events;
      }set events(t) {
        this._events = t;
      }trigger(t, ...e) {
        if (this._events) {
          const r = Array.isArray(e) ? e : Array.from(e);(0, o.eventsApi)(o.triggerApi, this._events, t, void 0, r);
        }return this;
      }once(t, e, r) {
        const n = (0, o.eventsApi)(this._onceMap, {}, t, e, a(this.off, this));return "string" == typeof t && null == r && (e = void 0), this.on(n, e, r);
      }off(t, e, r) {
        return this._events && (this._events = (0, o.eventsApi)(o.offApi, this._events, t, e, { context: r, listeners: this._listeners })), this;
      }stopListening(t, e, r) {
        const n = this._listeningTo;if (n) {
          const i = t ? [t._listenId] : Object.keys(n);let o = 0;for (o = 0; o < i.length; o++) {
            const t = n[i[o]];if (!t) break;t.obj.off(e, r, this);
          }
        }return this;
      }on(t, e, r) {
        return (0, o.internalOn)(this, t, e, r);
      }listenTo(t, e, r) {
        if (t) {
          const i = t._listenId || (t._listenId = (0, n.default)("l")),
                s = this._listeningTo || (this._listeningTo = {});let a = s[i];if (!a) {
            const e = this._listenId || (this._listenId = (0, n.default)("l"));a = s[i] = { obj: t, objId: i, id: e, listeningTo: s, count: 0 };
          }(0, o.internalOn)(t, e, r, this, a);
        }return this;
      }listenToOnce(t, e, r) {
        const n = (0, o.eventsApi)(this._onceMap, {}, e, r, a(this.stopListening, this, t));return this.listenTo(t, n);
      }_onceMap(t, e, r, n) {
        if (r) {
          const o = t[e] = (0, i.default)(() => {
            n(e, o), r.apply(this, arguments);
          });o._callback = r;
        }return t;
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });let n = 0;e.default = t => {
      return `${t}${++n}`;
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = (...t) => {
      let e = 0;const r = t.length;for (e = 1; e < r; e++) {
        let r;for (r in t[e]) t[e].hasOwnProperty(r) && (t[0][r] = t[e][r]);
      }return t[0];
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function () {
          return t.l;
        } }), Object.defineProperty(t, "id", { enumerable: !0, get: function () {
          return t.i;
        } }), t.webpackPolyfill = 1), t;
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });const n = {};n.INFO = Symbol("info"), n.DEBUG = Symbol("debug"), n.ERROR = Symbol("error"), n.WARN = Symbol("warn"), e.default = n;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = t => {
      const e = typeof t;return "function" === e || "object" === e && !!t;
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = s(r(19)),
        i = s(r(38)),
        o = r(9);function s(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class {
      constructor() {
        this._myValidator = (0, i.default)(), this._myValidator && this._myValidator.addLanguage("en-us", o.ERROR_MESSAGES_DEFAULT);
      }supportsValidation() {
        return null !== this._myValidator;
      }registerSchema(t, e) {
        return this._myValidator.addSchema(t, e);
      }getSchema(t) {
        return this._myValidator.getSchema(t);
      }getSchemas() {
        return this._myValidator.getSchemaMap();
      }clearSchemas() {
        this._myValidator.dropSchemas();
      }validate(t, e) {
        return this._myValidator.validateMultiple(t, e);
      }getValidationMessages() {
        return this._myValidator.error;
      }generateSchema(t) {
        let e = t;return (0, n.default)(e);
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });const n = { INVALID_TYPE: 0, ENUM_MISMATCH: 1, ANY_OF_MISSING: 10, ONE_OF_MISSING: 11, ONE_OF_MULTIPLE: 12, NOT_PASSED: 13, NUMBER_MULTIPLE_OF: 100, NUMBER_MINIMUM: 101, NUMBER_MINIMUM_EXCLUSIVE: 102, NUMBER_MAXIMUM: 103, NUMBER_MAXIMUM_EXCLUSIVE: 104, NUMBER_NOT_A_NUMBER: 105, STRING_LENGTH_SHORT: 200, STRING_LENGTH_LONG: 201, STRING_PATTERN: 202, OBJECT_PROPERTIES_MINIMUM: 300, OBJECT_PROPERTIES_MAXIMUM: 301, OBJECT_REQUIRED: 302, OBJECT_ADDITIONAL_PROPERTIES: 303, OBJECT_DEPENDENCY_KEY: 304, ARRAY_LENGTH_SHORT: 400, ARRAY_LENGTH_LONG: 401, ARRAY_UNIQUE: 402, ARRAY_ADDITIONAL_ITEMS: 403, FORMAT_CUSTOM: 500, KEYWORD_CUSTOM: 501, CIRCULAR_REFERENCE: 600, UNKNOWN_PROPERTY: 1e3 };let i,
        o = {};for (i in n) o[n[i]] = i;e.ERROR_CODES = n, e.ERROR_MESSAGES_DEFAULT = { INVALID_TYPE: "Invalid type: {type} (expected {expected})", ENUM_MISMATCH: "No enum match for: {value}", ANY_OF_MISSING: 'Data does not match any schemas from "anyOf"', ONE_OF_MISSING: 'Data does not match any schemas from "oneOf"', ONE_OF_MULTIPLE: 'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}', NOT_PASSED: 'Data matches schema from "not"', NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}", NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}", NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}", NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}", NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}", NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number", STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}", STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}", STRING_PATTERN: "String does not match pattern: {pattern}", OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}", OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}", OBJECT_REQUIRED: "Missing required property: {key}", OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed", OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})", ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}", ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}", ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})", ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed", FORMAT_CUSTOM: "Format validation failed ({message})", KEYWORD_CUSTOM: "Keyword failed: {key} ({message})", CIRCULAR_REFERENCE: "Circular $refs: {urls}", UNKNOWN_PROPERTY: "Unknown property (not in schema)" }, e.ValidationError = class {
      constructor(t, e, r, n, i, o) {
        if (void 0 === t) throw new Error("No code supplied for error: " + e);this.message = e, this.params = r, this.code = t, this.dataPath = n || "", this.schemaPath = i || "", this.subErrors = o || null;const s = new Error(this.message);if (this.stack = s.stack || s.stacktrace, !this.stack) try {
          throw s;
        } catch (t) {
          this.stack = t.stack || t.stacktrace;
        }this.name = "ValidationError";
      }prefixWith(t, e) {
        if (null !== t && (t = t.replace(/~/g, "~0").replace(/\//g, "~1"), this.dataPath = "/" + t + this.dataPath), null !== e && (e = e.replace(/~/g, "~0").replace(/\//g, "~1"), this.schemaPath = "/" + e + this.schemaPath), null !== this.subErrors) {
          let r = 0,
              n = this.subErrors.length;for (r = 0; r < n; r++) this.subErrors[r].prefixWith(t, e);
        }return this;
      }
    }, e.ErrorCodeLookup = o;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = t => "string" == typeof t || !!t && "object" == typeof t && "[object String]" === Object.prototype.toString.call(t);
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = t => "[object Function]" == Object.prototype.toString.call(t);
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = o(r(25)),
        i = o(r(6));function o(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class {
      constructor(t) {
        this.loggerLevel = t || i.default.INFO, this.label = i.default, this.TIME_SEPERATOR = ":", this.DATE_SEPERATOR = "-", this.OPEN_GROUP = " [ ", this.CLOSE_GROUP = " ] ";
      }_getLogTime() {
        const t = new Date(),
              e = `${t.getFullYear()}${this.DATE_SEPERATOR}${t.getMonth() + 1}${this.DATE_SEPERATOR}${t.getDate()} ${t.getHours()}${this.TIME_SEPERATOR}${t.getMinutes()}${this.TIME_SEPERATOR}${t.getSeconds()}${this.TIME_SEPERATOR}${t.getMilliseconds()}`;return (0, n.default)("                        ", e, !1);
      }log(t, e) {
        let r = "";return t && (e || (e = i.default.INFO), this.loggerLevel === i.default.DEBUG && e === i.default.DEBUG ? r = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}DEBUG${this.CLOSE_GROUP}${t}`, e) : e === i.default.ERROR ? r = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}ERROR${this.CLOSE_GROUP}${t}`, e) : e === i.default.WARN ? r = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}WARN ${this.CLOSE_GROUP}${t}`, e) : this.loggerLevel !== i.default.DEBUG && this.loggerLevel !== i.default.INFO || (r = this._logMe(`${this._getLogTime()}${this.OPEN_GROUP}INFO ${this.CLOSE_GROUP}${t}`, e))), r;
      }info(t) {
        this.log(t, i.default.INFO);
      }error(t) {
        this.log(t, i.default.ERROR);
      }debug(t) {
        this.log(t, i.default.DEBUG);
      }warn(t) {
        this.log(t, i.default.WARN);
      }_logMe(t, e) {}
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = i(r(2));i(r(1));function i(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class extends n.default {
      constructor(t) {
        super(), this._type = t, this._uri = "";
      }get uri() {
        return this._uri;
      }set uri(t) {
        this._uri = t;
      }get type() {
        return this._type;
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.sortObjects = (t, e) => t.sort((t, r) => {
      const n = t[e],
            i = r[e];return n < i ? -1 : n > i ? 1 : 0;
    });const n = e.mergeSort = t => {
      if (1 === t.length) return t;const e = Math.floor(t.length / 2),
            r = t.slice(0, e),
            o = t.slice(e);return i(n(r), n(o));
    },
          i = (t, e) => {
      let r = [],
          n = 0,
          i = 0;for (; n < t.length && i < e.length;) t[n] < e[i] ? (r.push(t[n]), n++) : (r.push(e[i]), i++);return r.concat(t.slice(n)).concat(e.slice(i));
    },
          o = e.quickSort = t => {
      if (0 === t.length) return [];let e = 1;const r = t.length,
            n = [],
            i = [],
            s = t[0];for (e = 1; e < r; e++) t[e] < s ? n.push(t[e]) : i.push(t[e]);return o(n).concat(s, o(i));
    };e.insertionSort = t => {
      let e = [];if (t) {
        const r = (e = t.slice()).length;let n, i, o;for (n = 1; n < r; n++) {
          for (o = e[n], i = n - 1; i >= 0 && e[i] > o; i--) e[i + 1] = e[i];e[i + 1] = o;
        }
      }return e;
    }, e.bubbleSort = t => {
      let e = [];if (t) {
        let r, n, i;const o = (e = t.slice()).length - 1;do {
          for (r = !1, n = 0; n < o; n++) e[n] > e[n + 1] && (i = e[n], e[n] = e[n + 1], e[n + 1] = i, r = !0);
        } while (r);
      }return e;
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r(16));e.default = t => (0, n.default)(2, t);
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = arguments;e.default = (t, e) => {
      let r, i;if ("function" != typeof e) throw new TypeError(FUNC_ERROR_TEXT);return i = Number.parseInt(t), () => (--i > 0 && (r = e.apply(void 0, n)), i <= 1 && (e = void 0), r);
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = a(r(2)),
        i = a(r(4)),
        o = a(r(3)),
        s = (a(r(18)), a(r(8)));function a(t) {
      return t && t.__esModule ? t : { default: t };
    }const u = r(21),
          l = r(40),
          c = r(41),
          f = r(42),
          h = r(43),
          d = r(44),
          p = r(45),
          _ = r(46),
          y = r(47),
          v = (t, e) => {
      if (t) {
        const r = e.error;e.error = n => {
          r && r.call(e.context, t, n, e), t.trigger("error", t, n, e);
        };
      }
    };e.default = class extends n.default {
      constructor(t, e, ...r) {
        let n;super(e), this.id = 0, this.idAttribute = "id", this.cidPrefix = "c", this.defaults = {}, this.validationError = null, this.urlRoot = "", this._pending = !1, this._changing = !1, this._previousAttributes = null, this._attributes = t || {}, e || (e = {}), this.schema = null, this.validationMessages = { valid: !0 }, e && e.schema && (this.schema = e.schema), this.preinitialize(r), this.cid = (0, o.default)(this.cidPrefix), e && e.collection && (this.collection = e.collection), e && e.parse && (n = this.parse(n, e) || {}), this.defaults = l(this, "defaults"), n = d((0, i.default)({}, this.defaults, n), this.defaults), this.set(n, e), this.changed = {}, this.initialize(r);
      }preinitialize(...t) {}initialize(...t) {}get(t) {
        return this._attributes[t];
      }set(t, e, r) {
        if (null === t) return this;let n;if ("object" == typeof t ? (n = t, r = e) : (n = {})[t] = e, r || (r = {}), !this._validate(n, r)) return !1;let i = r.unset,
            o = r.silent,
            s = [],
            a = this._changing;this._changing = !0, a || (this._previousAttributes = u(this._attributes), this.changed = {});let l,
            c = this._attributes,
            f = this.changed,
            d = this._previousAttributes;for (l in n) e = n[l], h(c[l], e) || s.push(l), h(d[l], e) ? delete f[l] : f[l] = e, i ? delete c[l] : c[l] = e;if (this.idAttribute in n && (this.id = this.get(this.idAttribute)), !o) {
          s.length && (this._pending = r);let t = 0;for (t = 0; t < s.length; t++) this.trigger("change:" + s[t], this, c[s[t]], r);
        }if (a) return this;if (!o) for (; this._pending;) r = this._pending, this._pending = !1, this.trigger("change", this, r);return this._pending = !1, this._changing = !1, this;
      }escape(t) {
        return y(this.get(attr));
      }has(t) {
        return null !== this.get(attr);
      }matches(t) {
        return !!p(t, this)(this._attributes);
      }unset(t, e) {
        return this.set(t, void 0, (0, i.default)({}, e, { unset: !0 }));
      }clear(t) {
        let e = {};for (let t in this._attributes) e[t] = void 0;return this.set(e, (0, i.default)({}, t, { unset: !0 }));
      }toJSON() {
        return u(this._attributes);
      }fetch(t) {
        let e = this,
            r = (t = (0, i.default)({ parse: !0 }, t)).success;return t.success = n => {
          let i = t.parse ? e.parse(n, t) : n;if (!e.set(i, t)) return !1;r && r.call(t.context, e, n, t), e.trigger("sync", e, n, t);
        }, v(this, t), this.sync("read", this, t);
      }save(t, e, r) {
        let n;null == t || "object" == typeof t ? (n = t, r = e) : (n = {})[t] = e;let o = (r = (0, i.default)({ validate: !0, parse: !0 }, r)).wait;if (n && !o) {
          if (!this.set(n, r)) return !1;
        } else if (!this._validate(n, r)) return !1;let s = this,
            a = r.success,
            u = this._attributes;r.success = t => {
          s.attributes = u;let e = r.parse ? s.parse(t, r) : t;if (o && (e = (0, i.default)({}, n, e)), e && !s.set(e, r)) return !1;a && a.call(r.context, s, t, r), s.trigger("sync", s, t, r);
        }, v(this, r), n && o && (this._attributes = (0, i.default)({}, u, n));let l = this.isNew() ? "create" : r.patch ? "patch" : "update";"patch" !== l || r.attrs || (r.attrs = n);let c = this.sync(l, this, r);return this._attributes = u, c;
      }destroy(t) {
        let e = this,
            r = (t = t ? u(t) : {}).success,
            n = t.wait,
            i = () => {
          e.stopListening(), e.trigger("destroy", e, e.collection, t);
        };t.success = o => {
          n && i(), r && r.call(t.context, e, o, t), e.isNew() || e.trigger("sync", e, o, t);
        };let o = !1;return this.isNew() ? _(t.success) : (v(this, t), o = this.sync("delete", this, t)), n || i(), o;
      }url() {
        let t = l(this, "urlRoot") || l(this.collection, "url") || urlError();if (this.isNew()) return t;let e = this.get(this.idAttribute);return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e);
      }keys() {
        return Object.keys(this._attributes);
      }values() {
        return Object.values(this._attributes);
      }parse(t, e) {
        return t;
      }clone() {
        return new this.constructor(this._attributes);
      }isNew() {
        return !this.has(this.idAttribute);
      }hasChanged(t) {
        return null == t ? !c(this.changed) : f(this.changed, t);
      }changedAttributes(t) {
        if (!t) return !!this.hasChanged() && u(this.changed);let e,
            r = this._changing ? this._previousAttributes : this._attributes,
            n = {};for (let i in t) {
          let o = t[i];h(r[i], o) || (n[i] = o, e = !0);
        }return !!e && n;
      }previous(t) {
        return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
      }previousAttributes() {
        return u(this._previousAttributes);
      }supportsValidation() {
        return null !== this.schema;
      }isValid(t) {
        const e = this._validate({}, (0, i.default)({}, t, { validate: !0 }));return e ? (this.validate(), this.validationMessages.valid) : e;
      }validate() {
        this._validationFramework || (this._validationFramework = new s.default());const t = this._validationFramework;return this.supportsValidation() && t.supportsValidation() ? this.validationMessages = t.validate(this.toJSON(), this.schema) : this.validationMessages.valid = !0, this.validationMessages;
      }getValidationMessages() {
        const t = [];if (this.validationMessages && this.validationMessages.errors) {
          const r = this.validationMessages.errors.length;var e = 0;for (e = 0; e < r; e++) t.push(this.validationMessages.errors[e].message + " from " + this.validationMessages.errors[e].dataPath);
        }return t;
      }sync(t, e, r) {}reset(t) {
        this.clear(), t && this.set(t);
      }isEmpty() {
        return !this._attributes || 0 === Object.keys(this._attributes).length;
      }toString() {
        return JSON.stringify(this.toJSON());
      }fetch(t) {
        this.sync("read", this, t);
      }save(t) {
        this.sync("create", this, t);
      }update(t) {
        this.sync("update", this, t);
      }destroy(t) {
        this.sync("delete", this, t);
      }_validate(t, e) {
        if (!e.validate || !this.validate) return !0;const r = this.validate();return !!r.valid || (this.trigger("invalid", this, r, (0, i.default)(e, { validationError: r })), !1);
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r(7));e.default = t => (0, n.default)(t) ? Object.getOwnPropertyNames(t) : [];
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });const n = { $schema: "http://json-schema.org/draft-04/schema#", title: "model", description: "Generated Schema", type: "object", properties: {} };e.default = t => {
      let e,
          r,
          i,
          o,
          s = n,
          a = Object.keys(t),
          u = a.length;for (e = 0; e < u; e++) for (i in r = a[e]) if (r.hasOwnProperty(i)) {
        o = s.properties[r] = {};let e = typeof t[r];"object" === e ? e = Array.isArray(t[r]) ? "array" : "object" : "number" === e && (e = Number.isInteger(t[r]) ? "integer" : "number"), o.type = e, o.description = String(r);
      }return s;
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.URI_TEMPLATE_GLOBAL_MODIFIERS = { "+": !0, "#": !0, ".": !0, "/": !0, ";": !0, "?": !0, "&": !0 }, e.URI_TEMPLATE_SUFFICES = { "*": !0 };const n = e.parseURI = t => {
      const e = String(t).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return e ? { href: e[0] || "", protocol: e[1] || "", authority: e[2] || "", host: e[3] || "", hostname: e[4] || "", port: e[5] || "", pathname: e[6] || "", search: e[7] || "", hash: e[8] || "" } : null;
    },
          i = e.removeDotSegments = t => {
      let e = [];return t.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function (t) {
        "/.." === t ? e.pop() : e.push(t);
      }), e.join("").replace(/^\//, "/" === t.charAt(0) ? "/" : "");
    },
          o = e.resolveUrl = (t, e) => (e = n(e || ""), t = n(t || ""), e && t ? (e.protocol || t.protocol) + (e.protocol || e.authority ? e.authority : t.authority) + i(e.protocol || e.authority || "/" === e.pathname.charAt(0) ? e.pathname : e.pathname ? (t.authority && !t.pathname ? "/" : "") + t.pathname.slice(0, t.pathname.lastIndexOf("/") + 1) + e.pathname : t.pathname) + (e.protocol || e.authority || e.pathname ? e.search : e.search || t.search) + e.hash : null),
          s = (e.getDocumentUri = t => t.split("#")[0], e.isTrustedUrl = (t, e) => {
      if (e.substring(0, t.length) === t) {
        let r = e.substring(t.length);if (e.length > 0 && "/" === e.charAt(t.length - 1) || "#" === r.charAt(0) || "?" === r.charAt(0)) return !0;
      }return !1;
    }, e.normSchema = (t, e) => {
      if (t && "object" == typeof t) if (void 0 === e ? e = t.id : "string" == typeof t.id && (e = o(e, t.id), t.id = e), Array.isArray(t)) {
        let r = 0,
            n = t.length;for (r = 0; r < n; r++) s(t[r], e);
      } else {
        "string" == typeof t.$ref && (t.$ref = o(e, t.$ref));for (let r in t) "enum" !== r && s(t[r], e);
      }
    });
  }, function (t, e, r) {
    "use strict";
    (function (t, r) {
      var n = 200,
          i = "__lodash_hash_undefined__",
          o = 9007199254740991,
          s = "[object Arguments]",
          a = "[object Boolean]",
          u = "[object Date]",
          l = "[object Function]",
          c = "[object GeneratorFunction]",
          f = "[object Map]",
          h = "[object Number]",
          d = "[object Object]",
          p = "[object RegExp]",
          _ = "[object Set]",
          y = "[object String]",
          v = "[object Symbol]",
          g = "[object ArrayBuffer]",
          m = "[object DataView]",
          b = "[object Float32Array]",
          O = "[object Float64Array]",
          E = "[object Int8Array]",
          j = "[object Int16Array]",
          R = "[object Int32Array]",
          S = "[object Uint8Array]",
          A = "[object Uint8ClampedArray]",
          M = "[object Uint16Array]",
          w = "[object Uint32Array]",
          P = /\w*$/,
          I = /^\[object .+?Constructor\]$/,
          N = /^(?:0|[1-9]\d*)$/,
          T = {};T[s] = T["[object Array]"] = T[g] = T[m] = T[a] = T[u] = T[b] = T[O] = T[E] = T[j] = T[R] = T[f] = T[h] = T[d] = T[p] = T[_] = T[y] = T[v] = T[S] = T[A] = T[M] = T[w] = !0, T["[object Error]"] = T[l] = T["[object WeakMap]"] = !1;var k = "object" == typeof t && t && t.Object === Object && t,
          x = "object" == typeof self && self && self.Object === Object && self,
          U = k || x || Function("return this")(),
          C = "object" == typeof e && e && !e.nodeType && e,
          L = C && "object" == typeof r && r && !r.nodeType && r,
          D = L && L.exports === C;function $(t, e) {
        return t.set(e[0], e[1]), t;
      }function F(t, e) {
        return t.add(e), t;
      }function B(t, e, r, n) {
        var i = -1,
            o = t ? t.length : 0;for (n && o && (r = t[++i]); ++i < o;) r = e(r, t[i], i, t);return r;
      }function G(t) {
        var e = !1;if (null != t && "function" != typeof t.toString) try {
          e = !!(t + "");
        } catch (t) {}return e;
      }function z(t) {
        var e = -1,
            r = Array(t.size);return t.forEach(function (t, n) {
          r[++e] = [n, t];
        }), r;
      }function V(t, e) {
        return function (r) {
          return t(e(r));
        };
      }function W(t) {
        var e = -1,
            r = Array(t.size);return t.forEach(function (t) {
          r[++e] = t;
        }), r;
      }var K = Array.prototype,
          J = Function.prototype,
          Y = Object.prototype,
          q = U["__core-js_shared__"],
          H = function () {
        var t = /[^.]+$/.exec(q && q.keys && q.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
      }(),
          X = J.toString,
          Q = Y.hasOwnProperty,
          Z = Y.toString,
          tt = RegExp("^" + X.call(Q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          et = D ? U.Buffer : void 0,
          rt = U.Symbol,
          nt = U.Uint8Array,
          it = V(Object.getPrototypeOf, Object),
          ot = Object.create,
          st = Y.propertyIsEnumerable,
          at = K.splice,
          ut = Object.getOwnPropertySymbols,
          lt = et ? et.isBuffer : void 0,
          ct = V(Object.keys, Object),
          ft = Ct(U, "DataView"),
          ht = Ct(U, "Map"),
          dt = Ct(U, "Promise"),
          pt = Ct(U, "Set"),
          _t = Ct(U, "WeakMap"),
          yt = Ct(Object, "create"),
          vt = Bt(ft),
          gt = Bt(ht),
          mt = Bt(dt),
          bt = Bt(pt),
          Ot = Bt(_t),
          Et = rt ? rt.prototype : void 0,
          jt = Et ? Et.valueOf : void 0;function Rt(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function St(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function At(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function Mt(t) {
        this.__data__ = new St(t);
      }function wt(t, e) {
        var r = zt(t) || function (t) {
          return function (t) {
            return function (t) {
              return !!t && "object" == typeof t;
            }(t) && Vt(t);
          }(t) && Q.call(t, "callee") && (!st.call(t, "callee") || Z.call(t) == s);
        }(t) ? function (t, e) {
          for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);return n;
        }(t.length, String) : [],
            n = r.length,
            i = !!n;for (var o in t) !e && !Q.call(t, o) || i && ("length" == o || $t(o, n)) || r.push(o);return r;
      }function Pt(t, e, r) {
        var n = t[e];Q.call(t, e) && Gt(n, r) && (void 0 !== r || e in t) || (t[e] = r);
      }function It(t, e) {
        for (var r = t.length; r--;) if (Gt(t[r][0], e)) return r;return -1;
      }function Nt(t, e, r, n, i, o, I) {
        var N;if (n && (N = o ? n(t, i, o, I) : n(t)), void 0 !== N) return N;if (!Jt(t)) return t;var k = zt(t);if (k) {
          if (N = function (t) {
            var e = t.length,
                r = t.constructor(e);e && "string" == typeof t[0] && Q.call(t, "index") && (r.index = t.index, r.input = t.input);return r;
          }(t), !e) return function (t, e) {
            var r = -1,
                n = t.length;e || (e = Array(n));for (; ++r < n;) e[r] = t[r];return e;
          }(t, N);
        } else {
          var x = Dt(t),
              U = x == l || x == c;if (Wt(t)) return function (t, e) {
            if (e) return t.slice();var r = new t.constructor(t.length);return t.copy(r), r;
          }(t, e);if (x == d || x == s || U && !o) {
            if (G(t)) return o ? t : {};if (N = function (t) {
              return "function" != typeof t.constructor || Ft(t) ? {} : function (t) {
                return Jt(t) ? ot(t) : {};
              }(it(t));
            }(U ? {} : t), !e) return function (t, e) {
              return xt(t, Lt(t), e);
            }(t, function (t, e) {
              return t && xt(e, Yt(e), t);
            }(N, t));
          } else {
            if (!T[x]) return o ? t : {};N = function (t, e, r, n) {
              var i = t.constructor;switch (e) {case g:
                  return kt(t);case a:case u:
                  return new i(+t);case m:
                  return function (t, e) {
                    var r = e ? kt(t.buffer) : t.buffer;return new t.constructor(r, t.byteOffset, t.byteLength);
                  }(t, n);case b:case O:case E:case j:case R:case S:case A:case M:case w:
                  return function (t, e) {
                    var r = e ? kt(t.buffer) : t.buffer;return new t.constructor(r, t.byteOffset, t.length);
                  }(t, n);case f:
                  return function (t, e, r) {
                    return B(e ? r(z(t), !0) : z(t), $, new t.constructor());
                  }(t, n, r);case h:case y:
                  return new i(t);case p:
                  return function (t) {
                    var e = new t.constructor(t.source, P.exec(t));return e.lastIndex = t.lastIndex, e;
                  }(t);case _:
                  return function (t, e, r) {
                    return B(e ? r(W(t), !0) : W(t), F, new t.constructor());
                  }(t, n, r);case v:
                  return function (t) {
                    return jt ? Object(jt.call(t)) : {};
                  }(t);}
            }(t, x, Nt, e);
          }
        }I || (I = new Mt());var C = I.get(t);if (C) return C;if (I.set(t, N), !k) var L = r ? function (t) {
          return function (t, e, r) {
            var n = e(t);return zt(t) ? n : function (t, e) {
              for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];return t;
            }(n, r(t));
          }(t, Yt, Lt);
        }(t) : Yt(t);return function (t, e) {
          for (var r = -1, n = t ? t.length : 0; ++r < n && !1 !== e(t[r], r, t););
        }(L || t, function (i, o) {
          L && (i = t[o = i]), Pt(N, o, Nt(i, e, r, n, o, t, I));
        }), N;
      }function Tt(t) {
        return !(!Jt(t) || function (t) {
          return !!H && H in t;
        }(t)) && (Kt(t) || G(t) ? tt : I).test(Bt(t));
      }function kt(t) {
        var e = new t.constructor(t.byteLength);return new nt(e).set(new nt(t)), e;
      }function xt(t, e, r, n) {
        r || (r = {});for (var i = -1, o = e.length; ++i < o;) {
          var s = e[i],
              a = n ? n(r[s], t[s], s, r, t) : void 0;Pt(r, s, void 0 === a ? t[s] : a);
        }return r;
      }function Ut(t, e) {
        var r = t.__data__;return function (t) {
          var e = typeof t;return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
        }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      }function Ct(t, e) {
        var r = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return Tt(r) ? r : void 0;
      }Rt.prototype.clear = function () {
        this.__data__ = yt ? yt(null) : {};
      }, Rt.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t];
      }, Rt.prototype.get = function (t) {
        var e = this.__data__;if (yt) {
          var r = e[t];return r === i ? void 0 : r;
        }return Q.call(e, t) ? e[t] : void 0;
      }, Rt.prototype.has = function (t) {
        var e = this.__data__;return yt ? void 0 !== e[t] : Q.call(e, t);
      }, Rt.prototype.set = function (t, e) {
        return this.__data__[t] = yt && void 0 === e ? i : e, this;
      }, St.prototype.clear = function () {
        this.__data__ = [];
      }, St.prototype.delete = function (t) {
        var e = this.__data__,
            r = It(e, t);return !(r < 0 || (r == e.length - 1 ? e.pop() : at.call(e, r, 1), 0));
      }, St.prototype.get = function (t) {
        var e = this.__data__,
            r = It(e, t);return r < 0 ? void 0 : e[r][1];
      }, St.prototype.has = function (t) {
        return It(this.__data__, t) > -1;
      }, St.prototype.set = function (t, e) {
        var r = this.__data__,
            n = It(r, t);return n < 0 ? r.push([t, e]) : r[n][1] = e, this;
      }, At.prototype.clear = function () {
        this.__data__ = { hash: new Rt(), map: new (ht || St)(), string: new Rt() };
      }, At.prototype.delete = function (t) {
        return Ut(this, t).delete(t);
      }, At.prototype.get = function (t) {
        return Ut(this, t).get(t);
      }, At.prototype.has = function (t) {
        return Ut(this, t).has(t);
      }, At.prototype.set = function (t, e) {
        return Ut(this, t).set(t, e), this;
      }, Mt.prototype.clear = function () {
        this.__data__ = new St();
      }, Mt.prototype.delete = function (t) {
        return this.__data__.delete(t);
      }, Mt.prototype.get = function (t) {
        return this.__data__.get(t);
      }, Mt.prototype.has = function (t) {
        return this.__data__.has(t);
      }, Mt.prototype.set = function (t, e) {
        var r = this.__data__;if (r instanceof St) {
          var i = r.__data__;if (!ht || i.length < n - 1) return i.push([t, e]), this;r = this.__data__ = new At(i);
        }return r.set(t, e), this;
      };var Lt = ut ? V(ut, Object) : function () {
        return [];
      },
          Dt = function (t) {
        return Z.call(t);
      };function $t(t, e) {
        return !!(e = null == e ? o : e) && ("number" == typeof t || N.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }function Ft(t) {
        var e = t && t.constructor;return t === ("function" == typeof e && e.prototype || Y);
      }function Bt(t) {
        if (null != t) {
          try {
            return X.call(t);
          } catch (t) {}try {
            return t + "";
          } catch (t) {}
        }return "";
      }function Gt(t, e) {
        return t === e || t != t && e != e;
      }(ft && Dt(new ft(new ArrayBuffer(1))) != m || ht && Dt(new ht()) != f || dt && "[object Promise]" != Dt(dt.resolve()) || pt && Dt(new pt()) != _ || _t && "[object WeakMap]" != Dt(new _t())) && (Dt = function (t) {
        var e = Z.call(t),
            r = e == d ? t.constructor : void 0,
            n = r ? Bt(r) : void 0;if (n) switch (n) {case vt:
            return m;case gt:
            return f;case mt:
            return "[object Promise]";case bt:
            return _;case Ot:
            return "[object WeakMap]";}return e;
      });var zt = Array.isArray;function Vt(t) {
        return null != t && function (t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o;
        }(t.length) && !Kt(t);
      }var Wt = lt || function () {
        return !1;
      };function Kt(t) {
        var e = Jt(t) ? Z.call(t) : "";return e == l || e == c;
      }function Jt(t) {
        var e = typeof t;return !!t && ("object" == e || "function" == e);
      }function Yt(t) {
        return Vt(t) ? wt(t) : function (t) {
          if (!Ft(t)) return ct(t);var e = [];for (var r in Object(t)) Q.call(t, r) && "constructor" != r && e.push(r);return e;
        }(t);
      }r.exports = function (t) {
        return Nt(t, !1, !0);
      };
    }).call(this, r(0), r(5)(t));
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = (t, e) => !!Array.isArray(t) && t.some(e);
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = (t, e, r) => {
      r = Math.min(Math.max(r, 0), t.length);let n = Array(t.length - r);const i = e.length;let o;for (o = 0; o < n.length; o++) n[o] = t[o + r];for (o = 0; o < i; o++) t[o + r] = e[o];for (o = 0; o < n.length; o++) t[o + i + r] = n[o];
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = { LoggerLevel: "error", MessageBundle: "Messages", AsynchronousQueueTimeout: 2e3, ApplicationInitProcessTimeout: 1e3 };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = (t, e, r) => void 0 === e ? t : r ? `${t}${e}` : `${e}${t}`;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = o(r(12)),
        i = o(r(6));function o(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class extends n.default {
      constructor(t) {
        super(t);
      }_logMe(t, e) {
        return e === i.default.INFO ? console.info(t) : e === i.default.ERROR ? console.error(t) : e === i.default.DEBUG ? console.log(t) : e === i.default.WARN ? console.warn(t) : console.log(t), t;
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = o(r(12)),
        i = o(r(6));function o(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class extends n.default {
      constructor(t) {
        super(t);
      }_logMe(t, e) {
        e === i.default.INFO ? console.info("[36m" + t + "[0m") : e === i.default.ERROR ? console.error("[31m" + t + "[0m") : e === i.default.DEBUG ? console.log("[34m" + t + "[0m") : e === i.default.WARN ? console.warn("[33m" + t + "[0m") : console.log("[37m" + t + "[0m");
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });const n = {};n.CONSOLE = Symbol("console"), n.COLOR_CONSOLE = Symbol("colorConsole"), e.default = n;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = o(r(13)),
        i = o(r(1));function o(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class extends n.default {
      constructor() {
        super(i.default.OAUTH2), this.accessToken = "", this.authorizationToken = "";
      }authorize(t) {
        this.authorizationToken = "";
      }access(t) {
        this.accessToken = "";
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = o(r(13)),
        i = o(r(1));function o(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class extends n.default {
      constructor() {
        super(i.default.ACL);
      }authenticate(t, e) {
        return null;
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = class {
      constructor(t) {
        t && t.id ? this._id = t.id : this._id = 0, t && t.email ? this._email = t.email : this._email = "", t && t.login ? this._login = t.login : this._login = "", t && t.fullName ? this._fullName = t.fullName : this._fullName = "";
      }get fullName() {
        return this._fullName;
      }set fullName(t) {
        this._fullName = t;
      }get id() {
        return this._id;
      }set id(t) {
        this._id = t;
      }get login() {
        return this._login;
      }set login(t) {
        this._login = t;
      }get email() {
        return this._email;
      }set email(t) {
        this._email = t;
      }
    };
  }, function (t, e, r) {
    "use strict";
    var n = function (t) {
      if (t && t.__esModule) return t;var e = {};if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);return e.default = t, e;
    }
    /**
     * Augmented.js Next - The Core Component
     *
     * @author Bob Warren
     *
     * @module Augmented
     * @license Apache-2.0
     */(r(33)),
        i = r(14),
        o = H(r(34)),
        s = H(r(35)),
        a = H(r(2)),
        u = H(r(17)),
        l = H(r(48)),
        c = H(r(50)),
        f = H(r(51)),
        h = H(r(24)),
        d = H(r(52)),
        p = H(r(12)),
        _ = H(r(26)),
        y = H(r(27)),
        v = H(r(53)),
        g = H(r(28)),
        m = H(r(6)),
        b = H(r(54)),
        O = r(55),
        E = H(r(19)),
        j = H(r(8)),
        R = H(r(13)),
        S = H(r(29)),
        A = H(r(30)),
        M = H(r(1)),
        w = H(r(56)),
        P = H(r(31)),
        I = H(r(57)),
        N = H(r(58)),
        T = H(r(10)),
        k = H(r(11)),
        x = H(r(4)),
        U = H(r(25)),
        C = H(r(3)),
        L = H(r(59)),
        D = H(r(7)),
        $ = H(r(18)),
        F = H(r(60)),
        B = H(r(61)),
        G = H(r(62)),
        z = H(r(63)),
        V = H(r(64)),
        W = H(r(22)),
        K = H(r(23)),
        J = H(r(16)),
        Y = H(r(15)),
        q = r(65);function H(t) {
      return t && t.__esModule ? t : { default: t };
    }const X = {};X.Utility = n, X.Utility.Map = f.default, X.Utility.Stack = c.default, X.Utility.SchemaGenerator = E.default, X.Utility.extend = x.default, X.Utility.AsynchronousQueue = d.default, X.Utility.pad = U.default, X.Utility.BundleObject = O.BundleObject, X.Utility.ResourceBundle = O.ResourceBundle, X.Utility.MessageReader = O.MessageReader, X.Utility.MessageKeyFormatter = O.MessageKeyFormatter, X.Utility.uniqueId = C.default, X.Utility.sortObjects = i.sortObjects, X.Utility.mergeSort = i.mergeSort, X.Utility.quickSort = i.quickSort, X.Utility.insertionSort = i.insertionSort, X.Utility.bubbleSort = i.bubbleSort, X.Utility.formatDate = o.default, X.Utility.formatBinary = s.default, X.Logger = {}, X.Logger.AbstractLogger = p.default, X.Logger.ConsoleLogger = _.default, X.Logger.ColorConsoleLogger = y.default, X.Logger.LoggerFactory = v.default, X.Logger.Type = g.default, X.Logger.Level = m.default, X.Object = a.default, X.AbstractModel = u.default, X.AbstractCollection = l.default, X.ValidationFramework = j.default, X.Security = {}, X.Security.ClientType = M.default, X.Security.AuthenticationFactory = w.default, X.Security.Context = N.default, X.Security.Entry = I.default, X.Security.Principal = P.default, X.Security.Client = {}, X.Security.Client.AbstractSecurityClient = R.default, X.Security.Client.ACLClient = A.default, X.Security.Client.OAUTH2Client = S.default, X.Configuration = h.default, X.Application = b.default, X.isString = T.default, X.isFunction = k.default, X.has = L.default, X.isObject = D.default, X.allKeys = $.default, X.create = F.default, X.result = B.default, X.arrayHas = G.default, X.exec = z.default, X.isDefined = V.default, X.some = W.default, X.fibonacci = q.fibonacci, X.fibonacciSequence = q.fibonacciSequence, X.splice = K.default, X.before = J.default, X.once = Y.default, X.VERSION = "2.2.0", X.codename = "JC Denton", X.releasename = "UNATCO", t.exports = X;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = arguments;e.shuffle = t => {
      const e = t.slice(0);let r,
          n,
          i = 0;for (i = t.length - 1; i > 0; i--) n = Math.floor(Math.random() * (i + 1)), r = e[i], e[i] = e[n], e[n] = r;return e;
    }, e.prettyPrint = (t, e, r) => {
      let n = "\t";return e && (n = " ".repeat(r)), JSON.stringify(t, null, n);
    }, e.binarySearch = (t, e, r) => {
      let n,
          i,
          o = 0,
          s = t.length - 1;for (; o <= s;) if ((i = r(t[n = Math.floor((o + s) / 2)], e)) < 0) o = n + 1;else {
        if (!(i > 0)) return n;s = n - 1;
      }return null;
    };const i = e.TransformerType = {};i.STRING = Symbol("String"), i.INTEGER = Symbol("Integer"), i.NUMBER = Symbol("Number"), i.BOOLEAN = Symbol("Boolean"), i.ARRAY = Symbol("Array"), i.OBJECT = Symbol("Object"), i.NULL = Symbol("Null");e.Transformer = class {
      constructor() {
        this.type = i;
      }static transform(t, e) {
        let r = null;switch (e) {case i.STRING:
            r = "object" == typeof t ? JSON.stringify(t) : String(t);break;case i.INTEGER:
            r = parseInt(t);break;case i.NUMBER:
            r = Number(t);break;case i.BOOLEAN:
            r = Boolean(t);break;case i.ARRAY:
            Array.isArray(t) ? r = t : (r = [])[0] = t;break;case i.OBJECT:
            "object" != typeof t ? (r = {})[t] = t : r = t;}return r;
      }static isType(t) {
        return null === t ? i.NULL : "string" == typeof t ? i.STRING : "number" == typeof t ? i.NUMBER : "boolean" == typeof t ? i.BOOLEAN : Array.isArray(t) ? i.ARRAY : "object" == typeof t ? i.OBJECT : void 0;
      }
    };e.wrap = (t, e) => () => e.apply(void 0, [t].concat(Array.prototype.slice.call(n))), e.filterObject = (t, e) => {
      const r = {};if (t && e) {
        const n = e.length;let i = 0;for (i = 0; i < n; i++) r[e[i]] = t[e[i]];
      }return r;
    }, e.findByMatchingProperties = (t, e) => t.filter(t => Object.keys(e).every(r => t[r] === e[r]));
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = t => {
      const e = t.getFullYear(),
            r = t.getMonth() + 1,
            n = t.getDate(),
            i = t.getHours(),
            o = t.getMinutes();t.getSeconds();return `${r}/${n}/${e} ${i % 12 || 12}:${o < 10 ? "0" + o : o}${i < 12 ? "am" : "pm"}`;
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = (t, e) => (t => {
      let e = 0,
          r = t,
          n = "";for (e = 0; e < 32; e++, n += String(r >>> 31), r <<= 1);return n;
    })(t).split("").reverse().join("").substring(0, e);
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });const n = e.EVENT_SPLITTER = /\s+/,
          i = e.eventsApi = (t, e, r, o, s) => {
      let a,
          u = 0;if (r && "object" == typeof r) {
        void 0 !== o && "context" in s && void 0 === s.context && (s.context = o);for (a = Object.keys(r); u < a.length; u++) e = i(t, e, a[u], r[a[u]], s);
      } else if (r && n.test(r)) for (a = r.split(n); u < a.length; u++) e = t(e, a[u], o, s);else e = t(e, r, o, s);return e;
    },
          o = (e.internalOn = (t, e, r, n, s) => {
      if (t._events = i(o, t._events || {}, e, r, { context: n, ctx: t, listening: s }), s) {
        (t._listeners || (t._listeners = {}))[s.id] = s;
      }return t;
    }, e.onApi = (t, e, r, n) => {
      if (r) {
        const i = t[e] || (t[e] = []),
              o = n.context,
              s = n.ctx,
              a = n.listening;a && a.count++, i.push({ callback: r, context: o, ctx: o || s, listening: a });
      }return t;
    }),
          s = (e.offApi = (t, e, r, n) => {
      if (!t) return;let i,
          o = 0;const s = n.context,
            a = n.listeners;if (!e && !r && !s) {
        const t = Object.keys(a);for (; o < t.length; o++) delete a[(i = a[t[o]]).id], delete i.listeningTo[i.objId];return;
      }let u = e ? [e] : Object.keys(t);for (; o < u.length; o++) {
        const n = t[e = u[o]];if (!n) break;const l = [];let c = 0;for (c = 0; c < n.length; c++) {
          const t = n[c];r && r !== t.callback && r !== t.callback._callback || s && s !== t.context ? l.push(t) : (i = t.listening) && 0 == --i.count && (delete a[i.id], delete i.listeningTo[i.objId]);
        }l.length ? t[e] = l : delete t[e];
      }return t;
    }, e.triggerApi = (t, e, r, n) => {
      if (t) {
        const r = t[e];let i = t.all;r && i && (i = i.slice()), r && s(r, n), i && s(i, [e].concat(n));
      }return t;
    }, e.triggerEvents = (t, e) => {
      let r,
          n = -1;const i = t.length,
            o = e[0],
            s = e[1],
            a = e[2];switch (e.length) {case 0:
          for (; ++n < i;) (r = t[n]).callback.call(r.ctx);return;case 1:
          for (; ++n < i;) (r = t[n]).callback.call(r.ctx, o);return;case 2:
          for (; ++n < i;) (r = t[n]).callback.call(r.ctx, o, s);return;case 3:
          for (; ++n < i;) (r = t[n]).callback.call(r.ctx, o, s, a);return;default:
          for (; ++n < i;) (r = t[n]).callback.apply(r.ctx, e);return;}
    });
  }, function (t, e, r) {
    "use strict";
    (function (e) {
      var r = "Expected a function",
          n = "__lodash_placeholder__",
          i = 1,
          o = 2,
          s = 4,
          a = 8,
          u = 16,
          l = 32,
          c = 64,
          f = 128,
          h = 512,
          d = 1 / 0,
          p = 9007199254740991,
          _ = 1.7976931348623157e308,
          y = NaN,
          v = [["ary", f], ["bind", i], ["bindKey", o], ["curry", a], ["curryRight", u], ["flip", h], ["partial", l], ["partialRight", c], ["rearg", 256]],
          g = "[object Function]",
          m = "[object GeneratorFunction]",
          b = "[object Symbol]",
          O = /^\s+|\s+$/g,
          E = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          j = /\{\n\/\* \[wrapped with (.+)\] \*/,
          R = /,? & /,
          S = /^[-+]0x[0-9a-f]+$/i,
          A = /^0b[01]+$/i,
          M = /^\[object .+?Constructor\]$/,
          w = /^0o[0-7]+$/i,
          P = /^(?:0|[1-9]\d*)$/,
          I = parseInt,
          N = "object" == typeof e && e && e.Object === Object && e,
          T = "object" == typeof self && self && self.Object === Object && self,
          k = N || T || Function("return this")();function x(t, e, r) {
        switch (r.length) {case 0:
            return t.call(e);case 1:
            return t.call(e, r[0]);case 2:
            return t.call(e, r[0], r[1]);case 3:
            return t.call(e, r[0], r[1], r[2]);}return t.apply(e, r);
      }function U(t, e) {
        return !!(t ? t.length : 0) && function (t, e, r) {
          if (e != e) return function (t, e, r, n) {
            var i = t.length,
                o = r + (n ? 1 : -1);for (; n ? o-- : ++o < i;) if (e(t[o], o, t)) return o;return -1;
          }(t, C, r);var n = r - 1,
              i = t.length;for (; ++n < i;) if (t[n] === e) return n;return -1;
        }(t, e, 0) > -1;
      }function C(t) {
        return t != t;
      }function L(t, e) {
        for (var r = -1, i = t.length, o = 0, s = []; ++r < i;) {
          var a = t[r];a !== e && a !== n || (t[r] = n, s[o++] = r);
        }return s;
      }var D = Function.prototype,
          $ = Object.prototype,
          F = k["__core-js_shared__"],
          B = function () {
        var t = /[^.]+$/.exec(F && F.keys && F.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
      }(),
          G = D.toString,
          z = $.hasOwnProperty,
          V = $.toString,
          W = RegExp("^" + G.call(z).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          K = Object.create,
          J = Math.max,
          Y = Math.min,
          q = function () {
        var t = rt(Object, "defineProperty"),
            e = rt.name;return e && e.length > 2 ? t : void 0;
      }();function H(t) {
        return !(!st(t) || function (t) {
          return !!B && B in t;
        }(t)) && (function (t) {
          var e = st(t) ? V.call(t) : "";return e == g || e == m;
        }(t) || function (t) {
          var e = !1;if (null != t && "function" != typeof t.toString) try {
            e = !!(t + "");
          } catch (t) {}return e;
        }(t) ? W : M).test(function (t) {
          if (null != t) {
            try {
              return G.call(t);
            } catch (t) {}try {
              return t + "";
            } catch (t) {}
          }return "";
        }(t));
      }function X(t) {
        return function () {
          var e = arguments;switch (e.length) {case 0:
              return new t();case 1:
              return new t(e[0]);case 2:
              return new t(e[0], e[1]);case 3:
              return new t(e[0], e[1], e[2]);case 4:
              return new t(e[0], e[1], e[2], e[3]);case 5:
              return new t(e[0], e[1], e[2], e[3], e[4]);case 6:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5]);case 7:
              return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);}var r = function (t) {
            return st(t) ? K(t) : {};
          }(t.prototype),
              n = t.apply(r, e);return st(n) ? n : r;
        };
      }function Q(t, e, r, n, s, l, c, d, p, _) {
        var y = e & f,
            v = e & i,
            g = e & o,
            m = e & (a | u),
            b = e & h,
            O = g ? void 0 : X(t);return function i() {
          for (var o = arguments.length, a = Array(o), u = o; u--;) a[u] = arguments[u];if (m) var f = et(i),
              h = function (t, e) {
            for (var r = t.length, n = 0; r--;) t[r] === e && n++;return n;
          }(a, f);if (n && (a = function (t, e, r, n) {
            for (var i = -1, o = t.length, s = r.length, a = -1, u = e.length, l = J(o - s, 0), c = Array(u + l), f = !n; ++a < u;) c[a] = e[a];for (; ++i < s;) (f || i < o) && (c[r[i]] = t[i]);for (; l--;) c[a++] = t[i++];return c;
          }(a, n, s, m)), l && (a = function (t, e, r, n) {
            for (var i = -1, o = t.length, s = -1, a = r.length, u = -1, l = e.length, c = J(o - a, 0), f = Array(c + l), h = !n; ++i < c;) f[i] = t[i];for (var d = i; ++u < l;) f[d + u] = e[u];for (; ++s < a;) (h || i < o) && (f[d + r[s]] = t[i++]);return f;
          }(a, l, c, m)), o -= h, m && o < _) {
            var E = L(a, f);return Z(t, e, Q, i.placeholder, r, a, E, d, p, _ - o);
          }var j = v ? r : this,
              R = g ? j[t] : t;return o = a.length, d ? a = function (t, e) {
            for (var r = t.length, n = Y(e.length, r), i = function (t, e) {
              var r = -1,
                  n = t.length;for (e || (e = Array(n)); ++r < n;) e[r] = t[r];return e;
            }(t); n--;) {
              var o = e[n];t[n] = nt(o, r) ? i[o] : void 0;
            }return t;
          }(a, d) : b && o > 1 && a.reverse(), y && p < o && (a.length = p), this && this !== k && this instanceof i && (R = O || X(R)), R.apply(j, a);
        };
      }function Z(t, e, r, n, u, f, h, d, p, _) {
        var y = e & a;e |= y ? l : c, (e &= ~(y ? c : l)) & s || (e &= ~(i | o));var v = r(t, e, u, y ? f : void 0, y ? h : void 0, y ? void 0 : f, y ? void 0 : h, d, p, _);return v.placeholder = n, it(v, t, e);
      }function tt(t, e, n, s, f, h, d, p) {
        var _ = e & o;if (!_ && "function" != typeof t) throw new TypeError(r);var y = s ? s.length : 0;if (y || (e &= ~(l | c), s = f = void 0), d = void 0 === d ? d : J(ut(d), 0), p = void 0 === p ? p : ut(p), y -= f ? f.length : 0, e & c) {
          var v = s,
              g = f;s = f = void 0;
        }var m = [t, e, n, s, f, v, g, h, d, p];if (t = m[0], e = m[1], n = m[2], s = m[3], f = m[4], !(p = m[9] = null == m[9] ? _ ? 0 : t.length : J(m[9] - y, 0)) && e & (a | u) && (e &= ~(a | u)), e && e != i) b = e == a || e == u ? function (t, e, r) {
          var n = X(t);return function i() {
            for (var o = arguments.length, s = Array(o), a = o, u = et(i); a--;) s[a] = arguments[a];var l = o < 3 && s[0] !== u && s[o - 1] !== u ? [] : L(s, u);return (o -= l.length) < r ? Z(t, e, Q, i.placeholder, void 0, s, l, void 0, void 0, r - o) : x(this && this !== k && this instanceof i ? n : t, this, s);
          };
        }(t, e, p) : e != l && e != (i | l) || f.length ? Q.apply(void 0, m) : function (t, e, r, n) {
          var o = e & i,
              s = X(t);return function e() {
            for (var i = -1, a = arguments.length, u = -1, l = n.length, c = Array(l + a), f = this && this !== k && this instanceof e ? s : t; ++u < l;) c[u] = n[u];for (; a--;) c[u++] = arguments[++i];return x(f, o ? r : this, c);
          };
        }(t, e, n, s);else var b = function (t, e, r) {
          var n = e & i,
              o = X(t);return function e() {
            return (this && this !== k && this instanceof e ? o : t).apply(n ? r : this, arguments);
          };
        }(t, e, n);return it(b, t, e);
      }function et(t) {
        return t.placeholder;
      }function rt(t, e) {
        var r = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return H(r) ? r : void 0;
      }function nt(t, e) {
        return !!(e = null == e ? p : e) && ("number" == typeof t || P.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }var it = q ? function (t, e, r) {
        var n = e + "";return q(t, "toString", { configurable: !0, enumerable: !1, value: function (t) {
            return function () {
              return t;
            };
          }(function (t, e) {
            var r = e.length,
                n = r - 1;return e[n] = (r > 1 ? "& " : "") + e[n], e = e.join(r > 2 ? ", " : " "), t.replace(E, "{\n/* [wrapped with " + e + "] */\n");
          }(n, function (t, e) {
            return function (t, e) {
              for (var r = -1, n = t ? t.length : 0; ++r < n && !1 !== e(t[r], r, t););
            }(v, function (r) {
              var n = "_." + r[0];e & r[1] && !U(t, n) && t.push(n);
            }), t.sort();
          }(function (t) {
            var e = t.match(j);return e ? e[1].split(R) : [];
          }(n), r))) });
      } : function (t) {
        return t;
      };var ot = function (t, e) {
        return e = J(void 0 === e ? t.length - 1 : e, 0), function () {
          for (var r = arguments, n = -1, i = J(r.length - e, 0), o = Array(i); ++n < i;) o[n] = r[e + n];n = -1;for (var s = Array(e + 1); ++n < e;) s[n] = r[n];return s[e] = o, x(t, this, s);
        };
      }(function (t, e, r) {
        var n = i;if (r.length) {
          var o = L(r, et(ot));n |= l;
        }return tt(t, n, e, r, o);
      });function st(t) {
        var e = typeof t;return !!t && ("object" == e || "function" == e);
      }function at(t) {
        return t ? (t = function (t) {
          if ("number" == typeof t) return t;if (function (t) {
            return "symbol" == typeof t || function (t) {
              return !!t && "object" == typeof t;
            }(t) && V.call(t) == b;
          }(t)) return y;if (st(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;t = st(e) ? e + "" : e;
          }if ("string" != typeof t) return 0 === t ? t : +t;t = t.replace(O, "");var r = A.test(t);return r || w.test(t) ? I(t.slice(2), r ? 2 : 8) : S.test(t) ? y : +t;
        }(t)) === d || t === -d ? (t < 0 ? -1 : 1) * _ : t == t ? t : 0 : 0 === t ? t : 0;
      }function ut(t) {
        var e = at(t),
            r = e % 1;return e == e ? r ? e - r : e : 0;
      }ot.placeholder = {}, t.exports = ot;
    }).call(this, r(0));
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = arguments,
        i = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r(39)),
        o = r(9),
        s = r(20);let a = {};const u = t => {
      const e = new i.default();let r = t || "en";return { addFormat: (t, r) => {
          e.addFormat(t, r);
        }, language: t => t ? (a[t] || (t = t.split("-")[0]), !!a[t] && (r = t, t)) : r, addLanguage: (t, e) => {
          let r;for (r in o.ERROR_CODES) e[r] && !e[o.ERROR_CODES[r]] && (e[o.ERROR_CODES[r]] = e[r]);let n = t.split("-")[0];if (a[n]) for (r in a[t] = Object.create(a[n]), e) void 0 === a[n][r] && (a[n][r] = e[r]), a[t][r] = e[r];else a[t] = e, a[n] = e;
        }, freshApi: t => {
          const e = u();return t && e.language(t), e;
        }, validate: (t, n, o, s) => {
          const u = new i.default(e, !1, a[r], o, s);"string" == typeof n && (n = { $ref: n }), u.addSchema("", n);let l = u.validateAll(t, n, null, null, "");return !l && s && (l = u.banUnknownProperties()), (void 0).error = l, (void 0).missing = u.missing, (void 0).valid = null === l, (void 0).valid;
        }, validateResult: () => {
          let t = {};return (void 0).validate.apply(t, n), t;
        }, validateMultiple: (t, n, o, s) => {
          const u = new i.default(e, !0, a[r], o, s);"string" == typeof n && (n = { $ref: n }), u.addSchema("", n), u.validateAll(t, n, null, null, ""), s && u.banUnknownProperties();let l = {};return l.errors = u.errors, l.missing = u.missing, l.valid = 0 === l.errors.length, l;
        }, addSchema: (t, r) => e.addSchema(t, r), getSchema: (t, r) => e.getSchema(t, r), getSchemaMap: () => e.getSchemaMap.apply(e, n), getSchemaUris: () => e.getSchemaUris.apply(e, n), getMissingUris: () => e.getMissingUris.apply(e, n), dropSchemas: () => {
          e.dropSchemas.apply(e, n);
        }, defineKeyword: () => {
          e.defineKeyword.apply(e, n);
        }, defineError: (t, e, r) => {
          if ("string" != typeof t || !/^[A-Z]+(_[A-Z]+)*$/.test(t)) throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if ("number" != typeof e || e % 1 != 0 || e < 1e4) throw new Error("Code number must be an integer > 10000");if (void 0 !== o.ERROR_CODES[t]) throw new Error("Error already defined: " + t + " as " + o.ERROR_CODES[t]);if (void 0 !== o.ErrorCodeLookup[e]) throw new Error("Error code already used: " + o.ErrorCodeLookup[e] + " as " + e);o.ERROR_CODES[t] = e, o.ErrorCodeLookup[e] = t, o.ERROR_MESSAGES_DEFAULT[t] = o.ERROR_MESSAGES_DEFAULT[e] = r;for (let r in a) {
            let n = a[r];n[t] && (n[e] = n[e] || n[t]);
          }
        }, reset: () => {
          e.reset(), (void 0).error = null, (void 0).missing = [], (void 0).valid = !0;
        }, missing: [], error: null, valid: !0, normSchema: s.normSchema, resolveUrl: s.resolveUrl, getDocumentUri: s.getDocumentUri, errorCodes: o.ERROR_CODES };
    };e.default = u;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = r(9),
        i = r(20);let o = Math.pow(2, -51),
        s = 1 - o;class a {
      constructor(t, e, r, n, i) {
        if (this.missing = [], this.missingMap = {}, this.formatValidators = t ? Object.create(t.formatValidators) : {}, this.schemas = t ? Object.create(t.schemas) : {}, this.collectMultiple = e, this.errors = [], this.handleError = e ? this.collectError : this.returnError, n && (this.checkRecursive = !0, this.scanned = [], this.scannedFrozen = [], this.scannedFrozenSchemas = [], this.scannedFrozenValidationErrors = [], this.validatedSchemasKey = "tv4_validation_id", this.validationErrorsKey = "tv4_validation_errors_id"), i && (this.trackUnknownProperties = !0, this.knownPropertyPaths = {}, this.unknownPropertyPaths = {}), this.errorMessages = r, this.definedKeywords = {}, t) for (let e in t.definedKeywords) this.definedKeywords[e] = t.definedKeywords[e].slice(0);
      }notReallyPercentEncode(t) {
        return encodeURI(t).replace(/%25[0-9][0-9]/g, t => "%" + t.substring(3));
      }uriTemplateSubstitution(t) {
        let e = "";URI_TEMPLATE_GLOBAL_MODIFIERS[t.charAt(0)] && (e = t.charAt(0), t = t.substring(1));let r = "",
            n = "",
            i = !0,
            o = !1,
            s = !1;"+" === e ? i = !1 : "." === e ? (n = ".", r = ".") : "/" === e ? (n = "/", r = "/") : "#" === e ? (n = "#", i = !1) : ";" === e ? (n = ";", r = ";", o = !0, s = !0) : "?" === e ? (n = "?", r = "&", o = !0) : "&" === e && (n = "&", r = "&", o = !0);let a = [],
            u = t.split(","),
            l = [],
            c = {},
            f = 0,
            h = u.length;for (f = 0; f < h; f++) {
          let t = u[f],
              e = null;if (-1 !== t.indexOf(":")) {
            let r = t.split(":");t = r[0], e = parseInt(r[1], 10);
          }let r = {};for (; URI_TEMPLATE_SUFFICES[t.charAt(t.length - 1)];) r[t.charAt(t.length - 1)] = !0, t = t.substring(0, t.length - 1);let n = { truncate: e, name: t, suffices: r };l.push(n), c[t] = n, a.push(t);
        }const d = t => {
          let e = "",
              a = 0,
              u = 0,
              c = l.length;for (u = 0; u < c; u++) {
            let f = l[u];if (!t && !isFunction(t)) throw new Error("Problem qith value function.");let h = t(f.name);if (null === h || void 0 === h || Array.isArray(h) && 0 === h.length || "object" == typeof h && 0 === Object.keys(h).length) a++;else if (e += u === a ? n : r || ",", Array.isArray(h)) {
              o && (e += f.name + "=");let t = 0;for (c = h.length, t = 0; t < c; t++) t > 0 && (e += f.suffices["*"] && r || ",", f.suffices["*"] && o && (e += f.name + "=")), e += i ? encodeURIComponent(h[t]).replace(/!/g, "%21") : this.notReallyPercentEncode(h[t]);
            } else if ("object" == typeof h) {
              o && !f.suffices["*"] && (e += f.name + "=");let t = !0;for (let n in h) t || (e += f.suffices["*"] && r || ","), t = !1, e += i ? encodeURIComponent(n).replace(/!/g, "%21") : this.notReallyPercentEncode(n), e += f.suffices["*"] ? "=" : ",", e += i ? encodeURIComponent(h[n]).replace(/!/g, "%21") : this.notReallyPercentEncode(h[n]);
            } else o && (e += f.name, s && "" === h || (e += "=")), null !== f.truncate && (h = h.substring(0, f.truncate)), e += i ? encodeURIComponent(h).replace(/!/g, "%21") : this.notReallyPercentEncode(h);
          }return e;
        };return d.varNames = a, { prefix: n, substitution: d };
      }recursiveCompare(t, e) {
        if (t === e) return !0;if ("object" == typeof t && "object" == typeof e) {
          if (Array.isArray(t) !== Array.isArray(e)) return !1;if (Array.isArray(t)) {
            if (t.length !== e.length) return !1;let r = 0,
                n = t.length;for (r = 0; r < n; r++) if (!this.recursiveCompare(t[r], e[r])) return !1;
          } else {
            let r;for (r in t) if (void 0 === e[r] && void 0 !== t[r]) return !1;for (r in e) if (void 0 === t[r] && void 0 !== e[r]) return !1;for (r in t) if (!this.recursiveCompare(t[r], e[r])) return !1;
          }return !0;
        }return !1;
      }defineKeyword(t, e) {
        this.definedKeywords[t] = this.definedKeywords[t] || [], this.definedKeywords[t].push(e);
      }createError(t, e, r, i, o) {
        let s = this.errorMessages[t] || n.ERROR_MESSAGES_DEFAULT[t];if ("string" != typeof s) return new n.ValidationError(t, "Unknown error code " + t + ": " + JSON.stringify(e), e, r, i, o);let a = s.replace(/\{([^{}]*)\}/g, function (t, r) {
          let n = e[r];return "string" == typeof n || "number" == typeof n ? n : t;
        });return new n.ValidationError(t, a, e, r, i, o);
      }returnError(t) {
        return t;
      }collectError(t) {
        return t && this.errors.push(t), null;
      }prefixErrors(t, e, r) {
        let n = 0,
            i = this.errors.length;for (n = t; n < i; n++) this.errors[n] = this.errors[n].prefixWith(e, r);return this;
      }banUnknownProperties() {
        for (let t in this.unknownPropertyPaths) {
          let e = this.createError(n.ERROR_CODES.UNKNOWN_PROPERTY, { path: t }, t, ""),
              r = this.handleError(e);if (r) return r;
        }return null;
      }addFormat(t, e) {
        if ("object" == typeof t) {
          for (let e in t) this.addFormat(e, t[e]);return this;
        }this.formatValidators[t] = e;
      }resolveRefs(t, e) {
        if (void 0 !== t.$ref) {
          if ((e = e || {})[t.$ref]) return this.createError(n.ERROR_CODES.CIRCULAR_REFERENCE, { urls: Object.keys(e).join(", ") }, "", "");e[t.$ref] = !0, t = this.getSchema(t.$ref, e);
        }return t;
      }getSchema(t, e) {
        let r;if (void 0 !== this.schemas[t]) return r = this.schemas[t], this.resolveRefs(r, e);let n = t,
            i = "";if (-1 !== t.indexOf("#") && (i = t.substring(t.indexOf("#") + 1), n = t.substring(0, t.indexOf("#"))), "object" == typeof this.schemas[n]) {
          r = this.schemas[n];let t = decodeURIComponent(i);if ("" === t) return this.resolveRefs(r, e);if ("/" !== t.charAt(0)) return;let o = t.split("/").slice(1),
              s = 0,
              a = o.length;for (s = 0; s < a; s++) {
            let t = o[s].replace(/~1/g, "/").replace(/~0/g, "~");if (void 0 === r[t]) {
              r = void 0;break;
            }r = r[t];
          }if (void 0 !== r) return this.resolveRefs(r, e);
        }void 0 === this.missing[n] && (this.missing.push(n), this.missing[n] = n, this.missingMap[n] = n);
      }searchSchemas(t, e) {
        if (Array.isArray(t)) {
          let r = 0,
              n = t.length;for (r = 0; r < n; r++) this.searchSchemas(t[r], e);
        } else if (t && "object" == typeof t) {
          "string" == typeof t.id && isTrustedUrl(e, t.id) && void 0 === this.schemas[t.id] && (this.schemas[t.id] = t);for (let r in t) if ("enum" !== r) if ("object" == typeof t[r]) this.searchSchemas(t[r], e);else if ("$ref" === r) {
            let e = (0, i.getDocumentUri)(t[r]);e && void 0 === this.schemas[e] && void 0 === this.missingMap[e] && (this.missingMap[e] = e);
          }
        }
      }addSchema(t, e) {
        if ("string" != typeof t || void 0 === e) {
          if ("object" != typeof t || "string" != typeof t.id) return;t = (e = t).id;
        }t === (0, i.getDocumentUri)(t) + "#" && (t = (0, i.getDocumentUri)(t)), this.schemas[t] = e, delete this.missingMap[t], (0, i.normSchema)(e, t), this.searchSchemas(e, t);
      }getSchemaMap() {
        let t = {};for (let e in this.schemas) t[e] = this.schemas[e];return t;
      }getSchemaUris(t) {
        let e = [];for (let r in this.schemas) t && !t.test(r) || e.push(r);return e;
      }getMissingUris(t) {
        let e = [];for (let r in this.missingMap) t && !t.test(r) || e.push(r);return e;
      }dropSchemas() {
        this.schemas = {}, this.reset();
      }reset() {
        this.missing = [], this.missingMap = {}, this.errors = [];
      }validateAll(t, e, r, i, o) {
        let s;if (!(e = this.resolveRefs(e))) return null;if (e instanceof n.ValidationError) return this.errors.push(e), e;let a,
            u = this.errors.length,
            l = null,
            c = null;if (this.checkRecursive && t && "object" == typeof t) {
          if (s = !this.scanned.length, t[this.validatedSchemasKey]) {
            let r = t[this.validatedSchemasKey].indexOf(e);if (-1 !== r) return this.errors = this.errors.concat(t[this.validationErrorsKey][r]), null;
          }if (Object.isFrozen(t) && -1 !== (a = this.scannedFrozen.indexOf(t))) {
            let t = this.scannedFrozenSchemas[a].indexOf(e);if (-1 !== t) return this.errors = this.errors.concat(this.scannedFrozenValidationErrors[a][t]), null;
          }if (this.scanned.push(t), Object.isFrozen(t)) -1 === a && (a = this.scannedFrozen.length, this.scannedFrozen.push(t), this.scannedFrozenSchemas.push([])), l = this.scannedFrozenSchemas[a].length, this.scannedFrozenSchemas[a][l] = e, this.scannedFrozenValidationErrors[a][l] = [];else {
            if (!t[this.validatedSchemasKey]) try {
              Object.defineProperty(t, this.validatedSchemasKey, { value: [], configurable: !0 }), Object.defineProperty(t, this.validationErrorsKey, { value: [], configurable: !0 });
            } catch (e) {
              t[this.validatedSchemasKey] = [], t[this.validationErrorsKey] = [];
            }c = t[this.validatedSchemasKey].length, t[this.validatedSchemasKey][c] = e, t[this.validationErrorsKey][c] = [];
          }
        }let f = this.errors.length,
            h = this.validateBasic(t, e, o) || this.validateNumeric(t, e, o) || this.validateString(t, e, o) || this.validateArray(t, e, o) || this.validateObject(t, e, o) || this.validateCombinations(t, e, o) || this.validateHypermedia(t, e, o) || this.validateFormat(t, e, o) || this.validateDefinedKeywords(t, e, o) || null;if (s) {
          for (; this.scanned.length;) {
            delete this.scanned.pop()[this.validatedSchemasKey];
          }this.scannedFrozen = [], this.scannedFrozenSchemas = [];
        }if (h || f !== this.errors.length) for (; r && r.length || i && i.length;) {
          let t = r && r.length ? "" + r.pop() : null,
              e = i && i.length ? "" + i.pop() : null;h && (h = h.prefixWith(t, e)), this.prefixErrors(f, t, e);
        }return null !== l ? this.scannedFrozenValidationErrors[a][l] = this.errors.slice(u) : null !== c && (t[this.validationErrorsKey][c] = this.errors.slice(u)), this.handleError(h);
      }validateFormat(t, e) {
        if ("string" != typeof e.format || !this.formatValidators[e.format]) return null;let r = this.formatValidators[e.format].call(null, t, e);return "string" == typeof r || "number" == typeof r ? this.createError(n.ERROR_CODES.FORMAT_CUSTOM, { message: r }).prefixWith(null, "format") : r && "object" == typeof r ? this.createError(n.ERROR_CODES.FORMAT_CUSTOM, { message: r.message || "?" }, r.dataPath || null, r.schemaPath || "/format") : null;
      }validateDefinedKeywords(t, e, r) {
        for (let i in this.definedKeywords) {
          if (void 0 === e[i]) continue;let o = this.definedKeywords[i],
              s = 0,
              a = o.length;for (s = 0; s < a; s++) {
            let a = (0, o[s])(t, e[i], e, r);if ("string" == typeof a || "number" == typeof a) return this.createError(n.ERROR_CODES.KEYWORD_CUSTOM, { key: i, message: a }).prefixWith(null, "format");if (a && "object" == typeof a) {
              let t = a.code;if ("string" == typeof t) {
                if (!n.ERROR_CODES[t]) throw new Error("Undefined error code (use defineError): " + t);t = n.ERROR_CODES[t];
              } else "number" != typeof t && (t = n.ERROR_CODES.KEYWORD_CUSTOM);let e = "object" == typeof a.message ? a.message : { key: i, message: a.message || "?" },
                  r = a.schemaPath || "/" + i.replace(/~/g, "~0").replace(/\//g, "~1");return this.createError(t, e, a.dataPath || null, r);
            }
          }
        }return null;
      }validateBasic(t, e, r) {
        let n = this.validateType(t, e, r);return n ? n.prefixWith(null, "type") : null;
      }validateType(t, e) {
        if (void 0 === e.type) return null;let r = typeof t;null === t ? r = "null" : Array.isArray(t) && (r = "array");let i = e.type;"object" != typeof i && (i = [i]);let o = 0,
            s = i.length;for (o = 0; o < s; o++) {
          let e = i[o];if (e === r || "integer" === e && "number" === r && t % 1 == 0) return null;
        }return this.createError(n.ERROR_CODES.INVALID_TYPE, { type: r, expected: i.join("/") });
      }validateEnum(t, e) {
        if (void 0 === e.enum) return null;let r = 0,
            i = e.enum.length;for (r = 0; r < i; r++) {
          let n = e.enum[r];if (this.recursiveCompare(t, n)) return null;
        }return this.createError(n.ERROR_CODES.ENUM_MISMATCH, { value: "undefined" != typeof JSON ? JSON.stringify(t) : t });
      }validateNumeric(t, e, r) {
        return this.validateMultipleOf(t, e, r) || this.validateMinMax(t, e, r) || this.validateNaN(t, e, r) || null;
      }validateMultipleOf(t, e) {
        let r = e.multipleOf || e.divisibleBy;if (void 0 === r) return null;if ("number" == typeof t) {
          let e = t / r % 1;if (e >= o && e < s) return this.createError(n.ERROR_CODES.NUMBER_MULTIPLE_OF, { value: t, multipleOf: r });
        }return null;
      }validateMinMax(t, e) {
        if ("number" != typeof t) return null;if (void 0 !== e.minimum) {
          if (t < e.minimum) return this.createError(n.ERROR_CODES.NUMBER_MINIMUM, { value: t, minimum: e.minimum }).prefixWith(null, "minimum");if (e.exclusiveMinimum && t === e.minimum) return this.createError(n.ERROR_CODES.NUMBER_MINIMUM_EXCLUSIVE, { value: t, minimum: e.minimum }).prefixWith(null, "exclusiveMinimum");
        }if (void 0 !== e.maximum) {
          if (t > e.maximum) return this.createError(n.ERROR_CODES.NUMBER_MAXIMUM, { value: t, maximum: e.maximum }).prefixWith(null, "maximum");if (e.exclusiveMaximum && t === e.maximum) return this.createError(n.ERROR_CODES.NUMBER_MAXIMUM_EXCLUSIVE, { value: t, maximum: e.maximum }).prefixWith(null, "exclusiveMaximum");
        }return null;
      }validateNaN(t) {
        return "number" != typeof t ? null : !0 === isNaN(t) || t === 1 / 0 || t === -1 / 0 ? this.createError(n.ERROR_CODES.NUMBER_NOT_A_NUMBER, { value: t }).prefixWith(null, "type") : null;
      }validateString(t, e, r) {
        return this.validateStringLength(t, e, r) || this.validateStringPattern(t, e, r) || null;
      }validateStringLength(t, e) {
        return "string" != typeof t ? null : void 0 !== e.minLength && t.length < e.minLength ? this.createError(n.ERROR_CODES.STRING_LENGTH_SHORT, { length: t.length, minimum: e.minLength }).prefixWith(null, "minLength") : void 0 !== e.maxLength && t.length > e.maxLength ? this.createError(n.ERROR_CODES.STRING_LENGTH_LONG, { length: t.length, maximum: e.maxLength }).prefixWith(null, "maxLength") : null;
      }validateStringPattern(t, e) {
        if ("string" != typeof t || void 0 === e.pattern) return null;return new RegExp(e.pattern).test(t) ? null : this.createError(n.ERROR_CODES.STRING_PATTERN, { pattern: e.pattern }).prefixWith(null, "pattern");
      }validateArray(t, e, r) {
        return Array.isArray(t) && (this.validateArrayLength(t, e, r) || this.validateArrayUniqueItems(t, e, r) || this.validateArrayItems(t, e, r)) || null;
      }validateArrayLength(t, e) {
        let r;return void 0 !== e.minItems && t.length < e.minItems && (r = this.createError(n.ERROR_CODES.ARRAY_LENGTH_SHORT, { length: t.length, minimum: e.minItems }).prefixWith(null, "minItems"), this.handleError(r)) ? r : void 0 !== e.maxItems && t.length > e.maxItems && (r = this.createError(n.ERROR_CODES.ARRAY_LENGTH_LONG, { length: t.length, maximum: e.maxItems }).prefixWith(null, "maxItems"), this.handleError(r)) ? r : null;
      }validateArrayUniqueItems(t, e) {
        if (e.uniqueItems) {
          let e = 0,
              r = t.length;for (e = 0; e < r; e++) {
            let i = 0;for (i = e + 1; i < r; i++) if (recursiveCompare(t[e], t[i])) {
              let t = this.createError(n.ERROR_CODES.ARRAY_UNIQUE, { match1: e, match2: i }).prefixWith(null, "uniqueItems");if (this.handleError(t)) return t;
            }
          }
        }return null;
      }validateArrayItems(t, e, r) {
        if (void 0 === e.items) return null;let i, o;if (Array.isArray(e.items)) {
          let s = t.length;for (o = 0; o < s; o++) if (o < e.items.length) {
            if (i = this.validateAll(t[o], e.items[o], [o], ["items", o], r + "/" + o)) return i;
          } else if (void 0 !== e.additionalItems) if ("boolean" == typeof e.additionalItems) {
            if (!e.additionalItems && (i = this.createError(n.ERROR_CODES.ARRAY_ADDITIONAL_ITEMS, {}).prefixWith("" + o, "additionalItems"), this.handleError(i))) return i;
          } else if (i = this.validateAll(t[o], e.additionalItems, [o], ["additionalItems"], r + "/" + o)) return i;
        } else {
          let n = t.length;for (o = 0; o < n; o++) if (i = this.validateAll(t[o], e.items, [o], ["items"], r + "/" + o)) return i;
        }return null;
      }validateObject(t, e, r) {
        return "object" != typeof t || null === t || Array.isArray(t) ? null : this.validateObjectMinMaxProperties(t, e, r) || this.validateObjectRequiredProperties(t, e, r) || this.validateObjectProperties(t, e, r) || this.validateObjectDependencies(t, e, r) || null;
      }validateObjectMinMaxProperties(t, e) {
        let r,
            i = Object.keys(t);return void 0 !== e.minProperties && i.length < e.minProperties && (r = this.createError(n.ERROR_CODES.OBJECT_PROPERTIES_MINIMUM, { propertyCount: i.length, minimum: e.minProperties }).prefixWith(null, "minProperties"), this.handleError(r)) ? r : void 0 !== e.maxProperties && i.length > e.maxProperties && (r = this.createError(n.ERROR_CODES.OBJECT_PROPERTIES_MAXIMUM, { propertyCount: i.length, maximum: e.maxProperties }).prefixWith(null, "maxProperties"), this.handleError(r)) ? r : null;
      }validateObjectRequiredProperties(t, e) {
        if (void 0 !== e.required) {
          let r = 0,
              i = e.required.length;for (r = 0; r < i; r++) {
            let i = e.required[r];if (void 0 === t[i]) {
              let t = this.createError(n.ERROR_CODES.OBJECT_REQUIRED, { key: i }).prefixWith(null, "" + r).prefixWith(null, "required");if (this.handleError(t)) return t;
            }
          }
        }return null;
      }validateObjectProperties(t, e, r) {
        let i;for (let o in t) {
          let s = r + "/" + o.replace(/~/g, "~0").replace(/\//g, "~1"),
              a = !1;if (void 0 !== e.properties && void 0 !== e.properties[o] && (a = !0, i = this.validateAll(t[o], e.properties[o], [o], ["properties", o], s))) return i;if (void 0 !== e.patternProperties) for (let r in e.patternProperties) {
            if (new RegExp(r).test(o) && (a = !0, i = this.validateAll(t[o], e.patternProperties[r], [o], ["patternProperties", r], s))) return i;
          }if (a) this.trackUnknownProperties && (this.knownPropertyPaths[s] = !0, delete this.unknownPropertyPaths[s]);else if (void 0 !== e.additionalProperties) {
            if (this.trackUnknownProperties && (this.knownPropertyPaths[s] = !0, delete this.unknownPropertyPaths[s]), "boolean" == typeof e.additionalProperties) {
              if (!e.additionalProperties && (i = this.createError(n.ERROR_CODES.OBJECT_ADDITIONAL_PROPERTIES, {}).prefixWith(o, "additionalProperties"), this.handleError(i))) return i;
            } else if (i = this.validateAll(t[o], e.additionalProperties, [o], ["additionalProperties"], s)) return i;
          } else this.trackUnknownProperties && !this.knownPropertyPaths[s] && (this.unknownPropertyPaths[s] = !0);
        }return null;
      }validateObjectDependencies(t, e, r) {
        let i;if (void 0 !== e.dependencies) for (let o in e.dependencies) if (void 0 !== t[o]) {
          let s = e.dependencies[o];if ("string" == typeof s) {
            if (void 0 === t[s] && (i = this.createError(n.ERROR_CODES.OBJECT_DEPENDENCY_KEY, { key: o, missing: s }).prefixWith(null, o).prefixWith(null, "dependencies"), this.handleError(i))) return i;
          } else if (Array.isArray(s)) {
            let e = 0,
                r = s.lenth;for (e = 0; e < r; e++) {
              let r = s[e];if (void 0 === t[r] && (i = this.createError(n.ERROR_CODES.OBJECT_DEPENDENCY_KEY, { key: o, missing: r }).prefixWith(null, "" + e).prefixWith(null, o).prefixWith(null, "dependencies"), this.handleError(i))) return i;
            }
          } else if (i = this.validateAll(t, s, [], ["dependencies", o], r)) return i;
        }return null;
      }validateCombinations(t, e, r) {
        return this.validateAllOf(t, e, r) || this.validateAnyOf(t, e, r) || this.validateOneOf(t, e, r) || this.validateNot(t, e, r) || null;
      }validateAllOf(t, e, r) {
        if (void 0 === e.allOf) return null;let n,
            i = 0,
            o = e.allOf.length;for (i = 0; i < o; i++) {
          let o = e.allOf[i];if (n = this.validateAll(t, o, [], ["allOf", i], r)) return n;
        }return null;
      }validateAnyOf(t, e, r) {
        if (void 0 === e.anyOf) return null;let i,
            o,
            s = [],
            a = this.errors.length;this.trackUnknownProperties && (i = this.unknownPropertyPaths, o = this.knownPropertyPaths);let u = !0,
            l = 0,
            c = e.anyOf.length;for (l = 0; l < c; l++) {
          this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});let n = e.anyOf[l],
              c = this.errors.length,
              f = this.validateAll(t, n, [], ["anyOf", l], r);if (null === f && c === this.errors.length) {
            if (this.errors = this.errors.slice(0, a), this.trackUnknownProperties) {
              for (let t in this.knownPropertyPaths) o[t] = !0, delete i[t];for (let t in this.unknownPropertyPaths) o[t] || (i[t] = !0);u = !1;continue;
            }return null;
          }f && s.push(f.prefixWith(null, "" + l).prefixWith(null, "anyOf"));
        }return this.trackUnknownProperties && (this.unknownPropertyPaths = i, this.knownPropertyPaths = o), u ? (s = s.concat(this.errors.slice(a)), this.errors = this.errors.slice(0, a), this.createError(n.ERROR_CODES.ANY_OF_MISSING, {}, "", "/anyOf", s)) : void 0;
      }validateOneOf(t, e, r) {
        if (void 0 === e.oneOf) return null;let i,
            o,
            s = null,
            a = [],
            u = this.errors.length;this.trackUnknownProperties && (i = this.unknownPropertyPaths, o = this.knownPropertyPaths);let l = 0,
            c = e.oneOf.length;for (l = 0; l < c; l++) {
          this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});let c = e.oneOf[l],
              f = this.errors.length,
              h = this.validateAll(t, c, [], ["oneOf", l], r);if (null === h && f === this.errors.length) {
            if (null !== s) return this.errors = this.errors.slice(0, u), this.createError(n.ERROR_CODES.ONE_OF_MULTIPLE, { index1: s, index2: l }, "", "/oneOf");if (s = l, this.trackUnknownProperties) {
              for (let t in this.knownPropertyPaths) o[t] = !0, delete i[t];for (let t in this.unknownPropertyPaths) o[t] || (i[t] = !0);
            }
          } else h && a.push(h);
        }return this.trackUnknownProperties && (this.unknownPropertyPaths = i, this.knownPropertyPaths = o), null === s ? (a = a.concat(this.errors.slice(u)), this.errors = this.errors.slice(0, u), this.createError(n.ERROR_CODES.ONE_OF_MISSING, {}, "", "/oneOf", a)) : (this.errors = this.errors.slice(0, u), null);
      }validateNot(t, e, r) {
        if (void 0 === e.not) return null;let i,
            o,
            s = this.errors.length;this.trackUnknownProperties && (i = this.unknownPropertyPaths, o = this.knownPropertyPaths, this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});let a = this.validateAll(t, e.not, null, null, r),
            u = this.errors.slice(s);return this.errors = this.errors.slice(0, s), this.trackUnknownProperties && (this.unknownPropertyPaths = i, this.knownPropertyPaths = o), null === a && 0 === u.length ? this.createError(n.ERROR_CODES.NOT_PASSED, {}, "", "/not") : null;
      }validateHypermedia(t, e, r) {
        if (!e.links) return null;let n,
            i = 0,
            o = e.links.length;for (i = 0; i < o; i++) {
          let o = e.links[i];if ("describedby" === o.rel) {
            let e = new UriTemplate(o.href),
                s = !0,
                a = 0,
                u = e.varNames.length;for (a = 0; a < u; a++) if (!(e.varNames[a] in t)) {
              s = !1;break;
            }if (s) {
              let o = { $ref: e.fillFromObject(t) };if (n = this.validateAll(t, o, [], ["links", i], r)) return n;
            }
          }
        }
      }
    }e.default = a = a;
  }, function (t, e, r) {
    "use strict";
    (function (e) {
      var r = "Expected a function",
          n = "__lodash_hash_undefined__",
          i = 1 / 0,
          o = "[object Function]",
          s = "[object GeneratorFunction]",
          a = "[object Symbol]",
          u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          l = /^\w*$/,
          c = /^\./,
          f = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          h = /\\(\\)?/g,
          d = /^\[object .+?Constructor\]$/,
          p = "object" == typeof e && e && e.Object === Object && e,
          _ = "object" == typeof self && self && self.Object === Object && self,
          y = p || _ || Function("return this")();var v = Array.prototype,
          g = Function.prototype,
          m = Object.prototype,
          b = y["__core-js_shared__"],
          O = function () {
        var t = /[^.]+$/.exec(b && b.keys && b.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
      }(),
          E = g.toString,
          j = m.hasOwnProperty,
          R = m.toString,
          S = RegExp("^" + E.call(j).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          A = y.Symbol,
          M = v.splice,
          w = D(y, "Map"),
          P = D(Object, "create"),
          I = A ? A.prototype : void 0,
          N = I ? I.toString : void 0;function T(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function k(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function x(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function U(t, e) {
        for (var r = t.length; r--;) if (G(t[r][0], e)) return r;return -1;
      }function C(t) {
        return !(!W(t) || function (t) {
          return !!O && O in t;
        }(t)) && (V(t) || function (t) {
          var e = !1;if (null != t && "function" != typeof t.toString) try {
            e = !!(t + "");
          } catch (t) {}return e;
        }(t) ? S : d).test(function (t) {
          if (null != t) {
            try {
              return E.call(t);
            } catch (t) {}try {
              return t + "";
            } catch (t) {}
          }return "";
        }(t));
      }function L(t, e) {
        var r = t.__data__;return function (t) {
          var e = typeof t;return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
        }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      }function D(t, e) {
        var r = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return C(r) ? r : void 0;
      }T.prototype.clear = function () {
        this.__data__ = P ? P(null) : {};
      }, T.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t];
      }, T.prototype.get = function (t) {
        var e = this.__data__;if (P) {
          var r = e[t];return r === n ? void 0 : r;
        }return j.call(e, t) ? e[t] : void 0;
      }, T.prototype.has = function (t) {
        var e = this.__data__;return P ? void 0 !== e[t] : j.call(e, t);
      }, T.prototype.set = function (t, e) {
        return this.__data__[t] = P && void 0 === e ? n : e, this;
      }, k.prototype.clear = function () {
        this.__data__ = [];
      }, k.prototype.delete = function (t) {
        var e = this.__data__,
            r = U(e, t);return !(r < 0 || (r == e.length - 1 ? e.pop() : M.call(e, r, 1), 0));
      }, k.prototype.get = function (t) {
        var e = this.__data__,
            r = U(e, t);return r < 0 ? void 0 : e[r][1];
      }, k.prototype.has = function (t) {
        return U(this.__data__, t) > -1;
      }, k.prototype.set = function (t, e) {
        var r = this.__data__,
            n = U(r, t);return n < 0 ? r.push([t, e]) : r[n][1] = e, this;
      }, x.prototype.clear = function () {
        this.__data__ = { hash: new T(), map: new (w || k)(), string: new T() };
      }, x.prototype.delete = function (t) {
        return L(this, t).delete(t);
      }, x.prototype.get = function (t) {
        return L(this, t).get(t);
      }, x.prototype.has = function (t) {
        return L(this, t).has(t);
      }, x.prototype.set = function (t, e) {
        return L(this, t).set(t, e), this;
      };var $ = B(function (t) {
        t = function (t) {
          return null == t ? "" : function (t) {
            if ("string" == typeof t) return t;if (K(t)) return N ? N.call(t) : "";var e = t + "";return "0" == e && 1 / t == -i ? "-0" : e;
          }(t);
        }(t);var e = [];return c.test(t) && e.push(""), t.replace(f, function (t, r, n, i) {
          e.push(n ? i.replace(h, "$1") : r || t);
        }), e;
      });function F(t) {
        if ("string" == typeof t || K(t)) return t;var e = t + "";return "0" == e && 1 / t == -i ? "-0" : e;
      }function B(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(r);var n = function () {
          var r = arguments,
              i = e ? e.apply(this, r) : r[0],
              o = n.cache;if (o.has(i)) return o.get(i);var s = t.apply(this, r);return n.cache = o.set(i, s), s;
        };return n.cache = new (B.Cache || x)(), n;
      }function G(t, e) {
        return t === e || t != t && e != e;
      }B.Cache = x;var z = Array.isArray;function V(t) {
        var e = W(t) ? R.call(t) : "";return e == o || e == s;
      }function W(t) {
        var e = typeof t;return !!t && ("object" == e || "function" == e);
      }function K(t) {
        return "symbol" == typeof t || function (t) {
          return !!t && "object" == typeof t;
        }(t) && R.call(t) == a;
      }t.exports = function (t, e, r) {
        var n = -1,
            i = (e = function (t, e) {
          if (z(t)) return !1;var r = typeof t;return !("number" != r && "symbol" != r && "boolean" != r && null != t && !K(t)) || l.test(t) || !u.test(t) || null != e && t in Object(e);
        }(e, t) ? [e] : function (t) {
          return z(t) ? t : $(t);
        }(e)).length;for (i || (t = void 0, i = 1); ++n < i;) {
          var o = null == t ? void 0 : t[F(e[n])];void 0 === o && (n = i, o = r), t = V(o) ? o.call(t) : o;
        }return t;
      };
    }).call(this, r(0));
  }, function (t, e, r) {
    "use strict";
    (function (t, r) {
      var n = 9007199254740991,
          i = "[object Arguments]",
          o = "[object Function]",
          s = "[object GeneratorFunction]",
          a = "[object Map]",
          u = "[object Set]",
          l = /^\[object .+?Constructor\]$/,
          c = "object" == typeof t && t && t.Object === Object && t,
          f = "object" == typeof self && self && self.Object === Object && self,
          h = c || f || Function("return this")(),
          d = "object" == typeof e && e && !e.nodeType && e,
          p = d && "object" == typeof r && r && !r.nodeType && r,
          _ = p && p.exports === d;var y = Function.prototype,
          v = Object.prototype,
          g = h["__core-js_shared__"],
          m = function () {
        var t = /[^.]+$/.exec(g && g.keys && g.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
      }(),
          b = y.toString,
          O = v.hasOwnProperty,
          E = v.toString,
          j = RegExp("^" + b.call(O).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          R = _ ? h.Buffer : void 0,
          S = v.propertyIsEnumerable,
          A = R ? R.isBuffer : void 0,
          M = function (t, e) {
        return function (r) {
          return t(e(r));
        };
      }(Object.keys, Object),
          w = F(h, "DataView"),
          P = F(h, "Map"),
          I = F(h, "Promise"),
          N = F(h, "Set"),
          T = F(h, "WeakMap"),
          k = !S.call({ valueOf: 1 }, "valueOf"),
          x = G(w),
          U = G(P),
          C = G(I),
          L = G(N),
          D = G(T);function $(t) {
        return !(!Y(t) || function (t) {
          return !!m && m in t;
        }(t)) && (J(t) || function (t) {
          var e = !1;if (null != t && "function" != typeof t.toString) try {
            e = !!(t + "");
          } catch (t) {}return e;
        }(t) ? j : l).test(G(t));
      }function F(t, e) {
        var r = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return $(r) ? r : void 0;
      }var B = function (t) {
        return E.call(t);
      };function G(t) {
        if (null != t) {
          try {
            return b.call(t);
          } catch (t) {}try {
            return t + "";
          } catch (t) {}
        }return "";
      }function z(t) {
        return function (t) {
          return function (t) {
            return !!t && "object" == typeof t;
          }(t) && W(t);
        }(t) && O.call(t, "callee") && (!S.call(t, "callee") || E.call(t) == i);
      }(w && "[object DataView]" != B(new w(new ArrayBuffer(1))) || P && B(new P()) != a || I && "[object Promise]" != B(I.resolve()) || N && B(new N()) != u || T && "[object WeakMap]" != B(new T())) && (B = function (t) {
        var e = E.call(t),
            r = "[object Object]" == e ? t.constructor : void 0,
            n = r ? G(r) : void 0;if (n) switch (n) {case x:
            return "[object DataView]";case U:
            return a;case C:
            return "[object Promise]";case L:
            return u;case D:
            return "[object WeakMap]";}return e;
      });var V = Array.isArray;function W(t) {
        return null != t && function (t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
        }(t.length) && !J(t);
      }var K = A || function () {
        return !1;
      };function J(t) {
        var e = Y(t) ? E.call(t) : "";return e == o || e == s;
      }function Y(t) {
        var e = typeof t;return !!t && ("object" == e || "function" == e);
      }r.exports = function (t) {
        if (W(t) && (V(t) || "string" == typeof t || "function" == typeof t.splice || K(t) || z(t))) return !t.length;var e = B(t);if (e == a || e == u) return !t.size;if (k || function (t) {
          var e = t && t.constructor;return t === ("function" == typeof e && e.prototype || v);
        }(t)) return !M(t).length;for (var r in t) if (O.call(t, r)) return !1;return !0;
      };
    }).call(this, r(0), r(5)(t));
  }, function (t, e, r) {
    "use strict";
    (function (e) {
      var r = "Expected a function",
          n = "__lodash_hash_undefined__",
          i = 1 / 0,
          o = 9007199254740991,
          s = "[object Arguments]",
          a = "[object Function]",
          u = "[object GeneratorFunction]",
          l = "[object Symbol]",
          c = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          f = /^\w*$/,
          h = /^\./,
          d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          p = /\\(\\)?/g,
          _ = /^\[object .+?Constructor\]$/,
          y = /^(?:0|[1-9]\d*)$/,
          v = "object" == typeof e && e && e.Object === Object && e,
          g = "object" == typeof self && self && self.Object === Object && self,
          m = v || g || Function("return this")();var b = Array.prototype,
          O = Function.prototype,
          E = Object.prototype,
          j = m["__core-js_shared__"],
          R = function () {
        var t = /[^.]+$/.exec(j && j.keys && j.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
      }(),
          S = O.toString,
          A = E.hasOwnProperty,
          M = E.toString,
          w = RegExp("^" + S.call(A).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          P = m.Symbol,
          I = E.propertyIsEnumerable,
          N = b.splice,
          T = z(m, "Map"),
          k = z(Object, "create"),
          x = P ? P.prototype : void 0,
          U = x ? x.toString : void 0;function C(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function L(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function D(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function $(t, e) {
        for (var r = t.length; r--;) if (Y(t[r][0], e)) return r;return -1;
      }function F(t, e) {
        return null != t && A.call(t, e);
      }function B(t) {
        return !(!Q(t) || function (t) {
          return !!R && R in t;
        }(t)) && (H(t) || function (t) {
          var e = !1;if (null != t && "function" != typeof t.toString) try {
            e = !!(t + "");
          } catch (t) {}return e;
        }(t) ? w : _).test(function (t) {
          if (null != t) {
            try {
              return S.call(t);
            } catch (t) {}try {
              return t + "";
            } catch (t) {}
          }return "";
        }(t));
      }function G(t, e) {
        var r = t.__data__;return function (t) {
          var e = typeof t;return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
        }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      }function z(t, e) {
        var r = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return B(r) ? r : void 0;
      }function V(t, e, r) {
        for (var n, i = -1, a = (e = function (t, e) {
          if (q(t)) return !1;var r = typeof t;if ("number" == r || "symbol" == r || "boolean" == r || null == t || tt(t)) return !0;return f.test(t) || !c.test(t) || null != e && (t in Object(e));
        }(e, t) ? [e] : function (t) {
          return q(t) ? t : W(t);
        }(e)).length; ++i < a;) {
          var u = K(e[i]);if (!(n = null != t && r(t, u))) break;t = t[u];
        }return n || !!(a = t ? t.length : 0) && X(a) && function (t, e) {
          return !!(e = null == e ? o : e) && ("number" == typeof t || y.test(t)) && t > -1 && t % 1 == 0 && t < e;
        }(u, a) && (q(t) || function (t) {
          return function (t) {
            return Z(t) && function (t) {
              return null != t && X(t.length) && !H(t);
            }(t);
          }(t) && A.call(t, "callee") && (!I.call(t, "callee") || M.call(t) == s);
        }(t));
      }C.prototype.clear = function () {
        this.__data__ = k ? k(null) : {};
      }, C.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t];
      }, C.prototype.get = function (t) {
        var e = this.__data__;if (k) {
          var r = e[t];return r === n ? void 0 : r;
        }return A.call(e, t) ? e[t] : void 0;
      }, C.prototype.has = function (t) {
        var e = this.__data__;return k ? void 0 !== e[t] : A.call(e, t);
      }, C.prototype.set = function (t, e) {
        return this.__data__[t] = k && void 0 === e ? n : e, this;
      }, L.prototype.clear = function () {
        this.__data__ = [];
      }, L.prototype.delete = function (t) {
        var e = this.__data__,
            r = $(e, t);return !(r < 0 || (r == e.length - 1 ? e.pop() : N.call(e, r, 1), 0));
      }, L.prototype.get = function (t) {
        var e = this.__data__,
            r = $(e, t);return r < 0 ? void 0 : e[r][1];
      }, L.prototype.has = function (t) {
        return $(this.__data__, t) > -1;
      }, L.prototype.set = function (t, e) {
        var r = this.__data__,
            n = $(r, t);return n < 0 ? r.push([t, e]) : r[n][1] = e, this;
      }, D.prototype.clear = function () {
        this.__data__ = { hash: new C(), map: new (T || L)(), string: new C() };
      }, D.prototype.delete = function (t) {
        return G(this, t).delete(t);
      }, D.prototype.get = function (t) {
        return G(this, t).get(t);
      }, D.prototype.has = function (t) {
        return G(this, t).has(t);
      }, D.prototype.set = function (t, e) {
        return G(this, t).set(t, e), this;
      };var W = J(function (t) {
        t = function (t) {
          return null == t ? "" : function (t) {
            if ("string" == typeof t) return t;if (tt(t)) return U ? U.call(t) : "";var e = t + "";return "0" == e && 1 / t == -i ? "-0" : e;
          }(t);
        }(t);var e = [];return h.test(t) && e.push(""), t.replace(d, function (t, r, n, i) {
          e.push(n ? i.replace(p, "$1") : r || t);
        }), e;
      });function K(t) {
        if ("string" == typeof t || tt(t)) return t;var e = t + "";return "0" == e && 1 / t == -i ? "-0" : e;
      }function J(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(r);var n = function () {
          var r = arguments,
              i = e ? e.apply(this, r) : r[0],
              o = n.cache;if (o.has(i)) return o.get(i);var s = t.apply(this, r);return n.cache = o.set(i, s), s;
        };return n.cache = new (J.Cache || D)(), n;
      }function Y(t, e) {
        return t === e || t != t && e != e;
      }J.Cache = D;var q = Array.isArray;function H(t) {
        var e = Q(t) ? M.call(t) : "";return e == a || e == u;
      }function X(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o;
      }function Q(t) {
        var e = typeof t;return !!t && ("object" == e || "function" == e);
      }function Z(t) {
        return !!t && "object" == typeof t;
      }function tt(t) {
        return "symbol" == typeof t || Z(t) && M.call(t) == l;
      }t.exports = function (t, e) {
        return null != t && V(t, e, F);
      };
    }).call(this, r(0));
  }, function (t, e, r) {
    "use strict";
    (function (t, r) {
      var n = 200,
          i = "__lodash_hash_undefined__",
          o = 1,
          s = 2,
          a = 9007199254740991,
          u = "[object Arguments]",
          l = "[object Array]",
          c = "[object AsyncFunction]",
          f = "[object Boolean]",
          h = "[object Date]",
          d = "[object Error]",
          p = "[object Function]",
          _ = "[object GeneratorFunction]",
          y = "[object Map]",
          v = "[object Number]",
          g = "[object Null]",
          m = "[object Object]",
          b = "[object Proxy]",
          O = "[object RegExp]",
          E = "[object Set]",
          j = "[object String]",
          R = "[object Symbol]",
          S = "[object Undefined]",
          A = "[object ArrayBuffer]",
          M = "[object DataView]",
          w = /^\[object .+?Constructor\]$/,
          P = /^(?:0|[1-9]\d*)$/,
          I = {};I["[object Float32Array]"] = I["[object Float64Array]"] = I["[object Int8Array]"] = I["[object Int16Array]"] = I["[object Int32Array]"] = I["[object Uint8Array]"] = I["[object Uint8ClampedArray]"] = I["[object Uint16Array]"] = I["[object Uint32Array]"] = !0, I[u] = I[l] = I[A] = I[f] = I[M] = I[h] = I[d] = I[p] = I[y] = I[v] = I[m] = I[O] = I[E] = I[j] = I["[object WeakMap]"] = !1;var N = "object" == typeof t && t && t.Object === Object && t,
          T = "object" == typeof self && self && self.Object === Object && self,
          k = N || T || Function("return this")(),
          x = "object" == typeof e && e && !e.nodeType && e,
          U = x && "object" == typeof r && r && !r.nodeType && r,
          C = U && U.exports === x,
          L = C && N.process,
          D = function () {
        try {
          return L && L.binding && L.binding("util");
        } catch (t) {}
      }(),
          $ = D && D.isTypedArray;function F(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n;) if (e(t[r], r, t)) return !0;return !1;
      }function B(t, e) {
        return t.has(e);
      }function G(t) {
        var e = -1,
            r = Array(t.size);return t.forEach(function (t, n) {
          r[++e] = [n, t];
        }), r;
      }function z(t) {
        var e = -1,
            r = Array(t.size);return t.forEach(function (t) {
          r[++e] = t;
        }), r;
      }var V = Array.prototype,
          W = Function.prototype,
          K = Object.prototype,
          J = k["__core-js_shared__"],
          Y = W.toString,
          q = K.hasOwnProperty,
          H = function () {
        var t = /[^.]+$/.exec(J && J.keys && J.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
      }(),
          X = K.toString,
          Q = RegExp("^" + Y.call(q).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          Z = C ? k.Buffer : void 0,
          tt = k.Symbol,
          et = k.Uint8Array,
          rt = K.propertyIsEnumerable,
          nt = V.splice,
          it = tt ? tt.toStringTag : void 0,
          ot = Object.getOwnPropertySymbols,
          st = Z ? Z.isBuffer : void 0,
          at = function (t, e) {
        return function (r) {
          return t(e(r));
        };
      }(Object.keys, Object),
          ut = Ct(k, "DataView"),
          lt = Ct(k, "Map"),
          ct = Ct(k, "Promise"),
          ft = Ct(k, "Set"),
          ht = Ct(k, "WeakMap"),
          dt = Ct(Object, "create"),
          pt = Ft(ut),
          _t = Ft(lt),
          yt = Ft(ct),
          vt = Ft(ft),
          gt = Ft(ht),
          mt = tt ? tt.prototype : void 0,
          bt = mt ? mt.valueOf : void 0;function Ot(t) {
        var e = -1,
            r = null == t ? 0 : t.length;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function Et(t) {
        var e = -1,
            r = null == t ? 0 : t.length;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function jt(t) {
        var e = -1,
            r = null == t ? 0 : t.length;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function Rt(t) {
        var e = -1,
            r = null == t ? 0 : t.length;for (this.__data__ = new jt(); ++e < r;) this.add(t[e]);
      }function St(t) {
        var e = this.__data__ = new Et(t);this.size = e.size;
      }function At(t, e) {
        var r = zt(t),
            n = !r && Gt(t),
            i = !r && !n && Vt(t),
            o = !r && !n && !i && qt(t),
            s = r || n || i || o,
            a = s ? function (t, e) {
          for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);return n;
        }(t.length, String) : [],
            u = a.length;for (var l in t) !e && !q.call(t, l) || s && ("length" == l || i && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || $t(l, u)) || a.push(l);return a;
      }function Mt(t, e) {
        for (var r = t.length; r--;) if (Bt(t[r][0], e)) return r;return -1;
      }function wt(t) {
        return null == t ? void 0 === t ? S : g : it && it in Object(t) ? function (t) {
          var e = q.call(t, it),
              r = t[it];try {
            t[it] = void 0;var n = !0;
          } catch (t) {}var i = X.call(t);n && (e ? t[it] = r : delete t[it]);return i;
        }(t) : function (t) {
          return X.call(t);
        }(t);
      }function Pt(t) {
        return Yt(t) && wt(t) == u;
      }function It(t, e, r, n, i) {
        return t === e || (null == t || null == e || !Yt(t) && !Yt(e) ? t != t && e != e : function (t, e, r, n, i, a) {
          var c = zt(t),
              p = zt(e),
              _ = c ? l : Dt(t),
              g = p ? l : Dt(e),
              b = (_ = _ == u ? m : _) == m,
              S = (g = g == u ? m : g) == m,
              w = _ == g;if (w && Vt(t)) {
            if (!Vt(e)) return !1;c = !0, b = !1;
          }if (w && !b) return a || (a = new St()), c || qt(t) ? kt(t, e, r, n, i, a) : function (t, e, r, n, i, a, u) {
            switch (r) {case M:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;t = t.buffer, e = e.buffer;case A:
                return !(t.byteLength != e.byteLength || !a(new et(t), new et(e)));case f:case h:case v:
                return Bt(+t, +e);case d:
                return t.name == e.name && t.message == e.message;case O:case j:
                return t == e + "";case y:
                var l = G;case E:
                var c = n & o;if (l || (l = z), t.size != e.size && !c) return !1;var p = u.get(t);if (p) return p == e;n |= s, u.set(t, e);var _ = kt(l(t), l(e), n, i, a, u);return u.delete(t), _;case R:
                if (bt) return bt.call(t) == bt.call(e);}return !1;
          }(t, e, _, r, n, i, a);if (!(r & o)) {
            var P = b && q.call(t, "__wrapped__"),
                I = S && q.call(e, "__wrapped__");if (P || I) {
              var N = P ? t.value() : t,
                  T = I ? e.value() : e;return a || (a = new St()), i(N, T, r, n, a);
            }
          }if (!w) return !1;return a || (a = new St()), function (t, e, r, n, i, s) {
            var a = r & o,
                u = xt(t),
                l = u.length,
                c = xt(e).length;if (l != c && !a) return !1;for (var f = l; f--;) {
              var h = u[f];if (!(a ? h in e : q.call(e, h))) return !1;
            }var d = s.get(t);if (d && s.get(e)) return d == e;var p = !0;s.set(t, e), s.set(e, t);for (var _ = a; ++f < l;) {
              h = u[f];var y = t[h],
                  v = e[h];if (n) var g = a ? n(v, y, h, e, t, s) : n(y, v, h, t, e, s);if (!(void 0 === g ? y === v || i(y, v, r, n, s) : g)) {
                p = !1;break;
              }_ || (_ = "constructor" == h);
            }if (p && !_) {
              var m = t.constructor,
                  b = e.constructor;m != b && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof b && b instanceof b) && (p = !1);
            }return s.delete(t), s.delete(e), p;
          }(t, e, r, n, i, a);
        }(t, e, r, n, It, i));
      }function Nt(t) {
        return !(!Jt(t) || function (t) {
          return !!H && H in t;
        }(t)) && (Wt(t) ? Q : w).test(Ft(t));
      }function Tt(t) {
        if (!function (t) {
          var e = t && t.constructor,
              r = "function" == typeof e && e.prototype || K;return t === r;
        }(t)) return at(t);var e = [];for (var r in Object(t)) q.call(t, r) && "constructor" != r && e.push(r);return e;
      }function kt(t, e, r, n, i, a) {
        var u = r & o,
            l = t.length,
            c = e.length;if (l != c && !(u && c > l)) return !1;var f = a.get(t);if (f && a.get(e)) return f == e;var h = -1,
            d = !0,
            p = r & s ? new Rt() : void 0;for (a.set(t, e), a.set(e, t); ++h < l;) {
          var _ = t[h],
              y = e[h];if (n) var v = u ? n(y, _, h, e, t, a) : n(_, y, h, t, e, a);if (void 0 !== v) {
            if (v) continue;d = !1;break;
          }if (p) {
            if (!F(e, function (t, e) {
              if (!B(p, e) && (_ === t || i(_, t, r, n, a))) return p.push(e);
            })) {
              d = !1;break;
            }
          } else if (_ !== y && !i(_, y, r, n, a)) {
            d = !1;break;
          }
        }return a.delete(t), a.delete(e), d;
      }function xt(t) {
        return function (t, e, r) {
          var n = e(t);return zt(t) ? n : function (t, e) {
            for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];return t;
          }(n, r(t));
        }(t, Ht, Lt);
      }function Ut(t, e) {
        var r = t.__data__;return function (t) {
          var e = typeof t;return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
        }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      }function Ct(t, e) {
        var r = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return Nt(r) ? r : void 0;
      }Ot.prototype.clear = function () {
        this.__data__ = dt ? dt(null) : {}, this.size = 0;
      }, Ot.prototype.delete = function (t) {
        var e = this.has(t) && delete this.__data__[t];return this.size -= e ? 1 : 0, e;
      }, Ot.prototype.get = function (t) {
        var e = this.__data__;if (dt) {
          var r = e[t];return r === i ? void 0 : r;
        }return q.call(e, t) ? e[t] : void 0;
      }, Ot.prototype.has = function (t) {
        var e = this.__data__;return dt ? void 0 !== e[t] : q.call(e, t);
      }, Ot.prototype.set = function (t, e) {
        var r = this.__data__;return this.size += this.has(t) ? 0 : 1, r[t] = dt && void 0 === e ? i : e, this;
      }, Et.prototype.clear = function () {
        this.__data__ = [], this.size = 0;
      }, Et.prototype.delete = function (t) {
        var e = this.__data__,
            r = Mt(e, t);return !(r < 0 || (r == e.length - 1 ? e.pop() : nt.call(e, r, 1), --this.size, 0));
      }, Et.prototype.get = function (t) {
        var e = this.__data__,
            r = Mt(e, t);return r < 0 ? void 0 : e[r][1];
      }, Et.prototype.has = function (t) {
        return Mt(this.__data__, t) > -1;
      }, Et.prototype.set = function (t, e) {
        var r = this.__data__,
            n = Mt(r, t);return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
      }, jt.prototype.clear = function () {
        this.size = 0, this.__data__ = { hash: new Ot(), map: new (lt || Et)(), string: new Ot() };
      }, jt.prototype.delete = function (t) {
        var e = Ut(this, t).delete(t);return this.size -= e ? 1 : 0, e;
      }, jt.prototype.get = function (t) {
        return Ut(this, t).get(t);
      }, jt.prototype.has = function (t) {
        return Ut(this, t).has(t);
      }, jt.prototype.set = function (t, e) {
        var r = Ut(this, t),
            n = r.size;return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
      }, Rt.prototype.add = Rt.prototype.push = function (t) {
        return this.__data__.set(t, i), this;
      }, Rt.prototype.has = function (t) {
        return this.__data__.has(t);
      }, St.prototype.clear = function () {
        this.__data__ = new Et(), this.size = 0;
      }, St.prototype.delete = function (t) {
        var e = this.__data__,
            r = e.delete(t);return this.size = e.size, r;
      }, St.prototype.get = function (t) {
        return this.__data__.get(t);
      }, St.prototype.has = function (t) {
        return this.__data__.has(t);
      }, St.prototype.set = function (t, e) {
        var r = this.__data__;if (r instanceof Et) {
          var i = r.__data__;if (!lt || i.length < n - 1) return i.push([t, e]), this.size = ++r.size, this;r = this.__data__ = new jt(i);
        }return r.set(t, e), this.size = r.size, this;
      };var Lt = ot ? function (t) {
        return null == t ? [] : (t = Object(t), function (t, e) {
          for (var r = -1, n = null == t ? 0 : t.length, i = 0, o = []; ++r < n;) {
            var s = t[r];e(s, r, t) && (o[i++] = s);
          }return o;
        }(ot(t), function (e) {
          return rt.call(t, e);
        }));
      } : function () {
        return [];
      },
          Dt = wt;function $t(t, e) {
        return !!(e = null == e ? a : e) && ("number" == typeof t || P.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }function Ft(t) {
        if (null != t) {
          try {
            return Y.call(t);
          } catch (t) {}try {
            return t + "";
          } catch (t) {}
        }return "";
      }function Bt(t, e) {
        return t === e || t != t && e != e;
      }(ut && Dt(new ut(new ArrayBuffer(1))) != M || lt && Dt(new lt()) != y || ct && "[object Promise]" != Dt(ct.resolve()) || ft && Dt(new ft()) != E || ht && "[object WeakMap]" != Dt(new ht())) && (Dt = function (t) {
        var e = wt(t),
            r = e == m ? t.constructor : void 0,
            n = r ? Ft(r) : "";if (n) switch (n) {case pt:
            return M;case _t:
            return y;case yt:
            return "[object Promise]";case vt:
            return E;case gt:
            return "[object WeakMap]";}return e;
      });var Gt = Pt(function () {
        return arguments;
      }()) ? Pt : function (t) {
        return Yt(t) && q.call(t, "callee") && !rt.call(t, "callee");
      },
          zt = Array.isArray;var Vt = st || function () {
        return !1;
      };function Wt(t) {
        if (!Jt(t)) return !1;var e = wt(t);return e == p || e == _ || e == c || e == b;
      }function Kt(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= a;
      }function Jt(t) {
        var e = typeof t;return null != t && ("object" == e || "function" == e);
      }function Yt(t) {
        return null != t && "object" == typeof t;
      }var qt = $ ? function (t) {
        return function (e) {
          return t(e);
        };
      }($) : function (t) {
        return Yt(t) && Kt(t.length) && !!I[wt(t)];
      };function Ht(t) {
        return function (t) {
          return null != t && Kt(t.length) && !Wt(t);
        }(t) ? At(t) : Tt(t);
      }r.exports = function (t, e) {
        return It(t, e);
      };
    }).call(this, r(0), r(5)(t));
  }, function (t, e, r) {
    "use strict";
    var n = 9007199254740991,
        i = "[object Arguments]",
        o = "[object Function]",
        s = "[object GeneratorFunction]",
        a = /^(?:0|[1-9]\d*)$/;function u(t, e, r) {
      switch (r.length) {case 0:
          return t.call(e);case 1:
          return t.call(e, r[0]);case 2:
          return t.call(e, r[0], r[1]);case 3:
          return t.call(e, r[0], r[1], r[2]);}return t.apply(e, r);
    }var l = Object.prototype,
        c = l.hasOwnProperty,
        f = l.toString,
        h = l.propertyIsEnumerable,
        d = Math.max;function p(t, e) {
      var r = O(t) || function (t) {
        return function (t) {
          return function (t) {
            return !!t && "object" == typeof t;
          }(t) && E(t);
        }(t) && c.call(t, "callee") && (!h.call(t, "callee") || f.call(t) == i);
      }(t) ? function (t, e) {
        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);return n;
      }(t.length, String) : [],
          n = r.length,
          o = !!n;for (var s in t) !e && !c.call(t, s) || o && ("length" == s || m(s, n)) || r.push(s);return r;
    }function _(t, e, r, n) {
      return void 0 === t || b(t, l[r]) && !c.call(n, r) ? e : t;
    }function y(t, e, r) {
      var n = t[e];c.call(t, e) && b(n, r) && (void 0 !== r || e in t) || (t[e] = r);
    }function v(t) {
      if (!j(t)) return function (t) {
        var e = [];if (null != t) for (var r in Object(t)) e.push(r);return e;
      }(t);var e = function (t) {
        var e = t && t.constructor,
            r = "function" == typeof e && e.prototype || l;return t === r;
      }(t),
          r = [];for (var n in t) ("constructor" != n || !e && c.call(t, n)) && r.push(n);return r;
    }function g(t, e) {
      return e = d(void 0 === e ? t.length - 1 : e, 0), function () {
        for (var r = arguments, n = -1, i = d(r.length - e, 0), o = Array(i); ++n < i;) o[n] = r[e + n];n = -1;for (var s = Array(e + 1); ++n < e;) s[n] = r[n];return s[e] = o, u(t, this, s);
      };
    }function m(t, e) {
      return !!(e = null == e ? n : e) && ("number" == typeof t || a.test(t)) && t > -1 && t % 1 == 0 && t < e;
    }function b(t, e) {
      return t === e || t != t && e != e;
    }var O = Array.isArray;function E(t) {
      return null != t && function (t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
      }(t.length) && !function (t) {
        var e = j(t) ? f.call(t) : "";return e == o || e == s;
      }(t);
    }function j(t) {
      var e = typeof t;return !!t && ("object" == e || "function" == e);
    }var R = function (t) {
      return g(function (e, r) {
        var n = -1,
            i = r.length,
            o = i > 1 ? r[i - 1] : void 0,
            s = i > 2 ? r[2] : void 0;for (o = t.length > 3 && "function" == typeof o ? (i--, o) : void 0, s && function (t, e, r) {
          if (!j(r)) return !1;var n = typeof e;return !!("number" == n ? E(r) && m(e, r.length) : "string" == n && (e in r)) && b(r[e], t);
        }(r[0], r[1], s) && (o = i < 3 ? void 0 : o, i = 1), e = Object(e); ++n < i;) {
          var a = r[n];a && t(e, a, n, o);
        }return e;
      });
    }(function (t, e, r, n) {
      !function (t, e, r, n) {
        r || (r = {});for (var i = -1, o = e.length; ++i < o;) {
          var s = e[i],
              a = n ? n(r[s], t[s], s, r, t) : void 0;y(r, s, void 0 === a ? t[s] : a);
        }
      }(e, function (t) {
        return E(t) ? p(t, !0) : v(t);
      }(e), t, n);
    }),
        S = g(function (t) {
      return t.push(void 0, _), u(R, void 0, t);
    });t.exports = S;
  }, function (t, e, r) {
    "use strict";
    (function (t, r) {
      var n = 200,
          i = "Expected a function",
          o = "__lodash_hash_undefined__",
          s = 1,
          a = 2,
          u = 1 / 0,
          l = 9007199254740991,
          c = "[object Arguments]",
          f = "[object Array]",
          h = "[object Boolean]",
          d = "[object Date]",
          p = "[object Error]",
          _ = "[object Function]",
          y = "[object GeneratorFunction]",
          v = "[object Map]",
          g = "[object Number]",
          m = "[object Object]",
          b = "[object RegExp]",
          O = "[object Set]",
          E = "[object String]",
          j = "[object Symbol]",
          R = "[object WeakMap]",
          S = "[object ArrayBuffer]",
          A = "[object DataView]",
          M = "[object Float32Array]",
          w = "[object Float64Array]",
          P = "[object Int8Array]",
          I = "[object Int16Array]",
          N = "[object Int32Array]",
          T = "[object Uint8Array]",
          k = "[object Uint8ClampedArray]",
          x = "[object Uint16Array]",
          U = "[object Uint32Array]",
          C = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          L = /^\w*$/,
          D = /^\./,
          $ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          F = /\\(\\)?/g,
          B = /\w*$/,
          G = /^\[object .+?Constructor\]$/,
          z = /^(?:0|[1-9]\d*)$/,
          V = {};V[M] = V[w] = V[P] = V[I] = V[N] = V[T] = V[k] = V[x] = V[U] = !0, V[c] = V[f] = V[S] = V[h] = V[A] = V[d] = V[p] = V[_] = V[v] = V[g] = V[m] = V[b] = V[O] = V[E] = V[R] = !1;var W = {};W[c] = W[f] = W[S] = W[A] = W[h] = W[d] = W[M] = W[w] = W[P] = W[I] = W[N] = W[v] = W[g] = W[m] = W[b] = W[O] = W[E] = W[j] = W[T] = W[k] = W[x] = W[U] = !0, W[p] = W[_] = W[R] = !1;var K = "object" == typeof t && t && t.Object === Object && t,
          J = "object" == typeof self && self && self.Object === Object && self,
          Y = K || J || Function("return this")(),
          q = "object" == typeof e && e && !e.nodeType && e,
          H = q && "object" == typeof r && r && !r.nodeType && r,
          X = H && H.exports === q,
          Q = X && K.process,
          Z = function () {
        try {
          return Q && Q.binding("util");
        } catch (t) {}
      }(),
          tt = Z && Z.isTypedArray;function et(t, e) {
        return t.set(e[0], e[1]), t;
      }function rt(t, e) {
        return t.add(e), t;
      }function nt(t, e, r, n) {
        var i = -1,
            o = t ? t.length : 0;for (n && o && (r = t[++i]); ++i < o;) r = e(r, t[i], i, t);return r;
      }function it(t, e) {
        for (var r = -1, n = t ? t.length : 0; ++r < n;) if (e(t[r], r, t)) return !0;return !1;
      }function ot(t) {
        var e = !1;if (null != t && "function" != typeof t.toString) try {
          e = !!(t + "");
        } catch (t) {}return e;
      }function st(t) {
        var e = -1,
            r = Array(t.size);return t.forEach(function (t, n) {
          r[++e] = [n, t];
        }), r;
      }function at(t, e) {
        return function (r) {
          return t(e(r));
        };
      }function ut(t) {
        var e = -1,
            r = Array(t.size);return t.forEach(function (t) {
          r[++e] = t;
        }), r;
      }var lt = Array.prototype,
          ct = Function.prototype,
          ft = Object.prototype,
          ht = Y["__core-js_shared__"],
          dt = function () {
        var t = /[^.]+$/.exec(ht && ht.keys && ht.keys.IE_PROTO || "");return t ? "Symbol(src)_1." + t : "";
      }(),
          pt = ct.toString,
          _t = ft.hasOwnProperty,
          yt = ft.toString,
          vt = RegExp("^" + pt.call(_t).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          gt = X ? Y.Buffer : void 0,
          mt = Y.Symbol,
          bt = Y.Uint8Array,
          Ot = at(Object.getPrototypeOf, Object),
          Et = Object.create,
          jt = ft.propertyIsEnumerable,
          Rt = lt.splice,
          St = Object.getOwnPropertySymbols,
          At = gt ? gt.isBuffer : void 0,
          Mt = at(Object.keys, Object),
          wt = ae(Y, "DataView"),
          Pt = ae(Y, "Map"),
          It = ae(Y, "Promise"),
          Nt = ae(Y, "Set"),
          Tt = ae(Y, "WeakMap"),
          kt = ae(Object, "create"),
          xt = ve(wt),
          Ut = ve(Pt),
          Ct = ve(It),
          Lt = ve(Nt),
          Dt = ve(Tt),
          $t = mt ? mt.prototype : void 0,
          Ft = $t ? $t.valueOf : void 0,
          Bt = $t ? $t.toString : void 0;function Gt(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function zt(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function Vt(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.clear(); ++e < r;) {
          var n = t[e];this.set(n[0], n[1]);
        }
      }function Wt(t) {
        var e = -1,
            r = t ? t.length : 0;for (this.__data__ = new Vt(); ++e < r;) this.add(t[e]);
      }function Kt(t) {
        this.__data__ = new zt(t);
      }function Jt(t, e) {
        var r = Oe(t) || be(t) ? function (t, e) {
          for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);return n;
        }(t.length, String) : [],
            n = r.length,
            i = !!n;for (var o in t) !e && !_t.call(t, o) || i && ("length" == o || ce(o, n)) || r.push(o);return r;
      }function Yt(t, e, r) {
        var n = t[e];_t.call(t, e) && me(n, r) && (void 0 !== r || e in t) || (t[e] = r);
      }function qt(t, e) {
        for (var r = t.length; r--;) if (me(t[r][0], e)) return r;return -1;
      }function Ht(t, e, r, n, i, o, s) {
        var a;if (n && (a = o ? n(t, i, o, s) : n(t)), void 0 !== a) return a;if (!Ae(t)) return t;var u = Oe(t);if (u) {
          if (a = function (t) {
            var e = t.length,
                r = t.constructor(e);e && "string" == typeof t[0] && _t.call(t, "index") && (r.index = t.index, r.input = t.input);return r;
          }(t), !e) return function (t, e) {
            var r = -1,
                n = t.length;e || (e = Array(n));for (; ++r < n;) e[r] = t[r];return e;
          }(t, a);
        } else {
          var l = le(t),
              f = l == _ || l == y;if (je(t)) return function (t, e) {
            if (e) return t.slice();var r = new t.constructor(t.length);return t.copy(r), r;
          }(t, e);if (l == m || l == c || f && !o) {
            if (ot(t)) return o ? t : {};if (a = function (t) {
              return "function" != typeof t.constructor || he(t) ? {} : function (t) {
                return Ae(t) ? Et(t) : {};
              }(Ot(t));
            }(f ? {} : t), !e) return function (t, e) {
              return ie(t, ue(t), e);
            }(t, function (t, e) {
              return t && ie(e, Ie(e), t);
            }(a, t));
          } else {
            if (!W[l]) return o ? t : {};a = function (t, e, r, n) {
              var i = t.constructor;switch (e) {case S:
                  return ne(t);case h:case d:
                  return new i(+t);case A:
                  return function (t, e) {
                    var r = e ? ne(t.buffer) : t.buffer;return new t.constructor(r, t.byteOffset, t.byteLength);
                  }(t, n);case M:case w:case P:case I:case N:case T:case k:case x:case U:
                  return function (t, e) {
                    var r = e ? ne(t.buffer) : t.buffer;return new t.constructor(r, t.byteOffset, t.length);
                  }(t, n);case v:
                  return function (t, e, r) {
                    return nt(e ? r(st(t), !0) : st(t), et, new t.constructor());
                  }(t, n, r);case g:case E:
                  return new i(t);case b:
                  return function (t) {
                    var e = new t.constructor(t.source, B.exec(t));return e.lastIndex = t.lastIndex, e;
                  }(t);case O:
                  return function (t, e, r) {
                    return nt(e ? r(ut(t), !0) : ut(t), rt, new t.constructor());
                  }(t, n, r);case j:
                  return function (t) {
                    return Ft ? Object(Ft.call(t)) : {};
                  }(t);}
            }(t, l, Ht, e);
          }
        }s || (s = new Kt());var p = s.get(t);if (p) return p;if (s.set(t, a), !u) var R = r ? function (t) {
          return function (t, e, r) {
            var n = e(t);return Oe(t) ? n : function (t, e) {
              for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r];return t;
            }(n, r(t));
          }(t, Ie, ue);
        }(t) : Ie(t);return function (t, e) {
          for (var r = -1, n = t ? t.length : 0; ++r < n && !1 !== e(t[r], r, t););
        }(R || t, function (i, o) {
          R && (i = t[o = i]), Yt(a, o, Ht(i, e, r, n, o, t, s));
        }), a;
      }function Xt(t, e) {
        for (var r = 0, n = (e = fe(e, t) ? [e] : re(e)).length; null != t && r < n;) t = t[ye(e[r++])];return r && r == n ? t : void 0;
      }function Qt(t, e) {
        return null != t && e in Object(t);
      }function Zt(t, e, r, n, i) {
        return t === e || (null == t || null == e || !Ae(t) && !Me(e) ? t != t && e != e : function (t, e, r, n, i, o) {
          var u = Oe(t),
              l = Oe(e),
              _ = f,
              y = f;u || (_ = (_ = le(t)) == c ? m : _);l || (y = (y = le(e)) == c ? m : y);var R = _ == m && !ot(t),
              M = y == m && !ot(e),
              w = _ == y;if (w && !R) return o || (o = new Kt()), u || Pe(t) ? oe(t, e, r, n, i, o) : function (t, e, r, n, i, o, u) {
            switch (r) {case A:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;t = t.buffer, e = e.buffer;case S:
                return !(t.byteLength != e.byteLength || !n(new bt(t), new bt(e)));case h:case d:case g:
                return me(+t, +e);case p:
                return t.name == e.name && t.message == e.message;case b:case E:
                return t == e + "";case v:
                var l = st;case O:
                var c = o & a;if (l || (l = ut), t.size != e.size && !c) return !1;var f = u.get(t);if (f) return f == e;o |= s, u.set(t, e);var _ = oe(l(t), l(e), n, i, o, u);return u.delete(t), _;case j:
                if (Ft) return Ft.call(t) == Ft.call(e);}return !1;
          }(t, e, _, r, n, i, o);if (!(i & a)) {
            var P = R && _t.call(t, "__wrapped__"),
                I = M && _t.call(e, "__wrapped__");if (P || I) {
              var N = P ? t.value() : t,
                  T = I ? e.value() : e;return o || (o = new Kt()), r(N, T, n, i, o);
            }
          }if (!w) return !1;return o || (o = new Kt()), function (t, e, r, n, i, o) {
            var s = i & a,
                u = Ie(t),
                l = u.length,
                c = Ie(e).length;if (l != c && !s) return !1;for (var f = l; f--;) {
              var h = u[f];if (!(s ? h in e : _t.call(e, h))) return !1;
            }var d = o.get(t);if (d && o.get(e)) return d == e;var p = !0;o.set(t, e), o.set(e, t);for (var _ = s; ++f < l;) {
              h = u[f];var y = t[h],
                  v = e[h];if (n) var g = s ? n(v, y, h, e, t, o) : n(y, v, h, t, e, o);if (!(void 0 === g ? y === v || r(y, v, n, i, o) : g)) {
                p = !1;break;
              }_ || (_ = "constructor" == h);
            }if (p && !_) {
              var m = t.constructor,
                  b = e.constructor;m != b && "constructor" in t && "constructor" in e && !("function" == typeof m && m instanceof m && "function" == typeof b && b instanceof b) && (p = !1);
            }return o.delete(t), o.delete(e), p;
          }(t, e, r, n, i, o);
        }(t, e, Zt, r, n, i));
      }function te(t) {
        return !(!Ae(t) || function (t) {
          return !!dt && dt in t;
        }(t)) && (Re(t) || ot(t) ? vt : G).test(ve(t));
      }function ee(t) {
        return "function" == typeof t ? t : null == t ? Ne : "object" == typeof t ? Oe(t) ? function (t, e) {
          if (fe(t) && de(e)) return pe(ye(t), e);return function (r) {
            var n = function (t, e, r) {
              var n = null == t ? void 0 : Xt(t, e);return void 0 === n ? r : n;
            }(r, t);return void 0 === n && n === e ? function (t, e) {
              return null != t && function (t, e, r) {
                var n,
                    i = -1,
                    o = (e = fe(e, t) ? [e] : re(e)).length;for (; ++i < o;) {
                  var s = ye(e[i]);if (!(n = null != t && r(t, s))) break;t = t[s];
                }if (n) return n;return !!(o = t ? t.length : 0) && Se(o) && ce(s, o) && (Oe(t) || be(t));
              }(t, e, Qt);
            }(r, t) : Zt(e, n, void 0, s | a);
          };
        }(t[0], t[1]) : function (t) {
          var e = function (t) {
            var e = Ie(t),
                r = e.length;for (; r--;) {
              var n = e[r],
                  i = t[n];e[r] = [n, i, de(i)];
            }return e;
          }(t);if (1 == e.length && e[0][2]) return pe(e[0][0], e[0][1]);return function (r) {
            return r === t || function (t, e, r, n) {
              var i = r.length,
                  o = i,
                  u = !n;if (null == t) return !o;for (t = Object(t); i--;) {
                var l = r[i];if (u && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
              }for (; ++i < o;) {
                var c = (l = r[i])[0],
                    f = t[c],
                    h = l[1];if (u && l[2]) {
                  if (void 0 === f && !(c in t)) return !1;
                } else {
                  var d = new Kt();if (n) var p = n(f, h, c, t, e, d);if (!(void 0 === p ? Zt(h, f, n, s | a, d) : p)) return !1;
                }
              }return !0;
            }(r, t, e);
          };
        }(t) : function (t) {
          return fe(t) ? function (t) {
            return function (e) {
              return null == e ? void 0 : e[t];
            };
          }(ye(t)) : function (t) {
            return function (e) {
              return Xt(e, t);
            };
          }(t);
        }(t);
      }function re(t) {
        return Oe(t) ? t : _e(t);
      }function ne(t) {
        var e = new t.constructor(t.byteLength);return new bt(e).set(new bt(t)), e;
      }function ie(t, e, r, n) {
        r || (r = {});for (var i = -1, o = e.length; ++i < o;) {
          var s = e[i],
              a = n ? n(r[s], t[s], s, r, t) : void 0;Yt(r, s, void 0 === a ? t[s] : a);
        }return r;
      }function oe(t, e, r, n, i, o) {
        var u = i & a,
            l = t.length,
            c = e.length;if (l != c && !(u && c > l)) return !1;var f = o.get(t);if (f && o.get(e)) return f == e;var h = -1,
            d = !0,
            p = i & s ? new Wt() : void 0;for (o.set(t, e), o.set(e, t); ++h < l;) {
          var _ = t[h],
              y = e[h];if (n) var v = u ? n(y, _, h, e, t, o) : n(_, y, h, t, e, o);if (void 0 !== v) {
            if (v) continue;d = !1;break;
          }if (p) {
            if (!it(e, function (t, e) {
              if (!p.has(e) && (_ === t || r(_, t, n, i, o))) return p.add(e);
            })) {
              d = !1;break;
            }
          } else if (_ !== y && !r(_, y, n, i, o)) {
            d = !1;break;
          }
        }return o.delete(t), o.delete(e), d;
      }function se(t, e) {
        var r = t.__data__;return function (t) {
          var e = typeof t;return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
        }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
      }function ae(t, e) {
        var r = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);return te(r) ? r : void 0;
      }Gt.prototype.clear = function () {
        this.__data__ = kt ? kt(null) : {};
      }, Gt.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t];
      }, Gt.prototype.get = function (t) {
        var e = this.__data__;if (kt) {
          var r = e[t];return r === o ? void 0 : r;
        }return _t.call(e, t) ? e[t] : void 0;
      }, Gt.prototype.has = function (t) {
        var e = this.__data__;return kt ? void 0 !== e[t] : _t.call(e, t);
      }, Gt.prototype.set = function (t, e) {
        return this.__data__[t] = kt && void 0 === e ? o : e, this;
      }, zt.prototype.clear = function () {
        this.__data__ = [];
      }, zt.prototype.delete = function (t) {
        var e = this.__data__,
            r = qt(e, t);return !(r < 0 || (r == e.length - 1 ? e.pop() : Rt.call(e, r, 1), 0));
      }, zt.prototype.get = function (t) {
        var e = this.__data__,
            r = qt(e, t);return r < 0 ? void 0 : e[r][1];
      }, zt.prototype.has = function (t) {
        return qt(this.__data__, t) > -1;
      }, zt.prototype.set = function (t, e) {
        var r = this.__data__,
            n = qt(r, t);return n < 0 ? r.push([t, e]) : r[n][1] = e, this;
      }, Vt.prototype.clear = function () {
        this.__data__ = { hash: new Gt(), map: new (Pt || zt)(), string: new Gt() };
      }, Vt.prototype.delete = function (t) {
        return se(this, t).delete(t);
      }, Vt.prototype.get = function (t) {
        return se(this, t).get(t);
      }, Vt.prototype.has = function (t) {
        return se(this, t).has(t);
      }, Vt.prototype.set = function (t, e) {
        return se(this, t).set(t, e), this;
      }, Wt.prototype.add = Wt.prototype.push = function (t) {
        return this.__data__.set(t, o), this;
      }, Wt.prototype.has = function (t) {
        return this.__data__.has(t);
      }, Kt.prototype.clear = function () {
        this.__data__ = new zt();
      }, Kt.prototype.delete = function (t) {
        return this.__data__.delete(t);
      }, Kt.prototype.get = function (t) {
        return this.__data__.get(t);
      }, Kt.prototype.has = function (t) {
        return this.__data__.has(t);
      }, Kt.prototype.set = function (t, e) {
        var r = this.__data__;if (r instanceof zt) {
          var i = r.__data__;if (!Pt || i.length < n - 1) return i.push([t, e]), this;r = this.__data__ = new Vt(i);
        }return r.set(t, e), this;
      };var ue = St ? at(St, Object) : function () {
        return [];
      },
          le = function (t) {
        return yt.call(t);
      };function ce(t, e) {
        return !!(e = null == e ? l : e) && ("number" == typeof t || z.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }function fe(t, e) {
        if (Oe(t)) return !1;var r = typeof t;return !("number" != r && "symbol" != r && "boolean" != r && null != t && !we(t)) || L.test(t) || !C.test(t) || null != e && t in Object(e);
      }function he(t) {
        var e = t && t.constructor;return t === ("function" == typeof e && e.prototype || ft);
      }function de(t) {
        return t == t && !Ae(t);
      }function pe(t, e) {
        return function (r) {
          return null != r && r[t] === e && (void 0 !== e || t in Object(r));
        };
      }(wt && le(new wt(new ArrayBuffer(1))) != A || Pt && le(new Pt()) != v || It && "[object Promise]" != le(It.resolve()) || Nt && le(new Nt()) != O || Tt && le(new Tt()) != R) && (le = function (t) {
        var e = yt.call(t),
            r = e == m ? t.constructor : void 0,
            n = r ? ve(r) : void 0;if (n) switch (n) {case xt:
            return A;case Ut:
            return v;case Ct:
            return "[object Promise]";case Lt:
            return O;case Dt:
            return R;}return e;
      });var _e = ge(function (t) {
        t = function (t) {
          return null == t ? "" : function (t) {
            if ("string" == typeof t) return t;if (we(t)) return Bt ? Bt.call(t) : "";var e = t + "";return "0" == e && 1 / t == -u ? "-0" : e;
          }(t);
        }(t);var e = [];return D.test(t) && e.push(""), t.replace($, function (t, r, n, i) {
          e.push(n ? i.replace(F, "$1") : r || t);
        }), e;
      });function ye(t) {
        if ("string" == typeof t || we(t)) return t;var e = t + "";return "0" == e && 1 / t == -u ? "-0" : e;
      }function ve(t) {
        if (null != t) {
          try {
            return pt.call(t);
          } catch (t) {}try {
            return t + "";
          } catch (t) {}
        }return "";
      }function ge(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(i);var r = function () {
          var n = arguments,
              i = e ? e.apply(this, n) : n[0],
              o = r.cache;if (o.has(i)) return o.get(i);var s = t.apply(this, n);return r.cache = o.set(i, s), s;
        };return r.cache = new (ge.Cache || Vt)(), r;
      }function me(t, e) {
        return t === e || t != t && e != e;
      }function be(t) {
        return function (t) {
          return Me(t) && Ee(t);
        }(t) && _t.call(t, "callee") && (!jt.call(t, "callee") || yt.call(t) == c);
      }ge.Cache = Vt;var Oe = Array.isArray;function Ee(t) {
        return null != t && Se(t.length) && !Re(t);
      }var je = At || function () {
        return !1;
      };function Re(t) {
        var e = Ae(t) ? yt.call(t) : "";return e == _ || e == y;
      }function Se(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= l;
      }function Ae(t) {
        var e = typeof t;return !!t && ("object" == e || "function" == e);
      }function Me(t) {
        return !!t && "object" == typeof t;
      }function we(t) {
        return "symbol" == typeof t || Me(t) && yt.call(t) == j;
      }var Pe = tt ? function (t) {
        return function (e) {
          return t(e);
        };
      }(tt) : function (t) {
        return Me(t) && Se(t.length) && !!V[yt.call(t)];
      };function Ie(t) {
        return Ee(t) ? Jt(t) : function (t) {
          if (!he(t)) return Mt(t);var e = [];for (var r in Object(t)) _t.call(t, r) && "constructor" != r && e.push(r);return e;
        }(t);
      }function Ne(t) {
        return t;
      }r.exports = function (t) {
        return ee("function" == typeof t ? t : Ht(t, !0));
      };
    }).call(this, r(0), r(5)(t));
  }, function (t, e, r) {
    "use strict";
    var n = "Expected a function";var i = Math.max;var o = function (t, e) {
      return e = i(void 0 === e ? t.length - 1 : e, 0), function () {
        for (var r = arguments, n = -1, o = i(r.length - e, 0), s = Array(o); ++n < o;) s[n] = r[e + n];n = -1;for (var a = Array(e + 1); ++n < e;) a[n] = r[n];return a[e] = s, function (t, e, r) {
          switch (r.length) {case 0:
              return t.call(e);case 1:
              return t.call(e, r[0]);case 2:
              return t.call(e, r[0], r[1]);case 3:
              return t.call(e, r[0], r[1], r[2]);}return t.apply(e, r);
        }(t, this, a);
      };
    }(function (t, e) {
      return function (t, e, r) {
        if ("function" != typeof t) throw new TypeError(n);return setTimeout(function () {
          t.apply(void 0, r);
        }, e);
      }(t, 1, e);
    });t.exports = o;
  }, function (t, e, r) {
    "use strict";
    (function (e) {
      var r = 1 / 0,
          n = "[object Symbol]",
          i = /[&<>"'`]/g,
          o = RegExp(i.source),
          s = "object" == typeof e && e && e.Object === Object && e,
          a = "object" == typeof self && self && self.Object === Object && self,
          u = s || a || Function("return this")();var l = function (t) {
        return function (e) {
          return null == t ? void 0 : t[e];
        };
      }({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;" }),
          c = Object.prototype.toString,
          f = u.Symbol,
          h = f ? f.prototype : void 0,
          d = h ? h.toString : void 0;function p(t) {
        if ("string" == typeof t) return t;if (function (t) {
          return "symbol" == typeof t || function (t) {
            return !!t && "object" == typeof t;
          }(t) && c.call(t) == n;
        }(t)) return d ? d.call(t) : "";var e = t + "";return "0" == e && 1 / t == -r ? "-0" : e;
      }t.exports = function (t) {
        return (t = function (t) {
          return null == t ? "" : p(t);
        }(t)) && o.test(t) ? t.replace(i, l) : t;
      };
    }).call(this, r(0));
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = d(r(2)),
        i = d(r(4)),
        o = (d(r(3)), d(r(10))),
        s = d(r(11)),
        a = d(r(22)),
        u = d(r(23)),
        l = r(14),
        c = d(r(17)),
        f = d(r(8)),
        h = d(r(49));function d(t) {
      return t && t.__esModule ? t : { default: t };
    }const p = (t, e) => t.filter(t => Object.keys(e).every(r => t._attributes[r] === e[r])),
          _ = r(21),
          y = { add: !0, remove: !0, merge: !0 },
          v = { add: !0, remove: !1 };e.default = class extends n.default {
      constructor(t, e) {
        super(e), this.length = 0, this.models = [], this._byId = {}, this.schema = null, this.validationMessages = { valid: !0 }, e || (e = {}), this.preinitialize(t, e), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize(t, e), t && this.reset(t, (0, i.default)({ silent: !0 }, e)), this.model || (this.model = new c.default());
      }preinitialize(t, e) {}initialize(t, e) {}toJSON() {
        let t = 0;const e = [],
              r = this.models.length;for (t = 0; t < r; t++) e[t] = this.models[t].toJSON();return e;
      }add(t, e) {
        return this.set(t, (0, i.default)({ merge: !1 }, e, v));
      }remove(t, e) {
        e = (0, i.default)({}, e);const r = Array.isArray(t);t = r ? [t] : t.slice();let n = this._removeModels(t, e);return !e.silent && n.length && (e.changes = { added: [], merged: [], removed: n }, this.trigger("update", this, e)), r ? n[0] : n;
      }set(t, e) {
        if (null === t) return;(e = (0, i.default)({}, y, e)).parse && !this._isModel(t) && (t = this.parse(t, e) || []);let r = !Array.isArray(t);t = r ? [t] : t.slice();let n = e.at;null != n && (n = +n), n > this.length && (n = this.length), n < 0 && (n += this.length + 1);let s,
            l,
            c = [],
            f = [],
            h = [],
            d = [],
            p = {},
            _ = e.add,
            v = e.merge,
            g = e.remove,
            m = !1,
            b = this.comparator && null == n && !1 !== e.sort,
            O = (0, o.default)(this.comparator) ? this.comparator : null;const E = t.length;for (l = 0; l < E; l++) {
          s = t[l];let r = this.get(s);if (r) {
            if (v && s !== r) {
              let t = this._isModel(s) ? s.attributes : s;e.parse && (t = r.parse(t, e)), r.set(t, e), h.push(r), b && !m && (m = r.hasChanged(O));
            }p[r.cid] || (p[r.cid] = !0, c.push(r)), t[l] = r;
          } else _ && (s = t[l] = this._prepareModel(s, e)) && (f.push(s), this._addReference(s, e), p[s.cid] = !0, c.push(s));
        }if (g) {
          for (l = 0; l < this.length; l++) p[(s = this.models[l]).cid] || d.push(s);d.length && this._removeModels(d, e);
        }let j = !1,
            R = !b && _ && g;if (c.length && R ? (j = this.length !== c.length || (0, a.default)(this.models, (t, e) => t !== c[e]), this.models.length = 0, (0, u.default)(this.models, c, 0), this.length = this.models.length) : f.length && (b && (m = !0), (0, u.default)(this.models, f, null == n ? this.length : n), this.length = this.models.length), m && this.sort({ silent: !0 }), !e.silent) {
          for (l = 0; l < f.length; l++) null != n && (e.index = n + l), (s = f[l]).trigger("add", s, this, e);(m || j) && this.trigger("sort", this, e), (f.length || d.length || h.length) && (e.changes = { added: f, removed: d, merged: h }, this.trigger("update", this, e));
        }return r ? t[0] : t;
      }reset(t, e) {
        e = e ? _(e) : {};for (let t = 0; t < this.models.length; t++) this._removeReference(this.models[t], e);return e.previousModels = this.models, this._reset(), t = this.add(t, (0, i.default)({ silent: !0 }, e)), e.silent || this.trigger("reset", this, e), t;
      }push(t, e) {
        return this.add(t, (0, i.default)({ at: this.length }, e));
      }pop(t) {
        const e = this.at(this.length - 1);return this.remove(e, t);
      }unshift(t, e) {
        return this.add(t, (0, i.default)({ at: 0 }, e));
      }shift(t) {
        const e = this.at(0);return this.remove(e, t);
      }slice(...t) {
        return this.models.slice(t);
      }get(t) {
        if (null != t) return this._byId[t] || this._byId[this.modelId(this._isModel(t) ? t.attributes : t)] || t.cid && this._byId[t.cid];
      }has(t) {
        return null !== this.get(t);
      }at(t) {
        return t < 0 && (t += this.length), this.models[t];
      }find(t) {
        const e = p(this.models, t);return e && e.length > 0 ? e[0] : null;
      }filter(t) {
        return p(this.models, t);
      }where(t, e) {
        return e ? this.find(t) : this.filter(t);
      }findWhere(t) {
        return this.where(t, !0);
      }sort(t) {
        let e = this.comparator;if (!e) throw new Error("Cannot sort a set without a comparator");t || (t = {});let r = e.length;return (0, s.default)(e) && (e = e.bind(this)), 1 === r || (0, o.default)(e) ? this.models = this.sortBy(e) : this.models.sort(e), t.silent || this.trigger("sort", this, t), this;
      }pluck(t) {
        let e = 0;const r = [],
              n = this.models.length;for (e = 0; e < n; e++) r[e] = this.models[e].toJSON()[t];return r;
      }fetch(t) {}create(t, e) {
        let r = (e = e ? _(e) : {}).wait;if (!(t = this._prepareModel(t, e))) return !1;r || this.add(t, e);let n = this,
            i = e.success;return e.success = (t, e, o) => {
          r && n.add(t, o), i && i.call(o.context, t, e, o);
        }, t.save(null, e), t;
      }parse(t, e) {
        return t;
      }clone() {
        return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
      }modelId(t) {
        return t && this.model && this.model.idAttribute ? t[this.model.idAttribute || "id"] : "id";
      }values() {
        return new h.default(this, ITERATOR_VALUES);
      }keys() {
        return new h.default(this, ITERATOR_KEYS);
      }entries() {
        return new h.default(this, ITERATOR_KEYSVALUES);
      }supportsValidation() {
        return !(!this.schema || null === this.schema || this.schema === {});
      }isValid() {
        return !this.validationMessages || this.validationMessages.valid;
      }getValidationMessages() {
        return this.validationMessages && this.validationMessages.messages ? this.validationMessages.messages : [];
      }validate() {
        if (this.supportsValidation()) {
          let t = [];this.validationMessages.messages = t, this.validationMessages.valid = !0;const e = this.toJSON(),
                r = e && Array.isArray(e) ? e.length : 0;let n = 0;this._validationFramework || (this._validationFramework = new f.default());const i = this._validationFramework;for (n = 0; n < r; n++) t[n] = i.validate(e[n], this.schema), t[n].valid || (this.validationMessages.valid = !1);
        } else this.validationMessages.valid = !0;return this.validationMessages;
      }sync(t, e, r) {}save(t) {
        this.sync("create", this, t);
      }update(t) {
        this.sync("update", this, t);
      }remove(t) {
        this.sync("delete", this, t);
      }sortByKey(t) {
        if (t) {
          const e = this.toJSON();if (e) {
            const r = (0, l.sortObjects)(e, t);this.reset(r);
          }
        }
      }isEmpty() {
        return 0 === this.length;
      }size() {
        return this.length;
      }toString() {
        let t = {};try {
          t = JSON.stringify(this.toJSON());
        } catch (t) {
          console.error(t);
        }return t;
      }_reset() {
        this.length = 0, this.models = [], this._byId = {};
      }_prepareModel(t, e) {
        if (this._isModel(t)) return t.collection || (t.collection = this), t;(e = e ? _(e) : {}).collection = this;const r = new c.default(t, e);return r.validationError ? (this.trigger("invalid", this, r.validationError, e), !1) : r;
      }_removeModels(t, e) {
        let r = [];for (let n = 0; n < t.length; n++) {
          let i = this.get(t[n]);if (!i) continue;let o = this.indexOf(i);doctor, this.models.splice(o, 1), this.length--, delete this._byId[i.cid];let s = this.modelId(i.attributes);null != s && delete this._byId[s], e.silent || (e.index = o, i.trigger("remove", i, this, e)), r.push(i), this._removeReference(i, e);
        }return r;
      }_isModel(t) {
        return t instanceof c.default;
      }_addReference(t, e) {
        this._byId[t.cid] = t;let r = this.modelId(t.attributes);null != r && (this._byId[r] = t), t.on("all", this._onModelEvent, this);
      }_removeReference(t, e) {
        delete this._byId[t.cid];let r = this.modelId(t.attributes);null != r && delete this._byId[r], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this);
      }_onModelEvent(t, e, r, n) {
        if (e) {
          if (("add" === t || "remove" === t) && r !== this) return;if ("destroy" === t && this.remove(e, n), "change" === t) {
            let t = this.modelId(e.previousAttributes()),
                r = this.modelId(e.attributes);t !== r && (null != t && delete this._byId[t], null != r && (this._byId[r] = e));
          }
        }this.trigger.apply(this, arguments);
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });const n = 1,
          i = 2;e.default = class {
      constructor(t, e) {
        this._collection = t, this._kind = e, this._index = 0;
      }next() {
        if (this._collection) {
          if (this._index < this._collection.length) {
            const t = this._collection.at(this._index);let e;if (this._index++, this._kind === n) e = t;else {
              const r = this._collection.modelId(t.attributes);e = this._kind === i ? r : [r, t];
            }return { value: e, done: !1 };
          }this._collection = void 0;
        }return { value: void 0, done: !0 };
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = class {
      constructor() {
        this._stack = [];
      }empty() {
        return 0 === this._stack.length;
      }peek() {
        return this._stack[0];
      }pop() {
        return this._stack.pop();
      }push(t) {
        this._stack.push(t);
      }search(t) {
        return this._stack.indexOf(t);
      }size() {
        return this._stack.length;
      }clear() {
        this._stack.splice(0, this._stack.length);
      }toArray() {
        return this._stack;
      }toString() {
        return this._stack.toString();
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r(10));class i {
      constructor(t) {
        this._keys = [], this._data = {}, t && this.marshall(t);
      }set(t, e) {
        null !== t && null !== e && (this._data[t] || this._keys.push(t), this._data[t] = e);
      }get(t) {
        return this._data[t];
      }indexOf(t) {
        return this._keys.indexOf(t);
      }remove(t) {
        const e = this.indexOf(t);this._keys.splice(e, 1), delete this._data[t];
      }has(t) {
        return -1 !== this.indexOf(t);
      }forEach(t) {
        if ("function" != typeof t) return null;const e = this._keys.length;let r,
            n = 0;for (n = 0; n < e; n++) t(r = this._keys[n], this._data[r], n);
      }key(t) {
        return this._keys[t];
      }entries() {
        let t = 0;const e = this._keys.length,
              r = new Array(e);for (t = 0; t < e; t++) r[t] = { key: this._keys[t], value: this._data[t] };return r;
      }values() {
        const t = this._keys.length,
              e = new Array(t);let r,
            n = 0;for (n = 0; n < t; n++) r = this._keys[n], e[n] = this._data[r];return e;
      }clear() {
        this._keys = [], this._data = {};
      }size() {
        return this._keys.length;
      }toJSON() {
        return this._data;
      }toString() {
        return JSON.stringify(this._data);
      }isEmpty() {
        return 0 === this._keys.length;
      }marshall(t) {
        let e;if (t && t instanceof i) e = t.toJSON();else if (t && t instanceof Object && Object.keys(t).length > 0) e = t;else {
          if (!t || !(0, n.default)(t)) return !1;try {
            e = JSON.parse(t);
          } catch (t) {
            return !1;
          }
        }const r = Object.keys(e);r.length;return this._keys = r, this._data = e, !0;
      }
    }e.default = i;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = o(r(4)),
        i = o(r(24));function o(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class {
      constructor(t) {
        this._timeout = t || i.default.AsynchronousQueueTimeout, this._queue = {};
      }add(...t) {
        return !!(t && t.length > 0) && ((0, n.default)(this._queue, t), !0);
      }clear() {
        this._queue.length > 0 && this._queue.splice(0, this._queue.length);
      }process(...t) {
        t && (0, n.default)(this._queue, t);const e = this._queue,
              r = Object.keys(e).length;let i = this._timeout;if (r <= 0) return !1;const o = t => {
          if (t >= r || "function" != typeof e[t]) return !1;setTimeout(() => {
            e[t](), o(t + 1);
          }, i);
        };return o(0), !0;
      }get timeout() {
        return this._timeout;
      }get queue() {
        return this._queue;
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = s(r(26)),
        i = s(r(27)),
        o = s(r(28));function s(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class {
      constructor() {}static getLogger(t, e) {
        return t === o.default.CONSOLE ? new n.default(e) : t === o.default.COLOR_CONSOLE ? new i.default(e) : void 0;
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });const n = t => new Promise((e, r) => {
      t.beforeInitialize() ? e(t) : r(new Error("failed before initialize!"));
    }),
          i = t => new Promise((e, r) => {
      t.initialize() ? e(t) : r(new Error("failed initialize!"));
    }),
          o = t => new Promise((e, r) => {
      t.afterInitialize() ? e(t) : r(new Error("failed after initialize!"));
    }),
          s = t => new Promise((e, r) => {
      t._started = !0, t.started ? e(t) : r(new Error("failed setting started!"));
    }),
          a = t => new Promise((e, r) => {
      t.started ? e(t) : r(new Error("failed starting!"));
    }),
          u = "untitled",
          l = {};l.NAME = Symbol("name"), l.DATASTORE = Symbol("datastore");e.default = class {
      constructor(t) {
        t || (t = {}), t.metadata ? this._metadata = t.metadata : this._metadata = {}, t.name ? this._name = t.name : this._name = u, t.datastore ? this._datastore = t.datastore : this._datastore = {}, this._router = null, this._started = !1;
      }get router() {
        return this._router;
      }set router(t) {
        this._router = t;
      }get started() {
        return this._started;
      }initialize() {
        return !0;
      }beforeInitialize() {
        return !0;
      }afterInitialize() {
        return !0;
      }get name() {
        return this.getMetadataItem(l.NAME);
      }set name(t) {
        return this.setMetadataItem(l.NAME, t);
      }get metadata() {
        return this._metadata;
      }setMetadataItem(t, e) {
        this._metadata[t] = e;
      }getMetadataItem(t) {
        return this._metadata[t];
      }registerRouter(t) {
        t && (this._router = t);
      }start() {
        const t = this;return new Promise((e, r) => {
          n(t).then(i).then(o).then(s).then(a).then(t => {
            e(t);
          }).catch(e => {
            t.stop(), r(e);
          });
        });
      }stop() {
        this._started = !1;
      }get datastore() {
        return this.getMetadataItem(l.DATASTORE);
      }set datastore(t) {
        t && this.setMetadataItem(l.DATASTORE, t);
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.BundleObject = { name: "", mode: "both", cache: !0 };class n {
      constructor() {}static getBundle() {
        return {};
      }static getString() {
        return "";
      }
    }e.ResourceBundle = n;e.MessageReader = class {
      constructor() {}static getMessage(t) {
        let e = n.getString(t),
            r = t.length,
            i = t;for (; r > 0 && e == "[" + t + "]";) r = t.lastIndexOf("."), t = t.substring(0, r), e = n.getString(t);return t ? e : "[" + i + "]";
      }
    };e.MessageKeyFormatter = class {
      constructor() {
        this.delimiter = ".";
      }static format(t) {
        let e = "";return t && t.level && (e += t.level, t.kind && (e += this.delimiter + t.kind, t.rule && (e += this.delimiter + t.rule, t.values.title && (e += this.delimiter + t.values.title)))), e || "";
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = s(r(1)),
        i = s(r(29)),
        o = s(r(30));function s(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class {
      constructor() {}static getSecurityClient(t) {
        return t === n.default.OAUTH2 ? new i.default() : t === n.default.ACL ? new o.default() : null;
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = class {
      constructor(t, e) {
        this._permissions = t || [], this._neg = e || !1;
      }isNegative() {
        return this._neg;
      }get permissions() {
        return this._permissions;
      }set permissions(t) {
        this._permissions = t;
      }addPermission(t) {
        this._permissions.push(t);
      }removePermission(t) {
        const e = this._permissions.indexOf(t);this._permissions.splice(e, 1);
      }hasPermission(t) {
        return -1 != this._permissions.indexOf(t);
      }setNegative(t) {
        this.neg = t;
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });!function (t) {
      t && t.__esModule;
    }(r(31));e.default = class {
      constructor(t, e) {
        this._principal = t || (new Principal().login = "guest"), this._permissions = e || [];
      }get principal() {
        return this._principal;
      }get permissions() {
        return this._permissions;
      }set permissions(t) {
        this._permissions = t;
      }addPermission(t) {
        this._permissions.push(t);
      }removePermission(t) {
        const e = this._permissions.indexOf(t);this._permissions.splice(e, 1);
      }hasPermission(t) {
        return -1 !== this._permissions.indexOf(t);
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = (t, e) => null !== t && hasOwnProperty.call(t, e);
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r(7));e.default = (t, e) => {
      const r = (t => (0, n.default)(t) ? Object.create(t) : {})(t);return e && Object.assign(r, e), r;
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r(11));e.default = (t, e) => {
      if (null === t) return;const r = t[e];return (0, n.default)(r) ? r.call(t) : r;
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = (t, e) => -1 !== t.indexOf(e);
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = (t, e, ...r) => {
      const n = t.split("."),
            i = n.pop(),
            o = n.length;let s = 0;for (s = 0; s < o; s++) e = e[n[s]];return e[i].apply(e, r);
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });e.default = t => void 0 !== t;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });const n = e.fibonacci = t => {
      const e = (1 + Math.sqrt(5)) / 2,
            r = Math.pow(e, t) / Math.sqrt(5);return Math.round(r);
    };e.fibonacciSequence = t => {
      const e = [];let r = 0;for (r = 0; r < t; r++) e.push(n(r));return e;
    };
  }]);
});
//# sourceMappingURL=augmented-next.js.map

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var Augmented = _interopRequireWildcard(_augmentedjsNext);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

//const _some = require("lodash.some");

// Cached regex for stripping a leading hash/slash and trailing space.
const ROUTE_STRIPPER = /^[#\/]|\s+$/g;

// Cached regex for stripping leading and trailing slashes.
const ROOT_STRIPPER = /^\/+|\/+$/g;

// Cached regex for stripping urls of hash.
const PATH_STRIPPER = /#.*$/;

/**
 * Handles cross-browser history management, based on either
 * [pushState](http://diveintohtml5.info/history.html) and real URLs, or
 * [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
 * and URL fragments. If the browser supports neither (old IE, natch),
 * falls back to polling.
 * <br/>Inspired By Backbone.js - Thank you! <span>😍</span>
 * @extends Augmented.Object
 */
class History extends Augmented.Object {
  constructor(options) {
    super(options);
    this.handlers = [];
    this.checkUrl = this.checkUrl.bind(this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    this.interval = 50;

    // Has the history handling already been started?
    this.started = false;
  }

  // Are we at the app root?
  atRoot() {
    let path = this.location.pathname.replace(/[^\/]$/, '$&/');
    return path === this.root && !this.getSearch();
  }

  // Does the pathname match the root?
  matchRoot() {
    const path = this.decodeFragment(this.location.pathname);
    const rootPath = path.slice(0, this.root.length - 1) + '/';
    //console.log(`History: matchRoot ${rootPath} and root is ${this.root}`);
    return rootPath === this.root;
  }

  // Unicode characters in `location.pathname` are percent encoded so they're
  // decoded for comparison. `%25` should not be decoded since it may be part
  // of an encoded parameter.
  decodeFragment(fragment) {
    return decodeURI(fragment.replace(/%25/g, '%2525'));
  }

  // In IE6, the hash fragment and search params are incorrect if the
  // fragment contains `?`.
  getSearch() {
    const match = this.location.href.replace(/#.*/, '').match(/\?.+/);
    return match ? match[0] : '';
  }

  // Gets the true hash value. Cannot use location.hash directly due to bug
  // in Firefox where location.hash will always be decoded.
  getHash(window) {
    const match = (window || this).location.href.match(/#(.*)$/);
    return match ? match[1] : '';
  }

  // Get the pathname and search params, without the root.
  getPath() {
    const path = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
    return path.charAt(0) === '/' ? path.slice(1) : path;
  }

  // Get the cross-browser normalized URL fragment from the path or hash.
  getFragment(fragment) {
    if (fragment == null) {
      if (this._usePushState || !this._wantsHashChange) {
        fragment = this.getPath();
      } else {
        fragment = this.getHash();
      }
    }
    return fragment.replace(ROUTE_STRIPPER, '');
  }

  // Start the hash change handling, returning `true` if the current URL matches
  // an existing route, and `false` otherwise.
  start(options) {
    if (this.started) {
      throw new Error('History has already been started');
    }
    this.started = true;

    // Figure out the initial configuration. Do we need an iframe?
    // Is pushState desired ... is it available?
    this.options = Augmented.Utility.extend({ root: '/' }, this.options, options);
    this.root = this.options.root;
    this._wantsHashChange = this.options.hashChange !== false;
    this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
    this._useHashChange = this._wantsHashChange && this._hasHashChange;
    this._wantsPushState = !!this.options.pushState;
    this._hasPushState = !!(this.history && this.history.pushState);
    this._usePushState = this._wantsPushState && this._hasPushState;
    this.fragment = this.getFragment();

    // Normalize root to always include a leading and trailing slash.
    this.root = `/${this.root}/`.replace(ROOT_STRIPPER, '/');

    // Transition from hashChange to pushState or vice versa if both are
    // requested.
    if (this._wantsHashChange && this._wantsPushState) {

      // If we've started off with a route from a `pushState`-enabled
      // browser, but we're currently in a browser that doesn't support it...
      if (!this._hasPushState && !this.atRoot()) {
        const rootPath = this.root.slice(0, -1) || "/";
        this.location.replace(`${rootPath}#${this.getPath()}`);
        // Return immediately as browser will do redirect to new url
        return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
      } else if (this._hasPushState && this.atRoot()) {
        this.navigate(this.getHash(), { replace: true });
      }
    }

    // Proxy an iframe to handle location events if the browser doesn't
    // support the `hashchange` event, HTML5 history, or the user wants
    // `hashChange` but not `pushState`.
    if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
      this.iframe = document.createElement('iframe');
      this.iframe.src = 'javascript:0';
      this.iframe.style.display = 'none';
      this.iframe.tabIndex = -1;
      const body = document.body;
      // Using `appendChild` will throw on IE < 9 if the document is not ready.
      const iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
      iWindow.document.open();
      iWindow.document.close();
      iWindow.location.hash = '#' + this.fragment;
    }

    const poly = (eventName, listener) => {
      return attachEvent('on' + eventName, listener);
    };

    // Add a cross-platform `addEventListener` shim for older browsers.
    const addEventListener = window.addEventListener ? window.addEventListener : poly;

    // Depending on whether we're using pushState or hashes, and whether
    // 'onhashchange' is supported, determine how we check the URL state.
    if (this._usePushState) {
      addEventListener('popstate', this.checkUrl, false);
    } else if (this._useHashChange && !this.iframe) {
      addEventListener('hashchange', this.checkUrl, false);
    } else if (this._wantsHashChange) {
      this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
    }

    if (!this.options.silent) {
      return this.loadUrl();
    }
  }

  // Disable history, perhaps temporarily. Not useful in a real app,
  // but possibly useful for unit testing Routers.
  stop() {
    const poly = (eventName, listener) => {
      return detachEvent('on' + eventName, listener);
    };

    // Add a cross-platform `removeEventListener` shim for older browsers.
    const removeEventListener = window.removeEventListener ? window.removeEventListener : poly;

    // Remove window listeners.
    if (this._usePushState) {
      removeEventListener('popstate', this.checkUrl, false);
    } else if (this._useHashChange && !this.iframe) {
      removeEventListener('hashchange', this.checkUrl, false);
    }

    // Clean up the iframe if necessary.
    if (this.iframe) {
      document.body.removeChild(this.iframe);
      this.iframe = null;
    }

    // Some environments will throw when clearing an undefined interval.
    if (this._checkUrlInterval) {
      clearInterval(this._checkUrlInterval);
    }
    this.started = false;
  }

  // Add a route to be tested when the fragment changes. Routes added later
  // may override previous routes.
  route(route, callback) {
    this.handlers.unshift({ route: route, callback: callback });
  }

  // Checks the current URL to see if it has changed, and if it has,
  // calls `loadUrl`, normalizing across the hidden iframe.
  checkUrl(e) {
    let current = this.getFragment();

    // If the user pressed the back button, the iframe's hash will have
    // changed and we should use that for comparison.
    if (current === this.fragment && this.iframe) {
      current = this.getHash(this.iframe.contentWindow);
    }

    if (current === this.fragment) {
      return false;
    }
    if (this.iframe) this.navigate(current);
    this.loadUrl();
  }

  // Attempt to load the current URL fragment. If a route succeeds with a
  // match, returns `true`. If no defined routes matches the fragment,
  // returns `false`.
  loadUrl(fragment) {
    // If the root doesn't match, no routes can match either.
    if (!this.matchRoot()) {
      return false;
    }
    fragment = this.fragment = this.getFragment(fragment);
    //console.log("loadUrl", fragment);
    //console.log("this.handlers", this.handlers);
    if (this.handlers && Array.isArray(this.handlers)) {
      return this.handlers.some(handler => {
        //console.log("handler", handler);
        if (handler.route.test(fragment)) {
          //console.log("handler.callback", handler.callback);
          //console.log("is func", typeof handler.callback);
          handler.callback(fragment);
          //console.log("test", handler.route.test(fragment));
          return true;
        }
      });
    }
    return null;

    /*return _some(this.handlers, (handler) => {
      if (handler.route.test(fragment)) {
        handler.callback(fragment);
        return true;
      }
    });*/
  }

  // Save a fragment into the hash history, or replace the URL state if the
  // 'replace' option is passed. You are responsible for properly URL-encoding
  // the fragment in advance.
  //
  // The options object can contain `trigger: true` if you wish to have the
  // route callback be fired (not usually desirable), or `replace: true`, if
  // you wish to modify the current URL without adding an entry to the history.
  navigate(fragment, options) {
    if (!this.started) {
      return false;
    }
    if (!options || options === true) {
      options = { trigger: !!options };
    }

    // Normalize the fragment.
    fragment = this.getFragment(fragment || '');

    // Don't include a trailing slash on the root.
    let rootPath = this.root;
    if (fragment === '' || fragment.charAt(0) === '?') {
      rootPath = rootPath.slice(0, -1) || '/';
    }
    const url = rootPath + fragment;

    // Strip the hash and decode for matching.
    fragment = this.decodeFragment(fragment.replace(PATH_STRIPPER, ''));

    if (this.fragment === fragment) {
      return;
    }
    this.fragment = fragment;

    // If pushState is available, we use it to set the fragment as a real URL.
    if (this._usePushState) {
      this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
    } else if (this._wantsHashChange) {
      this._updateHash(this.location, fragment, options.replace);
      if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
        const iWindow = this.iframe.contentWindow;

        // Opening and closing the iframe tricks IE7 and earlier to push a
        // history entry on hash-tag change.  When replace is true, we don't
        // want this.
        if (!options.replace) {
          iWindow.document.open();
          iWindow.document.close();
        }

        this._updateHash(iWindow.location, fragment, options.replace);
      }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
    } else {
      return this.location.assign(url);
    }
    if (options.trigger) {
      return this.loadUrl(fragment);
    }
  }

  // Update the hash location, either replacing the current entry, or adding
  // a new one to the browser history.
  _updateHash(location, fragment, replace) {
    if (replace) {
      const href = location.href.replace(/(javascript:|#).*$/, '');
      location.replace(href + '#' + fragment);
    } else {
      // Some browsers require that `hash` contains a leading #.
      location.hash = '#' + fragment;
    }
  }
};

exports.default = History;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _router = __webpack_require__(/*! ./router.js */ "./src/router.js");

var _router2 = _interopRequireDefault(_router);

var _history = __webpack_require__(/*! ./history.js */ "./src/history.js");

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports.Router = _router2.default;
module.exports.History = _history2.default;

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _augmentedjsNext = __webpack_require__(/*! augmentedjs-next */ "./node_modules/augmentedjs-next/dist/augmented-next.js");

var _augmentedjsNext2 = _interopRequireDefault(_augmentedjsNext);

var _history = __webpack_require__(/*! ./history.js */ "./src/history.js");

var _history2 = _interopRequireDefault(_history);

var _presentationDom = __webpack_require__(/*! presentation-dom */ "presentation-dom");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _map = __webpack_require__(/*! lodash.map */ "lodash.map");
const _isRegExp = __webpack_require__(/*! lodash.isregexp */ "lodash.isregexp");

// Cached regular expressions for matching named param parts and splatted
// parts of route strings.
const optionalParam = /\((.*?)\)/g;
const namedParam = /(\(\?)?:\w+/g;
const splatParam = /\*\w+/g;
const escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

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
class Router extends _augmentedjsNext2.default.Object {
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
    this.history = new _history2.default();
    this._bindRoutes();
    this.initialize(options);
  }

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
  }

  /**
   * @property {Presentation.View} view Read only property to current view
   */
  get view() {
    return this._view;
  }

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
          _presentationDom2.default.removeClass(view.el, "transition-out");
          _presentationDom2.default.addClass(view.el, "transition-in");
          //console.debug("view transition-in");
          if (view.render) {
            view.render();
          }
          if (view.delegateEvents) {
            view.delegateEvents();
          }
          return Promise.resolve(this);
        };
        Promise.all([this.cleanup(), window.setTimeout(renderView, this.transition.in)]);
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
  }

  /**
   * Remove the last view by calling cleanup, then removes
   */
  cleanup() {
    //console.debug(`router cleanup view '${(this._view) ? (this._view.name) : "no view"}'`);
    if (this._view) {
      //console.debug(`router cleanup view '${(this._view.el) ? (this._view.el) : "no el"}'`);
      if (this.transition && this.transition.out && this._view.el) {
        const view = this._view;
        _presentationDom2.default.removeClass(view.el, "transition-in");
        _presentationDom2.default.addClass(view.el, "transition-out");
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
  }

  /**
   * Initialize is an empty function by default. Override it with your own
   * initialization logic.
   */
  initialize(options) {
    return super.initialize(options);
  }

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
    if (_augmentedjsNext2.default.isFunction(name)) {
      callback = name;
      name = '';
    }
    if (!callback) {
      callback = this[name];
    }
    const router = this;

    this.history.route(route, fragment => {
      const args = router._extractParameters(route, fragment);

      if (router.execute(callback, args, name) !== false) {
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        this.history.trigger('route', router, name, args);
      }
    });
    return this;
  }

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
  }

  /**
   * Simple proxy to `history` to save a fragment into the history.
   * @param {string} fragment route fragment
   * @param {object} options any options to pass
   */
  navigate(fragment, options) {
    this.history.navigate(fragment, options);
    return { "routes": this.routes };
  }

  /**
   * Start the history using browser History API
   * @param {object} options any options to pass
   */
  startHistory(options) {
    if (!this.history.started) {
      this.history.start(options);
    }
    return true;
  }

  // Bind all defined routes to `history`. We have to reverse the
  // order of the routes here to support behavior where the most general
  // routes can be defined at the bottom of the route map.
  _bindRoutes() {
    if (!this.routes) {
      return;
    }
    this.routes = _augmentedjsNext2.default.result(this, "routes");
    let route,
        routes = Object.keys(this.routes);
    while ((route = routes.pop()) != null) {
      this.route(route, this.routes[route]);
    }
  }

  // Convert a route string into a regular expression, suitable for matching
  // against the current location hash.
  _routeToRegExp(route) {
    route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, (match, optional) => {
      return optional ? match : '([^/?]+)';
    }).replace(splatParam, '([^?]*?)');
    return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
  }

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
  }
};

exports.default = Router;

/***/ }),

/***/ "lodash.isregexp":
/*!******************************************************************************************************************************!*\
  !*** external {"commonjs":"lodash.isregexp","commonjs2":"lodash.isregexp","amd":"lodash.isregexp","root":"lodash.isregexp"} ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_isregexp__;

/***/ }),

/***/ "lodash.map":
/*!**********************************************************************************************************!*\
  !*** external {"commonjs":"lodash.map","commonjs2":"lodash.map","amd":"lodash.map","root":"lodash.map"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_map__;

/***/ }),

/***/ "presentation-dom":
/*!**********************************************************************************************************************************!*\
  !*** external {"commonjs":"presentation-dom","commonjs2":"presentation-dom","amd":"presentation-dom","root":"presentation-dom"} ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_presentation_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=presentation-router.js.map