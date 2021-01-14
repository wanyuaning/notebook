/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./build/main.js":
/*!***********************!*\
  !*** ./build/main.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _docs_src_mvvm_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../docs/src/mvvm.es */ \"./docs/src/mvvm.es.js\");\n\r\n\r\n\r\n\r\n\r\nvar mvvm = new _docs_src_mvvm_es__WEBPACK_IMPORTED_MODULE_0__.default({\r\n  el: '#mvvm',\r\n  data: {\r\n    asdf: 'aaaaa111111'\r\n  }\r\n})\r\n\r\n\r\n  \n\n//# sourceURL=webpack://@angg/notebook/./build/main.js?");

/***/ }),

/***/ "./docs/src/mvvm.es.js":
/*!*****************************!*\
  !*** ./docs/src/mvvm.es.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction Mvvm (options) {\r\n  this.$options = options\r\n  var data = this._data = this.$options.data\r\n  // ①通过添加访问器实现数据劫持\r\n  observe(data)\r\n  // ②把vm._data代理到vm\r\n  for (let i in data) {\r\n    Object.defineProperty(this, i, {\r\n      enumerable: true,\r\n      get () { return this._data[i] },\r\n      set (newVal) {\r\n        this._data[i] = newVal\r\n      }\r\n    })\r\n  }\r\n  //③初始化计算属性\r\n  initComputed.call(this)\r\n\r\n  // ④模板编译\r\n  //new Compile(options.el, this)\r\n  this.$init = () => { new Compile(options.el, this) }\r\n  new Compile(options.el, this)\r\n}\r\nfunction initComputed () {\r\n  let vm = this\r\n  let computed = this.$options.computed || {}\r\n  Object.keys(computed).forEach(function (key) {\r\n    Object.defineProperty(vm, key, {\r\n      get: typeof computed[key] === 'function' ? computed[key] : computed[key].get,\r\n      set () {\r\n\r\n      }\r\n    })\r\n  })\r\n}\r\n// ④模板编译\r\nfunction Compile (el, vm) {\r\n  vm.$el = document.querySelector(el)\r\n  let fragment = document.createDocumentFragment()\r\n  let child\r\n  while (child = vm.$el.firstChild) {\r\n    fragment.appendChild(child)\r\n  }\r\n  let reg = /\\{\\{(.*)\\}\\}/ // 暂时不支持{{age}}{{age}}，会得到age}}{{age\r\n  function replace (nodes) {\r\n    Array.from(nodes.childNodes).forEach((node) => {\r\n      let text = node.textContent\r\n      if (node.nodeType === 3 && reg.test(text)) {\r\n        //console.log(RegExp.$1)\r\n        let exp = RegExp.$1\r\n        let arr = exp.split('.')\r\n        let val = vm\r\n        arr.forEach((key) => {\r\n          val = val[key]\r\n        })\r\n        node.textContent = text.replace(reg, val)\r\n        // ⑤单向绑定[M→V]-watcher\r\n        let watcher = new Watcher(vm, exp, function (newVal) {\r\n          node.textContent = text.replace(reg, newVal)\r\n        })\r\n      }\r\n      // ⑥双向绑定\r\n      if (node.nodeType === 1) {\r\n        let nodeAttrs = node.attributes\r\n        Array.from(nodeAttrs).forEach(attr => {\r\n          let name = attr.name\r\n          let exp = attr.value\r\n          if (name.indexOf('v-') == 0) {\r\n            let val = vm\r\n            let arr = exp.split('.')\r\n            arr.forEach(key => {\r\n              val = val[key]\r\n            })\r\n            node.value = val\r\n            // ⑥双向绑定[M→V]\r\n            new Watcher(vm, exp, function (newVal) {\r\n              node.value = newVal\r\n            })\r\n            // ⑥双向绑定[V→M]\r\n            node.addEventListener('input', function (e) {\r\n              let newVal = e.target.value\r\n              var modelTarget = vm\r\n              let arr = exp.split('.')\r\n              let last = arr.length - 1\r\n              arr.forEach((key, index) => {\r\n                if (last === index) {\r\n                  modelTarget[key] = newVal\r\n                } else {\r\n                  modelTarget = modelTarget[key]\r\n                }\r\n              })\r\n\r\n            })\r\n          }\r\n        })\r\n      }\r\n      if (node.childNodes) {\r\n        replace(node)\r\n      }\r\n    })\r\n  }\r\n  replace(fragment)\r\n  vm.$el.appendChild(fragment)\r\n}\r\n\r\nfunction Observe (data) {\r\n\r\n  for (let i in data) {\r\n    let val = data[i]\r\n    // 递归观察成员子值\r\n    observe(val)\r\n    let dep = new Dep()\r\n    Object.defineProperty(data, i, {\r\n      enumerable: true,\r\n      get: function () {\r\n        // ⑤单向绑定[M→V]-订阅\r\n        Dep.target && dep.addSub(Dep.target)\r\n        return val\r\n      },\r\n      set (newVal) {\r\n        if (newVal === val) return\r\n        val = newVal\r\n        // ⑤单向绑定[M→V]-通知\r\n        dep.notify()\r\n      }\r\n    })\r\n  }\r\n}\r\n// ①通过添加访问器实现数据劫持\r\nfunction observe (data) {\r\n  // 递归观察成员子值 无子值则忽略\r\n  if (typeof data !== 'object') return\r\n  return new Observe(data)\r\n\r\n}\r\n\r\n\r\n// 发布订阅模式，用于耦合get订阅 set通知 compile模板watcher\r\nfunction Dep () { this.subs = [] }\r\nDep.prototype.addSub = function (sub) {\r\n  this.subs.push(sub)\r\n}\r\nDep.prototype.notify = function () {\r\n  this.subs.forEach(sub => sub.update())\r\n}\r\n\r\nfunction Watcher (vm, exp, fn) {\r\n  this.fn = fn\r\n  this.vm = vm\r\n  this.exp = exp\r\n  Dep.target = this\r\n  let val = vm\r\n  let arr = exp.split('.')\r\n  arr.forEach(function (key) {\r\n    val = val[key]\r\n  })\r\n  Dep.target = null\r\n}\r\nWatcher.prototype.update = function () {\r\n  let newVal = this.vm\r\n  let arr = this.exp.split('.')\r\n  arr.forEach(key => {\r\n    newVal = newVal[key]\r\n  })\r\n  this.fn(newVal)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mvvm);\n\n//# sourceURL=webpack://@angg/notebook/./docs/src/mvvm.es.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./build/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;