(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, (function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 477);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach((function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    }))
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Theme mixin

// Grab the closest ancestor component's `md-theme` attribute OR grab the
// `md-name` attribute from an `<md-theme>` component.
function getAncestorThemeName(component) {
  if (!component) {
    return null;
  }

  var name = component.mdTheme;

  if (!name && component.$options._componentTag === 'md-theme') {
    name = component.mdName;
  }

  return name || getAncestorThemeName(component.$parent);
}

exports.default = {
  props: {
    mdTheme: String
  },
  computed: {
    mdEffectiveTheme: function mdEffectiveTheme() {
      return getAncestorThemeName(this) || this.$material.currentTheme;
    },
    themeClass: function themeClass() {
      return this.$material.prefix + this.mdEffectiveTheme;
    }
  },
  watch: {
    mdTheme: function mdTheme(value) {
      this.$material.useTheme(value);
    }
  },
  beforeMount: function beforeMount() {
    var localTheme = this.mdTheme;

    this.$material.useTheme(localTheme ? localTheme : 'default');
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdToolbar = __webpack_require__(364);

var _mdToolbar2 = _interopRequireDefault(_mdToolbar);

var _mdToolbar3 = __webpack_require__(291);

var _mdToolbar4 = _interopRequireDefault(_mdToolbar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-toolbar', _mdToolbar2.default);

  Vue.material.styles.push(_mdToolbar4.default);
}
module.exports = exports['default'];

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-toolbar',
  mixins: [_mixin2.default]
}; //
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-toolbar {\n  background-color: PRIMARY-COLOR;\n  color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-toolbar .md-input-container.md-input-focused input,\n  .THEME_NAME.md-toolbar .md-input-container.md-input-focused textarea {\n    color: PRIMARY-CONTRAST;\n    text-shadow: 0 0 0 PRIMARY-CONTRAST; }\n  .THEME_NAME.md-toolbar .md-input-container.md-input-focused label,\n  .THEME_NAME.md-toolbar .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n    color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-toolbar .md-input-container:after {\n    background-color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-toolbar .md-input-container input,\n  .THEME_NAME.md-toolbar .md-input-container textarea {\n    color: PRIMARY-CONTRAST;\n    text-shadow: 0 0 0 PRIMARY-CONTRAST; }\n    .THEME_NAME.md-toolbar .md-input-container input::-webkit-input-placeholder,\n    .THEME_NAME.md-toolbar .md-input-container textarea::-webkit-input-placeholder {\n      color: PRIMARY-CONTRAST-0.54; }\n  .THEME_NAME.md-toolbar .md-input-container label,\n  .THEME_NAME.md-toolbar .md-input-container .md-icon:not(.md-icon-delete) {\n    color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-toolbar.md-accent {\n    background-color: ACCENT-COLOR;\n    color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused input,\n    .THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused textarea {\n      color: ACCENT-CONTRAST;\n      text-shadow: 0 0 0 ACCENT-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused label,\n    .THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n      color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-accent .md-input-container:after {\n      background-color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-accent .md-input-container input,\n    .THEME_NAME.md-toolbar.md-accent .md-input-container textarea {\n      color: ACCENT-CONTRAST;\n      text-shadow: 0 0 0 ACCENT-CONTRAST; }\n      .THEME_NAME.md-toolbar.md-accent .md-input-container input::-webkit-input-placeholder,\n      .THEME_NAME.md-toolbar.md-accent .md-input-container textarea::-webkit-input-placeholder {\n        color: ACCENT-CONTRAST-0.54; }\n    .THEME_NAME.md-toolbar.md-accent .md-input-container label,\n    .THEME_NAME.md-toolbar.md-accent .md-input-container .md-icon:not(.md-icon-delete) {\n      color: ACCENT-CONTRAST; }\n  .THEME_NAME.md-toolbar.md-warn {\n    background-color: WARN-COLOR;\n    color: WARN-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused input,\n    .THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused textarea {\n      color: WARN-CONTRAST;\n      text-shadow: 0 0 0 WARN-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused label,\n    .THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n      color: WARN-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-warn .md-input-container:after {\n      background-color: WARN-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-warn .md-input-container input,\n    .THEME_NAME.md-toolbar.md-warn .md-input-container textarea {\n      color: WARN-CONTRAST;\n      text-shadow: 0 0 0 WARN-CONTRAST; }\n      .THEME_NAME.md-toolbar.md-warn .md-input-container input::-webkit-input-placeholder,\n      .THEME_NAME.md-toolbar.md-warn .md-input-container textarea::-webkit-input-placeholder {\n        color: WARN-CONTRAST-0.54; }\n    .THEME_NAME.md-toolbar.md-warn .md-input-container label,\n    .THEME_NAME.md-toolbar.md-warn .md-input-container .md-icon:not(.md-icon-delete) {\n      color: WARN-CONTRAST; }\n  .THEME_NAME.md-toolbar.md-transparent {\n    background-color: transparent;\n    color: BACKGROUND-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused input,\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused textarea {\n      color: BACKGROUND-CONTRAST;\n      text-shadow: 0 0 0 BACKGROUND-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused label,\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n      color: BACKGROUND-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container:after {\n      background-color: BACKGROUND-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container input,\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container textarea {\n      color: BACKGROUND-CONTRAST;\n      text-shadow: 0 0 0 BACKGROUND-CONTRAST; }\n      .THEME_NAME.md-toolbar.md-transparent .md-input-container input::-webkit-input-placeholder,\n      .THEME_NAME.md-toolbar.md-transparent .md-input-container textarea::-webkit-input-placeholder {\n        color: BACKGROUND-CONTRAST-0.54; }\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container label,\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container .md-icon:not(.md-icon-delete) {\n      color: BACKGROUND-CONTRAST; }\n"

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(240)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(402),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Dev\\github\\vm2\\vue-material\\src\\components\\mdToolbar\\mdToolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdToolbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44d8bce4", Component.options)
  } else {
    hotAPI.reload("data-v-44d8bce4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-toolbar",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44d8bce4", module.exports)
  }
}

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(107);


/***/ })

/******/ });
}));