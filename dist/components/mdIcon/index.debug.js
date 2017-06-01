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
/******/ 	return __webpack_require__(__webpack_require__.s = 457);
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

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registeredIcons = {}; //
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-icon',
  props: {
    mdSrc: String,
    mdIconset: {
      type: String,
      default: 'material-icons'
    }
  },
  data: function data() {
    return {
      svgContent: null,
      imageSrc: null
    };
  },
  mixins: [_mixin2.default],
  watch: {
    mdSrc: function mdSrc() {
      this.svgContent = null;
      this.imageSrc = null;
      this.checkSrc();
    }
  },
  methods: {
    isImage: function isImage(mimetype) {
      return mimetype.indexOf('image') >= 0;
    },
    isSVG: function isSVG(mimetype) {
      return mimetype.indexOf('svg') >= 0;
    },
    setSVGContent: function setSVGContent(value) {
      var _this = this;

      this.svgContent = value;

      this.$nextTick((function () {
        _this.$el.children[0].removeAttribute('fill');
      }));
    },
    loadSVG: function loadSVG() {
      if (!registeredIcons[this.mdSrc]) {
        var request = new XMLHttpRequest();
        var self = this;

        request.open('GET', this.mdSrc, true);

        request.onload = function () {
          var mimetype = this.getResponseHeader('content-type');

          if (this.status >= 200 && this.status < 400 && self.isImage(mimetype)) {
            if (self.isSVG(mimetype)) {
              registeredIcons[self.mdSrc] = this.response;
              self.setSVGContent(this.response);
            } else {
              self.loadImage();
            }
          } else {
            console.warn('The file ' + self.mdSrc + ' is not a valid image.');
          }
        };

        request.send();
      } else {
        this.setSVGContent(registeredIcons[this.mdSrc]);
      }
    },
    loadImage: function loadImage() {
      this.imageSrc = this.mdSrc;
    },
    checkSrc: function checkSrc() {
      if (this.mdSrc) {
        if (this.mdSrc.indexOf('.svg') >= 0) {
          this.loadSVG();
        } else {
          this.loadImage();
        }
      }
    }
  },
  mounted: function mounted() {
    this.checkSrc();
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-icon.md-primary {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-icon.md-accent {\n  color: ACCENT-COLOR; }\n\n.THEME_NAME.md-icon.md-warn {\n  color: WARN-COLOR; }\n"

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(233)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(150),
  /* template */
  __webpack_require__(388),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Dev\\github\\vm2\\vue-material\\src\\components\\mdIcon\\mdIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdIcon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2423dfc4", Component.options)
  } else {
    hotAPI.reload("data-v-2423dfc4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.svgContent) ? _c('i', {
    staticClass: "md-icon",
    class: [_vm.themeClass],
    domProps: {
      "innerHTML": _vm._s(_vm.svgContent)
    }
  }) : (_vm.imageSrc) ? _c('md-image', {
    staticClass: "md-icon",
    class: [_vm.themeClass],
    attrs: {
      "md-src": _vm.imageSrc
    }
  }) : _c('i', {
    staticClass: "md-icon",
    class: [_vm.themeClass, _vm.mdIconset],
    attrs: {
      "aria-hidden": !!_vm.mdIconset
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2423dfc4", module.exports)
  }
}

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdIcon = __webpack_require__(321);

var _mdIcon2 = _interopRequireDefault(_mdIcon);

var _mdIcon3 = __webpack_require__(272);

var _mdIcon4 = _interopRequireDefault(_mdIcon3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-icon', _mdIcon2.default);

  Vue.material.styles.push(_mdIcon4.default);
}
module.exports = exports['default'];

/***/ })

/******/ });
}));