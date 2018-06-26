(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vcPortal", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vcPortal"] = factory(require("vue"));
	else
		root["vcPortal"] = factory(root["Vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
    portal-vue
    Version: 1.3.0
    Licence: MIT
    (c) Thorsten Lünborg
  */
  
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(1)) :
	undefined;
}(this, (function (Vue) { 'use strict';

Vue = Vue && 'default' in Vue ? Vue['default'] : Vue;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function extractAttributes(el) {
  var map = el.hasAttributes() ? el.attributes : [];
  var attrs = {};
  for (var i = 0; i < map.length; i++) {
    var attr = map[i];
    if (attr.value) {
      attrs[attr.name] = attr.value === '' ? true : attr.value;
    }
  }
  var klass = void 0,
      style = void 0;
  if (attrs.class) {
    klass = attrs.class;
    delete attrs.class;
  }
  if (attrs.style) {
    style = attrs.style;
    delete attrs.style;
  }
  var data = {
    attrs: attrs,
    class: klass,
    style: style
  };
  return data;
}

function freeze(item) {
  if (Array.isArray(item) || (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
    return Object.freeze(item);
  }
  return item;
}

function combinePassengers(transports) {
  var slotProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return transports.reduce(function (passengers, transport) {
    var newPassengers = transport.passengers[0];
    newPassengers = typeof newPassengers === 'function' ? newPassengers(slotProps) : transport.passengers;
    return passengers.concat(newPassengers);
  }, []);
}

var transports = {};

var Wormhole = Vue.extend({
  data: function data() {
    return { transports: transports };
  },
  methods: {
    open: function open(transport) {
      var to = transport.to,
          from = transport.from,
          passengers = transport.passengers;

      if (!to || !from || !passengers) return;

      transport.passengers = freeze(passengers);
      var keys = Object.keys(this.transports);
      if (keys.indexOf(to) === -1) {
        Vue.set(this.transports, to, []);
      }

      var currentIndex = this.getTransportIndex(transport);
      // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
      var newTransports = this.transports[to].slice(0);
      if (currentIndex === -1) {
        newTransports.push(transport);
      } else {
        newTransports[currentIndex] = transport;
      }
      newTransports.sort(function (a, b) {
        return a.order - b.order;
      });

      this.transports[to] = newTransports;
    },
    close: function close(transport) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var to = transport.to,
          from = transport.from;

      if (!to || !from) return;
      if (!this.transports[to]) {
        return;
      }

      if (force) {
        this.transports[to] = [];
      } else {
        var index = this.getTransportIndex(transport);
        if (index >= 0) {
          // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
          var newTransports = this.transports[to].slice(0);
          newTransports.splice(index, 1);
          this.transports[to] = newTransports;
        }
      }
    },
    hasTarget: function hasTarget(to) {
      return this.transports.hasOwnProperty(to);
    },
    hasContentFor: function hasContentFor(to) {
      if (!this.transports[to]) {
        return false;
      }
      return this.getContentFor(to).length > 0;
    },
    getSourceFor: function getSourceFor(to) {
      return this.transports[to] && this.transports[to][0].from;
    },
    getContentFor: function getContentFor(to) {
      var transports = this.transports[to];
      if (!transports) {
        return undefined;
      }
      return combinePassengers(transports);
    },
    getTransportIndex: function getTransportIndex(_ref) {
      var to = _ref.to,
          from = _ref.from;

      for (var i in this.transports[to]) {
        if (this.transports[to][i].from === from) {
          return i;
        }
      }
      return -1;
    }
  }
});

var wormhole = new Wormhole(transports);

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/;

var babelHelperVueJsxMergeProps = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp;
    for (key in b) {
      aa = a[key];
      bb = b[key];
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa;
            a[key] = aa = {};
            aa[temp] = true;
          }
          if (typeof bb === 'string') {
            temp = bb;
            b[key] = bb = {};
            bb[temp] = true;
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey]);
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb);
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb);
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey];
          }
        }
      } else {
        a[key] = b[key];
      }
    }
    return a
  }, {})
};

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments);
    b && b.apply(this, arguments);
  }
}

