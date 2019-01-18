// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zhengjiangrong/Desktop/weexplusdemo/src/native/demo/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-43662a3b"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = {
  "btn": {
    "width": "200",
    "height": "100",
    "backgroundColor": "#0088fb",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "10",
    "marginTop": "200",
    "backgroundColor:active": "#5ac3ff"
  },
  "btn-text": {
    "color": "#ffffff",
    "textAlign": "center",
    "color:active": "#ffffff"
  }
}

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  props: {},
  data: function data() {
    return {
      xx: 'xxx',
      show: false
    };
  },

  methods: {
    goto: function goto() {
      //        this.show=!this.show
      this.push('nav.js');
      //        this.$router.push('./demo/component/drawer.js',{})
      //        let nav=weex.requireModule('navigator')
      //        nav.pushFull('nav.js',()=>{
      //          alert('sss')
      //        })
    },
    onLoad: function onLoad() {
      //           let navbar=weex.requireModule('navbar')
      //           navbar.setStatusBarStyle('balck')
    }
  },
  created: function created() {},
  mounted: function mounted() {
    debugger;
  },
  activated: function activated() {}
};

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      alignItems: "center",
      backgroundColor: "#ffffff"
    }
  }, [_vm._m(0), _c('text', {
    staticStyle: {
      fontSize: "66px",
      fontWeight: "bold",
      marginTop: "30px"
    }
  }, [_vm._v("欢迎使用 weexplus!")]), _c('input', {
    staticStyle: {
      width: "100px",
      height: "100px",
      borderColor: "#0088fb",
      borderWidth: "1px"
    }
  }), _c('div', {
    staticClass: ["btn"],
    on: {
      "click": function($event) {
        _vm.goto()
      }
    }
  }, [_c('text', {
    staticClass: ["btn-text"]
  }, [_vm._v("开始教程")])]), _c('drawerlayout', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticStyle: {
      width: "100px",
      height: "100px"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      marginTop: "300px"
    }
  }, [_c('image', {
    staticStyle: {
      width: "150px",
      height: "150px"
    },
    attrs: {
      "src": "root:img/logo.png"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });