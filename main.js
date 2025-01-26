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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    margin: 0;\n    font-family: sans-serif;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 10vh 85vh 5vh;\n}\n\n.header {\n    grid-column: 1/3;\n    background-color: #333;\n    color: #eee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.sidebar {\n    grid-row: 2/3;\n    grid-column: 1/2;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    font-size: x-large;\n    background-color: #ddd;\n    padding: 20px 20px;\n    flex: 1;\n    overflow-y: auto;\n}\n\n.options, .title {\n    all: unset;\n    display: flex;\n    gap: 10px;\n    padding: 10px 0px;\n    margin: 0;\n}\n\n.title {\n    font-weight: bolder;\n    font-size: xx-large;\n}\n\n.container {\n    all: unset;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding: 10px 0px;\n    margin: 0;\n}\n\n.options:hover {\n    cursor: pointer;\n    background-color: #CCCCCC;\n    border-radius: 8px;\n}\n\n.main {\n    grid-row: 2/3;\n    grid-column: 2/3;\n    display: grid;\n    grid-template-columns: 2fr 4fr 2fr;\n    overflow-y: auto;\n}\n\n.menu {\n    grid-column: 2/3;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    padding: 20px 0px;\n}\n\n.task {\n    all: unset;\n    font-size: large;\n    display: flex; \n    gap: 10px;\n    padding: 10px 0px;\n}\n\n.btn.icon {\n    height: 25px;\n}\n\n.footer {\n    grid-column: 1/3; \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    background-color: #333;\n    color: #eee;\n}\n\n.icon {\n    height: 35px;\n}\n\n.inputProject {\n    display: none;\n}\n\n.inputTask {\n    border-radius: 5px;\n    border: 1px solid black;\n    box-shadow: 1px 1px 10px;\n    background-color: aliceblue;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ninput {\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    width: 100%;\n}\n\nfieldset {\n    all: unset;\n    display: flex;\n    justify-content: space-around;\n    gap: 10px;\n}\n\n.add, .cancel, .enterEntry, .cancelEntry {\n    font-size: large;\n    font-weight: bold;\n    padding: 10px;\n    border-radius: 8px;\n    width: 100%;\n    cursor: pointer;\n}\n\n.add, .enterEntry {\n    border: 1px solid #99dd99;\n    background-color: #aaffaa;\n}\n\n.cancel, .cancelEntry {\n    border: 1px solid #eeadad;\n    background-color: #f5b2b2;\n}\n\n.add:hover, .cancel:hover {\n    cursor: pointer;\n}\n\n.keyIcon {\n    height: 30px;\n}\n\n.todoSection {\n    display: none;\n}\n\n.todoList {\n    display: grid;\n    grid-template-columns: 0.5fr 6fr 1.5fr 0.5fr;\n    gap: 5px;\n    text-align: left;\n    font-size: large;\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px 0px;\n    box-shadow: 5px 5px 5px rgb(222, 219, 219);\n}\n\n.todoList input {\n    height: 25px;\n}\n\n.todoList img {\n    cursor: pointer;\n}\n\n.radioButtons {\n    border: solid 1px black;\n    padding: 10px;\n    border-radius: 8px;\n}\n\n.radioButtons legend {\n    text-align: center;\n    font-weight: bold;\n    font-size: larger;\n    padding: 0px 10px;\n}\n\n.radioButtons div {\n    display: flex;\n    gap: 10px;\n    font-size: large;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_list_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/list.svg */ \"./src/images/list.svg\");\n/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/delete.svg */ \"./src/images/delete.svg\");\n\n\n\n\n\n// dom variables\nconst projectButton = document.querySelector(\".project\");\nconst taskButton = document.querySelector(\".task\");\nconst container = document.querySelector(\".container\");\nconst inputProjectSection = document.querySelector(\".inputProject\");\nconst addProjectButton = document.querySelector(\".add\");\nconst cancelProjectButton = document.querySelector(\".cancel\");\nconst projectTitle = document.querySelector(\".projectTitle\");\nconst form = document.querySelector(\"form\");\nconst todoSection = document.querySelector(\".todoSection\");\nconst mainTitle = document.querySelector(\".menu .title\");\nconst inputTaskSection = document.querySelector(\".inputTask\");\nconst todoEntry = document.querySelector(\".todoEntry\");\nconst enterEntry = document.querySelector(\".enterEntry\");\nconst cancelEntry = document.querySelector(\".cancelEntry\");\nconst todoEntryForm = document.querySelector(\".inputTask>form\");\nconst priority = document.querySelectorAll('input[name = \"priority\"]');\nconst date = document.querySelector(\".date\");\nconst inbox = document.querySelector(\".inbox\");\nconst today = document.querySelector(\".today\");\nconst week = document.querySelector(\".week\");\n\n// defining the project\nlet projects;\nlet savedProjects = localStorage.getItem(\"projects\");\nif (savedProjects) {\n    projects = JSON.parse(savedProjects);\n    addProjectToSideBar();\n    displayInbox();\n} else {\n    projects = {};\n}\n\nfunction saveProjectsToLocalStorage() {\n    localStorage.setItem(\"projects\", JSON.stringify(projects));\n}\n\nclass Task{\n    //defining the task object\n    constructor(name, priority, dueDate, checkStatus, parentProject) {\n        this.name = name;\n        this.priority = priority;\n        this.dueDate = dueDate;\n        this.checkStatus = checkStatus;\n        this.parentProject = parentProject;\n    }\n}\n\nfunction addProject(projectName, taskName) {\n    // adding project into the project dictionary\n    if (projectName in projects) {\n        projects[projectName].push(taskName);\n    } else {\n        projects[projectName] = [taskName];\n    } \n    saveProjectsToLocalStorage();\n}\n\nfunction clearDiv(div) {\n    // function to clear all contents in a div\n    while (div.firstChild) {\n        div.removeChild(div.lastChild);\n    }\n}\n\nfunction addProjectToSideBar() {\n    // this will take user input and append it into the sidebar to create new projects\n    clearDiv(container);\n\n    for (let sidebarKeys of (Object.keys(projects))) {\n\n        if (sidebarKeys === \"Inbox\") {\n            continue;\n        }\n\n        // for the button\n        const btn = document.createElement(\"button\");\n        btn.textContent = sidebarKeys;\n        btn.className = \"nav options\";\n        btn.style.fontSize = \"large\"; \n        btn.style.paddingLeft = \"10px\";\n\n        // for the image\n        const img1 = document.createElement(\"img\");\n        img1.className = \"keyIcon\";\n        img1.src = _images_list_svg__WEBPACK_IMPORTED_MODULE_1__;\n        img1.alt = \"list icon\"\n\n        // for the delete icon\n        const img2 = document.createElement(\"img\");\n        img2.className = \"keyIcon\";\n        img2.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;\n        img2.alt = \"close icon\";\n\n        btn.prepend(img1);\n        btn.appendChild(img2);\n\n        btn.style.display = \"grid\";\n        btn.style[\"grid-template-columns\"] = \"1fr 6fr 2fr\";\n\n        container.appendChild(btn);\n\n        btn.addEventListener(\"click\", (event)=> {\n        // project titles. when clicked should display tasks in the main menu.\n            taskButton.style.visibility = \"visible\";\n            let value = projects[btn.textContent];\n\n            if (value) {\n                clearDiv(todoSection);\n                mainTitle.textContent = btn.textContent;\n\n                for (let i = 0; i < value.length; i++) {\n                    addTaskToDOM(value[i]);\n                }               \n            }\n        });\n\n        img2.addEventListener(\"click\", (event)=> {\n            // to remove the project from projects\n                event.stopPropagation();\n                container.removeChild(btn);\n                delete projects[btn.textContent];\n                saveProjectsToLocalStorage();\n\n                if (mainTitle.textContent === \"This Week\") {\n                    displayWeek();\n                } else if (mainTitle.textContent === \"Today\") {\n                    displayToday();\n                } else {\n                    displayInbox();\n                }\n        })\n    }\n}\n\nprojectButton.addEventListener(\"click\", ()=> {\n    // this is for the add project button in the sidebar\n    inputProjectSection.style.display = \"unset\";\n    projectTitle.focus();\n})\n\naddProjectButton.addEventListener(\"click\", (event)=> {\n    // this is for the add button in the hidded div in the sidebar\n    if (projectTitle.value !== \"\") {        \n        projects[projectTitle.value] = [];\n        inputProjectSection.style.display = \"none\";\n        addProjectToSideBar();\n        form.reset();\n    } else {\n        alert(\"Please fill out the form correctly.\")\n    }\n    saveProjectsToLocalStorage();\n    event.preventDefault();\n})\n\ncancelProjectButton.addEventListener(\"click\", ()=> {\n    // this is for the cancel button in the hidded div in the sidebar\n    form.reset();\n    inputProjectSection.style.display = \"none\";\n})\n\ntaskButton.addEventListener(\"click\", ()=> {\n    // this is for the add task button in the main menu\n    inputTaskSection.showModal();\n    todoEntry.focus();\n})\n\nenterEntry.addEventListener(\"click\", (event)=> {\n    // this is for the add button in the hidded div in the main menu\n    if (todoEntry.value !== \"\" && date.value) {\n        let projectName = mainTitle.textContent\n\n        let name = todoEntry.value;\n        let dueDate = date.value;\n        let priorityValue;\n        let checkValue = false;\n        let parentProject = projectName;\n\n        priority.forEach(btn => {\n            if (btn.checked) {\n                priorityValue = btn.value\n            }\n        });\n    \n        let taskName = new Task(name, priorityValue, dueDate, checkValue, parentProject);\n\n        addProject(projectName,taskName); \n        addTaskToDOM(taskName);\n        todoEntryForm.reset();\n        inputTaskSection.close();\n    } else {\n        alert(\"Please fill the form correctly.\");\n    }\n    event.preventDefault();\n})\n\ncancelEntry.addEventListener(\"click\", ()=> {\n    // this is for the cancel button in the hidden div in the main menu\n    todoEntryForm.reset();\n    inputTaskSection.close();\n})\n\n\nfunction addTaskToDOM(task) {\n\n    let divContainer = document.createElement(\"div\");\n\n    let checkbox = document.createElement(\"input\");\n    checkbox.setAttribute(\"type\", \"checkbox\");\n\n    let textDiv = document.createElement(\"div\");\n    textDiv.textContent = task.name;\n\n    let dateDiv = document.createElement(\"div\");\n    dateDiv.textContent = task.dueDate;\n\n    let removeImg = document.createElement(\"img\");\n    removeImg.className = \"keyIcon\";\n    removeImg.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;\n    removeImg.alt = \"remove todo icon\";\n\n    divContainer.appendChild(checkbox);\n    divContainer.appendChild(textDiv);\n    divContainer.appendChild(dateDiv);\n    divContainer.appendChild(removeImg);\n\n    divContainer.className = \"todoList\";\n\n    todoSection.appendChild(divContainer);\n    todoSection.style.display = \"flex\";\n    todoSection.style.flexDirection = \"column\";\n    todoSection.style.gap = \"20px\";\n\n    if (task.priority === \"low\") {\n        divContainer.style.borderLeft = \"5px solid rgb(255, 179, 0)\";\n    } else if (task.priority === \"medium\") {\n        divContainer.style.borderLeft = \"5px solid green\";\n    } else {\n        divContainer.style.borderLeft = \"5px solid red\";\n    }\n\n    if (task.checkStatus === true) {\n        checkbox.checked = true;\n    } else {\n        checkbox.checked = false;\n    }\n\n    checkbox.addEventListener(\"click\", ()=> {\n        task.checkStatus = !task.checkStatus;\n        saveProjectsToLocalStorage();\n    })\n\n\n    removeImg.addEventListener(\"click\", ()=> {\n        todoSection.removeChild(divContainer);\n        let index = projects[task.parentProject].findIndex((x) => x === task.name);\n        projects[task.parentProject].splice(index, 1);\n        saveProjectsToLocalStorage();\n    })\n}\n\ninbox.addEventListener(\"click\", displayInbox); \n    \nfunction displayInbox() {\n    mainTitle.textContent = \"Inbox\";\n    clearDiv(todoSection);\n    taskButton.style.visibility = \"visible\";\n\n    let valueList = Object.values(projects);\n    for (let individualList of valueList) {\n        individualList.forEach(item => {\n            addTaskToDOM(item);\n        })\n    }\n\n    if (projects[\"inbox\"]) {\n        for (let taskItems of projects[\"Inbox\"]) {\n            addTaskToDOM(taskItems);\n        }\n    }   \n}\n\ntoday.addEventListener(\"click\", displayToday);\n    \nfunction displayToday() {\n    let todayDate = new Date().toLocaleDateString(\"en-CA\");\n    mainTitle.textContent = \"Today\";\n    clearDiv(todoSection);\n    taskButton.style.visibility = \"hidden\";\n\n    let valueList = Object.values(projects);\n    for (let individualList of valueList) {\n        individualList.forEach(item => {\n            if (item.dueDate === todayDate) {\n                addTaskToDOM(item);\n            }\n        });\n    }\n}\n\nfunction getWeek() {\n    let today = new Date();\n    let week = [];\n\n    let startOfWeek = new Date(today);\n    startOfWeek.setDate(today.getDate() - today.getDay()); // Set to the start of the week (Sunday)\n\n    // Generate the 7-day week\n    for (let i = 0; i < 7; i++) {\n        let day = new Date(startOfWeek);\n        day.setDate(startOfWeek.getDate() + i); // Add the current day of the week\n        week.push(day.toLocaleDateString(\"en-CA\")); \n    }\n\n    return week;\n}\n\nweek.addEventListener(\"click\",displayWeek);\n\nfunction displayWeek() {\n    mainTitle.textContent = \"This Week\";\n    clearDiv(todoSection);\n    taskButton.style.visibility = \"hidden\";\n\n    let valueList = Object.values(projects);\n    let thisWeek = getWeek();\n\n    for (let individualList of valueList) {\n        individualList.forEach(item => {\n\n            let itemDate = new Date(item.dueDate).toISOString().slice(0,10);\n\n            if (thisWeek.includes(itemDate)) {\n                addTaskToDOM(item);\n            }\n        });\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2ba2572368d3d3ba9f8b.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/delete.svg?");

/***/ }),

/***/ "./src/images/list.svg":
/*!*****************************!*\
  !*** ./src/images/list.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4bfe3d460ccbd8aaeef2.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/list.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;