// import { transports } from './wormhole'
var Target = {
  abstract: false,
  name: 'portalTarget',
  props: {
    attributes: { type: Object, default: function _default() {
        return {};
      } },
    multiple: { type: Boolean, default: false },
    name: { type: String, required: true },
    slim: { type: Boolean, default: false },
    slotProps: { type: Object, default: function _default() {
        return {};
      } },
    tag: { type: String, default: 'div' },
    transition: { type: [Boolean, String, Object], default: false },
    transitionEvents: { type: Object, default: function _default() {
        return {};
      } }
  },
  data: function data() {
    return {
      transports: wormhole.transports,
      firstRender: true
    };
  },
  created: function created() {
    if (!this.transports[this.name]) {
      this.$set(this.transports, this.name, []);
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.unwatch = this.$watch('ownTransports', this.emitChange);
    this.$nextTick(function () {
      if (_this.transition) {
        // only when we have a transition, because it causes a re-render
        _this.firstRender = false;
      }
    });
    if (this.$options.abstract) {
      this.$options.abstract = false;
    }
  },
  updated: function updated() {
    if (this.$options.abstract) {
      this.$options.abstract = false;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.unwatch();
    this.$el.innerHTML = '';
  },


  methods: {
    emitChange: function emitChange(newTransports, oldTransports) {
      if (this.multiple) {
        this.$emit('change', [].concat(toConsumableArray(newTransports)), [].concat(toConsumableArray(oldTransports)));
      } else {
        var newTransport = newTransports.length === 0 ? undefined : newTransports[0];
        var oldTransport = oldTransports.length === 0 ? undefined : oldTransports[0];
        this.$emit('change', _extends({}, newTransport), _extends({}, oldTransport));
      }
    }
  },
  computed: {
    ownTransports: function ownTransports() {
      var transports$$1 = this.transports[this.name] || [];
      if (this.multiple) {
        return transports$$1;
      }
      return transports$$1.length === 0 ? [] : [transports$$1[transports$$1.length - 1]];
    },
    passengers: function passengers() {
      return combinePassengers(this.ownTransports, this.slotProps);
    },
    children: function children() {
      return this.passengers.length !== 0 ? this.passengers : this.$slots.default || [];
    },
    hasAttributes: function hasAttributes() {
      return Object.keys(this.attributes).length > 0;
    },
    noWrapper: function noWrapper() {
      var noWrapper = !this.hasAttributes && this.slim;
      if (noWrapper && this.children.length > 1) {
        console.warn('[portal-vue]: PortalTarget with `slim` option received more than one child element.');
      }
      return noWrapper;
    },
    withTransition: function withTransition() {
      return !!this.transition;
    },
    transitionData: function transitionData() {
      var t = this.transition;
      var data = {};

      // During first render, we render a dumb transition without any classes, events and a fake name
      // We have to do this to emulate the normal behaviour of transitions without `appear`
      // because in Portals, transitions can behave as if appear was defined under certain conditions.
      if (this.firstRender && _typeof(this.transition) === 'object' && !this.transition.appear) {
        data.props = { name: '__notranstition__portal-vue__' };
        return data;
      }

      if (typeof t === 'string') {
        data.props = { name: t };
      } else if ((typeof t === 'undefined' ? 'undefined' : _typeof(t)) === 'object') {
        data.props = t;
      }
      if (this.renderSlim) {
        data.props.tag = this.tag;
      }
      data.on = this.transitionEvents;

      return data;
    }
  },

  render: function render(h) {
    this.$options.abstract = true;
    var TransitionType = this.noWrapper ? 'transition' : 'transition-group';
    var Tag = this.tag;

    if (this.withTransition) {
      return h(
        TransitionType,
        babelHelperVueJsxMergeProps([this.transitionData, { 'class': 'vue-portal-target' }]),
        [this.children]
      );
    }

    // Solves a bug where Vue would sometimes duplicate elements upon changing multiple or disabled
    var wrapperKey = this.ownTransports.length;

    return this.noWrapper ? this.children[0] : h(
      Tag,
      babelHelperVueJsxMergeProps([{ 'class': 'vue-portal-target' }, this.attributes, { key: wrapperKey }]),
      [this.children]
    );
  }
};

var inBrowser = typeof window !== 'undefined';

var pid = 1;

var Portal = {
  abstract: false,
  name: 'portal',
  props: {
    /* global HTMLElement */
    disabled: { type: Boolean, default: false },
    name: { type: String, default: function _default() {
        return String(pid++);
      } },
    order: { type: Number, default: 0 },
    slim: { type: Boolean, default: false },
    slotProps: { type: Object, default: function _default() {
        return {};
      } },
    tag: { type: [String], default: 'DIV' },
    targetEl: { type: inBrowser ? [String, HTMLElement] : String },
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    }
  },

  mounted: function mounted() {
    if (this.targetEl) {
      this.mountToTarget();
    }
    if (!this.disabled) {
      this.sendUpdate();
    }
    // Reset hack to make child components skip the portal when defining their $parent
    // was set to true during render when we render something locally.
    if (this.$options.abstract) {
      this.$options.abstract = false;
    }
  },
  updated: function updated() {
    if (this.disabled) {
      this.clear();
    } else {
      this.sendUpdate();
    }
    // Reset hack to make child components skip the portal when defining their $parent
    // was set to true during render when we render something locally.
    if (this.$options.abstract) {
      this.$options.abstract = false;
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clear();
    if (this.mountedComp) {
      this.mountedComp.$destroy();
    }
  },

  watch: {
    to: function to(newValue, oldValue) {
      oldValue && this.clear(oldValue);
      this.sendUpdate();
    },
    targetEl: function targetEl(newValue, oldValue) {
      if (newValue) {
        this.mountToTarget();
      }
    }
  },

  methods: {
    normalizedSlots: function normalizedSlots() {
      return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
    },
    sendUpdate: function sendUpdate() {
      var slotContent = this.normalizedSlots();
      if (slotContent) {
        wormhole.open({
          from: this.name,
          to: this.to,
          passengers: [].concat(toConsumableArray(slotContent)),
          order: this.order
        });
      } else {
        this.clear();
      }
    },
    clear: function clear(target) {
      wormhole.close({
        from: this.name,
        to: target || this.to
      });
    },
    mountToTarget: function mountToTarget() {
      var el = void 0;
      var target = this.targetEl;

      if (typeof target === 'string') {
        el = document.querySelector(target);
      } else if (target instanceof HTMLElement) {
        el = target;
      } else {
        console.warn('[vue-portal]: value of targetEl must be of type String or HTMLElement');
        return;
      }

      if (el) {
        var newTarget = new Vue(_extends({}, Target, {
          parent: this,
          propsData: {
            name: this.to,
            tag: el.tagName,
            attributes: extractAttributes(el)
          }
        }));
        newTarget.$mount(el);
        this.mountedComp = newTarget;
      } else {
        console.warn('[vue-portal]: The specified targetEl ' + target + ' was not found');
      }
    },
    normalizeChildren: function normalizeChildren(children) {
      return typeof children === 'function' ? children(this.slotProps) : children;
    }
  },

  render: function render(h) {
    var children = this.$slots.default || this.$scopedSlots.default || [];
    var Tag = this.tag;
    if (children.length && this.disabled) {
      // hack to make child components skip the portal when defining their $parent
      this.$options.abstract = true;
      return children.length <= 1 && this.slim ? children[0] : h(
        Tag,
        null,
        [this.normalizeChildren(children)]
      );
    } else {
      return h(
        Tag,
        {
          'class': 'v-portal',
          style: 'display: none',
          key: 'v-portal-placeholder'
        },
        []
      );
      // h(this.tag, { class: { 'v-portal': true }, style: { display: 'none' }, key: 'v-portal-placeholder' })
    }
  }
};

function install(Vue$$1) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Vue$$1.component(opts.portalName || 'portal', Portal);
  Vue$$1.component(opts.portalTargetName || 'portalTarget', Target);
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install: install });
}

var index = {
  install: install,
  Portal: Portal,
  PortalTarget: Target,
  Wormhole: wormhole
};

return index;

})));
//# sourceMappingURL=portal-vue.js.map


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(0);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(0),
    getRawTag = __webpack_require__(5),
    objectToString = __webpack_require__(4);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(6),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(11);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(0),
    arrayMap = __webpack_require__(9),
    isArray = __webpack_require__(8),
    isSymbol = __webpack_require__(7);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(13);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(14);

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uniqueId2 = _interopRequireDefault(__webpack_require__(15));

var _portalVue = __webpack_require__(2);

var _vue = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  name: 'VcPortal',
  props: {
    getContainer: {
      type: Function,
      required: true
    },
    didUpdate: Function,
    targetClass: [String, Object, Array]
  },
  data: function data() {
    return {
      name: (0, _uniqueId2.default)('portal')
    };
  },
  mounted: function mounted() {
    this.createContainer();
  },
  updated: function updated() {
    if (this.didUpdate) {
      this.didUpdate();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeContainer();
  },
  methods: {
    createContainer: function createContainer() {
      var targetClass = this.targetClass,
          name = this.name;
      var el = document.createElement('div');
      this._container = this.getContainer();

      this._container.appendChild(el);

      this._target = new _vue.default(_objectSpread({
        el: el
      }, _portalVue.PortalTarget, {
        class: 'test',
        propsData: {
          name: name,
          attributes: {
            class: targetClass
          }
        }
      }));
      this.$forceUpdate();
    },
    removeContainer: function removeContainer() {
      if (this._target) {
        this._target.$el.remove();
      }
    }
  },
  render: function render() {
    var h = arguments[0];

    if (this._container) {
      var name = this.name;
      return h(_portalVue.Portal, {
        attrs: {
          to: name
        }
      }, [this.$slots.default]);
    }

    return null;
  }
};
exports.default = _default;

/***/ })
/******/ ]);
});