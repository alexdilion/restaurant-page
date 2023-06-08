/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/external-link.svg */ "./src/images/external-link.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --text-color: #ede0d4;
    --accent: #986b54;
    --secondary: #656d4a;
    --dot-offset: 50%;
}

@media screen and (min-width: calc(3rem + 1200px)) {
    .navbar,
    main#content {
        width: 1200px;
    }
}

* {
    box-sizing: border-box;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    margin: 0;
}

body {
    margin: 0;
    color: var(--text-color);
    min-height: 100vh;
    position: relative;
    background-color: black;
}

.page-container {
    display: grid;
    min-height: 100vh;
    grid-template: max-content 1fr max-content / minmax(1.5rem, 1fr) auto minmax(1.5rem, 1fr);
    grid-template-areas:
        "lside navbar rside"
        "lside main-content rside"
        "lside footer rside";
    position: relative;
    z-index: 1;
}

.background-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;

    filter: brightness(30%);
    transition: filter 0.6s ease-in-out;
}

.page-background {
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-size: cover;

    width: 100%;
    height: 100%;
    filter: blur(4px);
    transform: scale(1.1);
}

.navbar {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    grid-area: navbar;
    align-items: center;
}

#content {
    grid-area: main-content;
    width: calc(100vw - 3rem);
    font-size: 1.25rem;
    padding: 0 3rem;
}

.home-container,
.contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.page-header {
    font-size: 3rem;
    text-align: center;
}

.home-container .button-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.tab-button {
    padding: 0.5rem 1rem;
    border: 1px solid transparent;
    border-radius: 1rem;
    color: var(--text-color);
    font-weight: 600;
    font-size: 1.25rem;

    transition: border 0.2s ease-out;
}

.tab-button:hover {
    border: 1px solid var(--text-color);
    cursor: pointer;
}

.home-container p {
    margin: 3rem 0;
}

.menu-container .page-header {
    margin-top: 3rem;
}

ul {
    padding-left: 0;
    list-style: none;
}

.menu-container ul:not(ul:nth-last-of-type(1)) {
    margin-bottom: 2rem;
}

.menu-container ul:nth-last-of-type(1) {
    margin-bottom: 3rem;
}

.menu-container li {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    position: relative;
}

.menu-container li > span {
    border-top: 1px dashed #ede0d4;
    flex-grow: 1;
    position: relative;
    top: 1px;
}

.contact-container p {
    margin: 3rem 0;
}

.contact-list {
    width: max-content;
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.contact-list li {
    width: fit-content;
}

footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
}

footer a::after {
    content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    fill: currentColor;
    position: relative;
    top: 2px;
}

footer a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

footer img {
    height: 32px;
}

.fancy-font {
    font-family: "Pacifico", cursive;
}

.nav-tabs {
    display: flex;
    list-style: none;
    gap: 1em;
    align-items: center;
    padding-left: 0;
}

.logo-text {
    font-size: 2rem;
}

.logo-image {
    height: 48px;
}

.page-tab a {
    font-size: 1.25rem;
    transition: color 0.33s ease-out;
    letter-spacing: 1px;
    font-variant: small-caps;
}

.page-tab a:hover,
.page-tab a:focus-visible {
    color: var(--accent);
}

.nav-tabs li:first-child {
    position: relative;
}

.nav-tabs li:first-child::before {
    content: "";
    height: 6px;
    width: 6px;
    position: absolute;
    background-color: var(--accent);
    border-radius: 999px;
    bottom: -6px;
    left: var(--dot-offset);
    transform: translateX(-50%);
    transition: left 0.33s ease-in-out;
}

a {
    text-decoration: none;
    color: inherit;
}

.accent-text {
    font-family: inherit;
    color: var(--accent);
}

.accent-background {
    background-color: var(--accent);
}

.secondary-background {
    background-color: var(--secondary);
}

.selected-tab {
    color: var(--accent);
}

.fade-out {
    filter: brightness(0%);
}
`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --text-color: #ede0d4;\n    --accent: #986b54;\n    --secondary: #656d4a;\n    --dot-offset: 50%;\n}\n\n@media screen and (min-width: calc(3rem + 1200px)) {\n    .navbar,\n    main#content {\n        width: 1200px;\n    }\n}\n\n* {\n    box-sizing: border-box;\n    font-family: \"Poppins\", Arial, Helvetica, sans-serif;\n    margin: 0;\n}\n\nbody {\n    margin: 0;\n    color: var(--text-color);\n    min-height: 100vh;\n    position: relative;\n    background-color: black;\n}\n\n.page-container {\n    display: grid;\n    min-height: 100vh;\n    grid-template: max-content 1fr max-content / minmax(1.5rem, 1fr) auto minmax(1.5rem, 1fr);\n    grid-template-areas:\n        \"lside navbar rside\"\n        \"lside main-content rside\"\n        \"lside footer rside\";\n    position: relative;\n    z-index: 1;\n}\n\n.background-wrapper {\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100vh;\n    width: 100vw;\n\n    filter: brightness(30%);\n    transition: filter 0.6s ease-in-out;\n}\n\n.page-background {\n    background-repeat: no-repeat;\n    background-position-x: 50%;\n    background-size: cover;\n\n    width: 100%;\n    height: 100%;\n    filter: blur(4px);\n    transform: scale(1.1);\n}\n\n.navbar {\n    margin-top: 1rem;\n    display: flex;\n    justify-content: space-between;\n    grid-area: navbar;\n    align-items: center;\n}\n\n#content {\n    grid-area: main-content;\n    width: calc(100vw - 3rem);\n    font-size: 1.25rem;\n    padding: 0 3rem;\n}\n\n.home-container,\n.contact-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.page-header {\n    font-size: 3rem;\n    text-align: center;\n}\n\n.home-container .button-container {\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n}\n\n.tab-button {\n    padding: 0.5rem 1rem;\n    border: 1px solid transparent;\n    border-radius: 1rem;\n    color: var(--text-color);\n    font-weight: 600;\n    font-size: 1.25rem;\n\n    transition: border 0.2s ease-out;\n}\n\n.tab-button:hover {\n    border: 1px solid var(--text-color);\n    cursor: pointer;\n}\n\n.home-container p {\n    margin: 3rem 0;\n}\n\n.menu-container .page-header {\n    margin-top: 3rem;\n}\n\nul {\n    padding-left: 0;\n    list-style: none;\n}\n\n.menu-container ul:not(ul:nth-last-of-type(1)) {\n    margin-bottom: 2rem;\n}\n\n.menu-container ul:nth-last-of-type(1) {\n    margin-bottom: 3rem;\n}\n\n.menu-container li {\n    display: flex;\n    justify-content: space-between;\n    gap: 1rem;\n    align-items: center;\n    position: relative;\n}\n\n.menu-container li > span {\n    border-top: 1px dashed #ede0d4;\n    flex-grow: 1;\n    position: relative;\n    top: 1px;\n}\n\n.contact-container p {\n    margin: 3rem 0;\n}\n\n.contact-list {\n    width: max-content;\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.contact-list li {\n    width: fit-content;\n}\n\nfooter {\n    grid-area: footer;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    gap: 0.5rem;\n}\n\nfooter a::after {\n    content: url(\"../images/external-link.svg\");\n    fill: currentColor;\n    position: relative;\n    top: 2px;\n}\n\nfooter a {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\nfooter img {\n    height: 32px;\n}\n\n.fancy-font {\n    font-family: \"Pacifico\", cursive;\n}\n\n.nav-tabs {\n    display: flex;\n    list-style: none;\n    gap: 1em;\n    align-items: center;\n    padding-left: 0;\n}\n\n.logo-text {\n    font-size: 2rem;\n}\n\n.logo-image {\n    height: 48px;\n}\n\n.page-tab a {\n    font-size: 1.25rem;\n    transition: color 0.33s ease-out;\n    letter-spacing: 1px;\n    font-variant: small-caps;\n}\n\n.page-tab a:hover,\n.page-tab a:focus-visible {\n    color: var(--accent);\n}\n\n.nav-tabs li:first-child {\n    position: relative;\n}\n\n.nav-tabs li:first-child::before {\n    content: \"\";\n    height: 6px;\n    width: 6px;\n    position: absolute;\n    background-color: var(--accent);\n    border-radius: 999px;\n    bottom: -6px;\n    left: var(--dot-offset);\n    transform: translateX(-50%);\n    transition: left 0.33s ease-in-out;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n.accent-text {\n    font-family: inherit;\n    color: var(--accent);\n}\n\n.accent-background {\n    background-color: var(--accent);\n}\n\n.secondary-background {\n    background-color: var(--secondary);\n}\n\n.selected-tab {\n    color: var(--accent);\n}\n\n.fade-out {\n    filter: brightness(0%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.setAttribute("class", "contact-container")

    const header = document.createElement("h2");
    header.classList.add("page-header");
    header.textContent = "Contact us";
    content.appendChild(header);

    const contactText = document.createElement("p");
    contactText.textContent =
        "We'd love to hear from you! At Coffee Hut, your satisfaction is our top priority. If you have any questions, suggestions, or feedback, please reach out to us through the following channels:";
    content.append(contactText);

    const contactList = document.createElement("ul");
    contactList.classList.add("contact-list");
    
    const emailInfo = document.createElement("li");
    emailInfo.textContent = "Email: feedback@coffeehut.com";
    contactList.appendChild(emailInfo)

    const phoneInfo = document.createElement("li");
    phoneInfo.textContent = "Phone: 012 345 6789";
    contactList.appendChild(phoneInfo)

    const addressInfo = document.createElement("li");
    addressInfo.textContent = "Address: 123, Random Street, Randomville, Randomland";
    contactList.appendChild(addressInfo)

    content.appendChild(contactList)
}


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFooter)
/* harmony export */ });
/* harmony import */ var _images_inverted_github_mark_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/inverted-github-mark.png */ "./src/images/inverted-github-mark.png");


function loadFooter() {
    const footer = document.querySelector("footer");

    const credit = document.createElement("a");
    credit.classList.add("background-credit");
    credit.setAttribute("href", "https://pastebin.com/AWmNbmJE");
    credit.textContent = "Credit for images";
    footer.appendChild(credit);

    const source = document.createElement("a");
    source.setAttribute("href", "https://github.com/alexdilion/restaurant-page");
    source.innerHTML = `<img src="${_images_inverted_github_mark_png__WEBPACK_IMPORTED_MODULE_0__}" alt="GitHub Logo"/>\nSource Code`;
    source.classList.add("repo-link");
    footer.appendChild(source);
}


/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.setAttribute("class", "home-container");

    const header = document.createElement("h2");
    header.classList.add("page-header");
    header.textContent = "Welcome to The Coffee Hut!";
    content.appendChild(header);

    const introduction = document.createElement("p");
    introduction.classList.add("page-text");
    introduction.innerHTML =
        "Step into our cozy café and let the aroma of freshly brewed coffee embrace you. Our friendly team is here to serve you exceptional coffee, crafted with care and passion. Take a moment to unwind, savor the flavors, and create cherished memories in our welcoming space.";
    content.appendChild(introduction);
    
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    content.appendChild(buttonContainer);

    const menuButton = document.createElement("button");
    menuButton.setAttribute("type", "button");
    menuButton.classList.add("tab-button", "secondary-background");
    menuButton.setAttribute("data-tab", "menu");
    menuButton.textContent = "Our Menu";
    buttonContainer.appendChild(menuButton);

    const contactButton = document.createElement("button");
    contactButton.setAttribute("type", "button");
    contactButton.classList.add("tab-button", "accent-background");
    contactButton.setAttribute("data-tab", "contact");
    contactButton.textContent = "Contact Us";
    buttonContainer.appendChild(contactButton);
}


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
const MENU_ITEMS = {
    Beverages: [
        {name: "Espresso", price: "€2.50"},
        {name: "Americano", price: "€3.00"},
        {name: "Cappuccino", price: "€4.50"},
        {name: "Latte", price: "€4.75"},
        {name: "Mocha", price: "€5.25"},
        {name: "Macchiato", price: "€3.75"},
        {name: "Iced Coffee", price: "€3.50"},
        {name: "Cold Brew", price: "€4.50"},
        {name: "Frappé", price: "€5.75"},
        {name: "Hot Chocolate", price: "€4.00"},
    ],
    Teas: [
        {name: "Green Tea", price: "€3.50"},
        {name: "Black Tea", price: "€3.25"},
        {name: "Herbal Tea", price: "€3.75"},
        {name: "Chai Tea Latte", price: "€4.50"},
        {name: "Iced Tea", price: "€3.25"},
        {name: "Matcha Latte", price: "€5.00"},
    ],
    "Specialty Drinks": [
        {name: "Vanilla Bean Latte", price: "€5.50"},
        {name: "Caramel Macchiato", price: "€5.75"},
        {name: "Hazelnut Mocha", price: "€6.00"},
        {name: "Pumpkin Spice Latte (seasonal)", price: "€5.75"},
        {name: "Peppermint Mocha (seasonal)", price: "€6.25"},
    ],
    Pastries: [
        {name: "Croissant", price: "€2.50"},
        {name: "Muffin", price: "€2.75"},
        {name: "Scone", price: "€3.00"},
        {name: "Bagel with Cream Cheese", price: "€3.50"},
        {name: "Cookie", price: "€1.50"},
    ],
};

function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.setAttribute("class", "menu-container")

    const header = document.createElement("h2");
    header.classList.add("page-header");
    header.textContent = "Our Menu";
    content.appendChild(header);

    Object.keys(MENU_ITEMS).forEach((itemType) => {
        const itemsList = document.createElement("ul");
        itemsList.id = `${itemType.toLowerCase().split(" ")[0]}-list`;

        const listHeader = document.createElement("h3");
        listHeader.textContent = itemType;
        listHeader.classList.add("list-header");
        content.appendChild(listHeader);

        MENU_ITEMS[itemType].forEach((item) => {
            const itemElement = document.createElement("li");
            itemElement.innerHTML = `${item.name} <span class="li-separator"></span> ${item.price}`;

            itemsList.appendChild(itemElement);
        });

        content.appendChild(itemsList);
    });
}


/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadNavBar)
/* harmony export */ });
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");


function loadNavBar() {
    const navContainer = document.querySelector(".navbar");

    const logoText = document.createElement("h1");
    logoText.classList.add("logo-text", "fancy-font");
    logoText.innerHTML = 'The <span class="accent-text">Coffee</span> Hut';
    navContainer.appendChild(logoText);

    const logoImage = document.createElement("img");
    logoImage.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    logoImage.classList.add("logo-image");
    logoImage.setAttribute("alt", "The Coffee Hut logo; two coffee beans");
    navContainer.appendChild(logoImage);

    const tabContainer = document.createElement("ul");
    tabContainer.classList.add("nav-tabs");
    navContainer.appendChild(tabContainer);

    const homeTab = document.createElement("li");
    homeTab.innerHTML = '<a href="" data-tab="home" tabindex="0">Home</a>';
    homeTab.classList.add("page-tab", "selected-tab");
    tabContainer.appendChild(homeTab);

    const menuTab = document.createElement("li");
    menuTab.innerHTML = '<a href="" data-tab="menu" tabindex="1">Menu</a>';
    menuTab.classList.add("page-tab");
    tabContainer.appendChild(menuTab);

    const contactTab = document.createElement("li");
    contactTab.innerHTML = '<a href="" data-tab="contact" tabindex="2">Contact</a>';
    contactTab.classList.add("page-tab");
    tabContainer.appendChild(contactTab);
}


/***/ }),

/***/ "./src/modules/backgroundLoad.js":
/*!***************************************!*\
  !*** ./src/modules/backgroundLoad.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ backgroundLoad)
/* harmony export */ });
/* harmony import */ var _images_homeBackground_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/homeBackground.jpg */ "./src/images/homeBackground.jpg");
/* harmony import */ var _images_menuBackground_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/menuBackground.jpg */ "./src/images/menuBackground.jpg");
/* harmony import */ var _images_contactBackground_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/contactBackground.jpg */ "./src/images/contactBackground.jpg");




const PAGE_BACKGROUND = document.querySelector(".page-background");

function backgroundLoad(page) {
    switch (page) {
        case "home":
            PAGE_BACKGROUND.style.backgroundImage = `url(${_images_homeBackground_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
            break;
        case "menu":
            PAGE_BACKGROUND.style.backgroundImage = `url(${_images_menuBackground_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
            break;
        case "contact":
            PAGE_BACKGROUND.style.backgroundImage = `url(${_images_contactBackground_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
            break;
        default:
            break;
    }
}


/***/ }),

/***/ "./src/modules/initialLoad.js":
/*!************************************!*\
  !*** ./src/modules/initialLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/modules/pageLoad.js");
/* harmony import */ var _backgroundLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgroundLoad */ "./src/modules/backgroundLoad.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ "./src/components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");





function initialLoad() {
    (0,_components_navbar__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])("home");
    (0,_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_backgroundLoad__WEBPACK_IMPORTED_MODULE_1__["default"])("home");
}



/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/home */ "./src/components/home.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contact */ "./src/components/contact.js");




function pageLoad(page) {
    if (page === "home") {
        (0,_components_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    } else if (page === "menu") {
        (0,_components_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } else if (page === "contact") {
        (0,_components_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
}


/***/ }),

/***/ "./src/images/contactBackground.jpg":
/*!******************************************!*\
  !*** ./src/images/contactBackground.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67b46ec5c78f807f5732.jpg";

/***/ }),

/***/ "./src/images/external-link.svg":
/*!**************************************!*\
  !*** ./src/images/external-link.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b94e4d29c11259603a18.svg";

/***/ }),

/***/ "./src/images/homeBackground.jpg":
/*!***************************************!*\
  !*** ./src/images/homeBackground.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cce1dfa9d651505bbe49.jpg";

/***/ }),

/***/ "./src/images/inverted-github-mark.png":
/*!*********************************************!*\
  !*** ./src/images/inverted-github-mark.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25c5743b328b8c41b11f.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "017712d5266ae8b06127.png";

/***/ }),

/***/ "./src/images/menuBackground.jpg":
/*!***************************************!*\
  !*** ./src/images/menuBackground.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dae35858358fb61017d.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initialLoad */ "./src/modules/initialLoad.js");
/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageLoad */ "./src/modules/pageLoad.js");
/* harmony import */ var _modules_backgroundLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/backgroundLoad */ "./src/modules/backgroundLoad.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");





let pageTabs = document.querySelectorAll(".page-tab a, .tab-button");
const BACKGROUND_WRAPPER = document.querySelector(".background-wrapper");

let currentTab = "home";

function styleTab(selected) {
    pageTabs.forEach((tab) => {
        const tabParent = tab.parentElement;
        if (tab.getAttribute("data-tab") !== selected) {
            tabParent.classList.remove("selected-tab");
        } else {
            tabParent.classList.add("selected-tab");
        }
    });
}

function setDotOffset() {
    const root = document.querySelector(":root");
    const homeTabPosition = document.querySelector(".page-tab a[data-tab='home']").getBoundingClientRect();
    const currentTabPosition = document.querySelector(`.page-tab a[data-tab="${currentTab}"]`).getBoundingClientRect();

    if (currentTab === "home") {
        root.style.setProperty("--dot-offset", "50%");
        return;
    }

    const offset = currentTabPosition.x + (currentTabPosition.width / 2) - homeTabPosition.x;
    root.style.setProperty("--dot-offset", `${offset}px`);
}

function switchTab(e) {
    if (e.target.nodeName === "A") e.preventDefault();

    const tabElement = e.target;
    const tab = tabElement.getAttribute("data-tab");

    if (currentTab === tab) return;

    BACKGROUND_WRAPPER.classList.add("fade-out");
    styleTab(tab);
    (0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_1__["default"])(tab);

    if (tab === "home") {
        document.querySelectorAll(".tab-button").forEach((button) => {
            button.addEventListener("click", switchTab);
        });
    }

    currentTab = tab;
    setDotOffset();
}

(0,_modules_initialLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
pageTabs = document.querySelectorAll(".page-tab a, .tab-button");

pageTabs.forEach((link) => {
    link.addEventListener("click", switchTab);
});

BACKGROUND_WRAPPER.addEventListener("transitionend", () => {
    (0,_modules_backgroundLoad__WEBPACK_IMPORTED_MODULE_2__["default"])(currentTab);
    BACKGROUND_WRAPPER.classList.remove("fade-out");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsa0lBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixtQ0FBbUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxzRkFBc0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsT0FBTyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUss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O1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDTjtBQUNZO0FBQzNCOztBQUUzQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsV0FBVzs7QUFFMUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsT0FBTztBQUNyRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUksNkRBQVE7O0FBRVo7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnRUFBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsSUFBSSxtRUFBYztBQUNsQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2JhY2tncm91bmRMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZXh0ZXJuYWwtbGluay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXRleHQtY29sb3I6ICNlZGUwZDQ7XG4gICAgLS1hY2NlbnQ6ICM5ODZiNTQ7XG4gICAgLS1zZWNvbmRhcnk6ICM2NTZkNGE7XG4gICAgLS1kb3Qtb2Zmc2V0OiA1MCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGNhbGMoM3JlbSArIDEyMDBweCkpIHtcbiAgICAubmF2YmFyLFxuICAgIG1haW4jY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgfVxufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZ3JpZC10ZW1wbGF0ZTogbWF4LWNvbnRlbnQgMWZyIG1heC1jb250ZW50IC8gbWlubWF4KDEuNXJlbSwgMWZyKSBhdXRvIG1pbm1heCgxLjVyZW0sIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJsc2lkZSBuYXZiYXIgcnNpZGVcIlxuICAgICAgICBcImxzaWRlIG1haW4tY29udGVudCByc2lkZVwiXG4gICAgICAgIFwibHNpZGUgZm9vdGVyIHJzaWRlXCI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5iYWNrZ3JvdW5kLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcblxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygzMCUpO1xuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4ucGFnZS1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmlsdGVyOiBibHVyKDRweCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ubmF2YmFyIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgICBncmlkLWFyZWE6IG1haW4tY29udGVudDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDNyZW0pO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG59XG5cbi5ob21lLWNvbnRhaW5lcixcbi5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lLWNvbnRhaW5lciAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG59XG5cbi50YWItYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcblxuICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGVhc2Utb3V0O1xufVxuXG4udGFiLWJ1dHRvbjpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG9tZS1jb250YWluZXIgcCB7XG4gICAgbWFyZ2luOiAzcmVtIDA7XG59XG5cbi5tZW51LWNvbnRhaW5lciAucGFnZS1oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbnVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLm1lbnUtY29udGFpbmVyIHVsOm5vdCh1bDpudGgtbGFzdC1vZi10eXBlKDEpKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm1lbnUtY29udGFpbmVyIHVsOm50aC1sYXN0LW9mLXR5cGUoMSkge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5tZW51LWNvbnRhaW5lciBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWVudS1jb250YWluZXIgbGkgPiBzcGFuIHtcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNlZGUwZDQ7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDFweDtcbn1cblxuLmNvbnRhY3QtY29udGFpbmVyIHAge1xuICAgIG1hcmdpbjogM3JlbSAwO1xufVxuXG4uY29udGFjdC1saXN0IHtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IC41cmVtO1xufVxuXG4uY29udGFjdC1saXN0IGxpIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbmZvb3RlciB7XG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuZm9vdGVyIGE6OmFmdGVyIHtcbiAgICBjb250ZW50OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDJweDtcbn1cblxuZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuZm9vdGVyIGltZyB7XG4gICAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uZmFuY3ktZm9udCB7XG4gICAgZm9udC1mYW1pbHk6IFwiUGFjaWZpY29cIiwgY3Vyc2l2ZTtcbn1cblxuLm5hdi10YWJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZ2FwOiAxZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5sb2dvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmxvZ28taW1hZ2Uge1xuICAgIGhlaWdodDogNDhweDtcbn1cblxuLnBhZ2UtdGFiIGEge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjMzcyBlYXNlLW91dDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2Fwcztcbn1cblxuLnBhZ2UtdGFiIGE6aG92ZXIsXG4ucGFnZS10YWIgYTpmb2N1cy12aXNpYmxlIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLm5hdi10YWJzIGxpOmZpcnN0LWNoaWxkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXYtdGFicyBsaTpmaXJzdC1jaGlsZDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogNnB4O1xuICAgIHdpZHRoOiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gICAgYm90dG9tOiAtNnB4O1xuICAgIGxlZnQ6IHZhcigtLWRvdC1vZmZzZXQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMzNzIGVhc2UtaW4tb3V0O1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5hY2NlbnQtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG5cbi5hY2NlbnQtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLnNlY29uZGFyeS1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuXG4uc2VsZWN0ZWQtdGFiIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLmZhZGUtb3V0IHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMv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a0I7SUFDbEIsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXRleHQtY29sb3I6ICNlZGUwZDQ7XFxuICAgIC0tYWNjZW50OiAjOTg2YjU0O1xcbiAgICAtLXNlY29uZGFyeTogIzY1NmQ0YTtcXG4gICAgLS1kb3Qtb2Zmc2V0OiA1MCU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGNhbGMoM3JlbSArIDEyMDBweCkpIHtcXG4gICAgLm5hdmJhcixcXG4gICAgbWFpbiNjb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAxMjAwcHg7XFxuICAgIH1cXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnBhZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGU6IG1heC1jb250ZW50IDFmciBtYXgtY29udGVudCAvIG1pbm1heCgxLjVyZW0sIDFmcikgYXV0byBtaW5tYXgoMS41cmVtLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImxzaWRlIG5hdmJhciByc2lkZVxcXCJcXG4gICAgICAgIFxcXCJsc2lkZSBtYWluLWNvbnRlbnQgcnNpZGVcXFwiXFxuICAgICAgICBcXFwibHNpZGUgZm9vdGVyIHJzaWRlXFxcIjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYmFja2dyb3VuZC13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG5cXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDMwJSk7XFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjZzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGFnZS1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1MCU7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZpbHRlcjogYmx1cig0cHgpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogbWFpbi1jb250ZW50O1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDNyZW0pO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG59XFxuXFxuLmhvbWUtY29udGFpbmVyLFxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGFnZS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtY29udGFpbmVyIC5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLnRhYi1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcblxcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLnRhYi1idXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaG9tZS1jb250YWluZXIgcCB7XFxuICAgIG1hcmdpbjogM3JlbSAwO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIgLnBhZ2UtaGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxudWwge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB1bDpub3QodWw6bnRoLWxhc3Qtb2YtdHlwZSgxKSkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIgdWw6bnRoLWxhc3Qtb2YtdHlwZSgxKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciBsaSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciBsaSA+IHNwYW4ge1xcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNlZGUwZDQ7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDFweDtcXG59XFxuXFxuLmNvbnRhY3QtY29udGFpbmVyIHAge1xcbiAgICBtYXJnaW46IDNyZW0gMDtcXG59XFxuXFxuLmNvbnRhY3QtbGlzdCB7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uY29udGFjdC1saXN0IGxpIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbmZvb3RlciBhOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IHVybChcXFwiLi4vaW1hZ2VzL2V4dGVybmFsLWxpbmsuc3ZnXFxcIik7XFxuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDJweDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICAgIGhlaWdodDogMzJweDtcXG59XFxuXFxuLmZhbmN5LWZvbnQge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBhY2lmaWNvXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLm5hdi10YWJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG59XFxuXFxuLmxvZ28tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmxvZ28taW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxufVxcblxcbi5wYWdlLXRhYiBhIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjMzcyBlYXNlLW91dDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbn1cXG5cXG4ucGFnZS10YWIgYTpob3ZlcixcXG4ucGFnZS10YWIgYTpmb2N1cy12aXNpYmxlIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5uYXYtdGFicyBsaTpmaXJzdC1jaGlsZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdi10YWJzIGxpOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiA2cHg7XFxuICAgIHdpZHRoOiA2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJvdHRvbTogLTZweDtcXG4gICAgbGVmdDogdmFyKC0tZG90LW9mZnNldCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjMzcyBlYXNlLWluLW91dDtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5hY2NlbnQtdGV4dCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuLmFjY2VudC1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuLnNlY29uZGFyeS1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuLnNlbGVjdGVkLXRhYiB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4uZmFkZS1vdXQge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWN0LWNvbnRhaW5lclwiKVxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwicGFnZS1oZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgY29udGFjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb250YWN0VGV4dC50ZXh0Q29udGVudCA9XG4gICAgICAgIFwiV2UnZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UhIEF0IENvZmZlZSBIdXQsIHlvdXIgc2F0aXNmYWN0aW9uIGlzIG91ciB0b3AgcHJpb3JpdHkuIElmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMsIHN1Z2dlc3Rpb25zLCBvciBmZWVkYmFjaywgcGxlYXNlIHJlYWNoIG91dCB0byB1cyB0aHJvdWdoIHRoZSBmb2xsb3dpbmcgY2hhbm5lbHM6XCI7XG4gICAgY29udGVudC5hcHBlbmQoY29udGFjdFRleHQpO1xuXG4gICAgY29uc3QgY29udGFjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29udGFjdExpc3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtbGlzdFwiKTtcbiAgICBcbiAgICBjb25zdCBlbWFpbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZW1haWxJbmZvLnRleHRDb250ZW50ID0gXCJFbWFpbDogZmVlZGJhY2tAY29mZmVlaHV0LmNvbVwiO1xuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGVtYWlsSW5mbylcblxuICAgIGNvbnN0IHBob25lSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwaG9uZUluZm8udGV4dENvbnRlbnQgPSBcIlBob25lOiAwMTIgMzQ1IDY3ODlcIjtcbiAgICBjb250YWN0TGlzdC5hcHBlbmRDaGlsZChwaG9uZUluZm8pXG5cbiAgICBjb25zdCBhZGRyZXNzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBhZGRyZXNzSW5mby50ZXh0Q29udGVudCA9IFwiQWRkcmVzczogMTIzLCBSYW5kb20gU3RyZWV0LCBSYW5kb212aWxsZSwgUmFuZG9tbGFuZFwiO1xuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGFkZHJlc3NJbmZvKVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0TGlzdClcbn1cbiIsImltcG9ydCBsb2dvIGZyb20gXCIuLi9pbWFnZXMvaW52ZXJ0ZWQtZ2l0aHViLW1hcmsucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcblxuICAgIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNyZWRpdC5jbGFzc0xpc3QuYWRkKFwiYmFja2dyb3VuZC1jcmVkaXRcIik7XG4gICAgY3JlZGl0LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3Bhc3RlYmluLmNvbS9BV21OYm1KRVwiKTtcbiAgICBjcmVkaXQudGV4dENvbnRlbnQgPSBcIkNyZWRpdCBmb3IgaW1hZ2VzXCI7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdCk7XG5cbiAgICBjb25zdCBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzb3VyY2Uuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbGV4ZGlsaW9uL3Jlc3RhdXJhbnQtcGFnZVwiKTtcbiAgICBzb3VyY2UuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtsb2dvfVwiIGFsdD1cIkdpdEh1YiBMb2dvXCIvPlxcblNvdXJjZSBDb2RlYDtcbiAgICBzb3VyY2UuY2xhc3NMaXN0LmFkZChcInJlcG8tbGlua1wiKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoc291cmNlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob21lLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInBhZ2UtaGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBUaGUgQ29mZmVlIEh1dCFcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBpbnRyb2R1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpbnRyb2R1Y3Rpb24uY2xhc3NMaXN0LmFkZChcInBhZ2UtdGV4dFwiKTtcbiAgICBpbnRyb2R1Y3Rpb24uaW5uZXJIVE1MID1cbiAgICAgICAgXCJTdGVwIGludG8gb3VyIGNvenkgY2Fmw6kgYW5kIGxldCB0aGUgYXJvbWEgb2YgZnJlc2hseSBicmV3ZWQgY29mZmVlIGVtYnJhY2UgeW91LiBPdXIgZnJpZW5kbHkgdGVhbSBpcyBoZXJlIHRvIHNlcnZlIHlvdSBleGNlcHRpb25hbCBjb2ZmZWUsIGNyYWZ0ZWQgd2l0aCBjYXJlIGFuZCBwYXNzaW9uLiBUYWtlIGEgbW9tZW50IHRvIHVud2luZCwgc2F2b3IgdGhlIGZsYXZvcnMsIGFuZCBjcmVhdGUgY2hlcmlzaGVkIG1lbW9yaWVzIGluIG91ciB3ZWxjb21pbmcgc3BhY2UuXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbnRyb2R1Y3Rpb24pO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YWItYnV0dG9uXCIsIFwic2Vjb25kYXJ5LWJhY2tncm91bmRcIik7XG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiLCBcIm1lbnVcIik7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb250YWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFiLWJ1dHRvblwiLCBcImFjY2VudC1iYWNrZ3JvdW5kXCIpO1xuICAgIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIiwgXCJjb250YWN0XCIpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG59XG4iLCJjb25zdCBNRU5VX0lURU1TID0ge1xuICAgIEJldmVyYWdlczogW1xuICAgICAgICB7bmFtZTogXCJFc3ByZXNzb1wiLCBwcmljZTogXCLigqwyLjUwXCJ9LFxuICAgICAgICB7bmFtZTogXCJBbWVyaWNhbm9cIiwgcHJpY2U6IFwi4oKsMy4wMFwifSxcbiAgICAgICAge25hbWU6IFwiQ2FwcHVjY2lub1wiLCBwcmljZTogXCLigqw0LjUwXCJ9LFxuICAgICAgICB7bmFtZTogXCJMYXR0ZVwiLCBwcmljZTogXCLigqw0Ljc1XCJ9LFxuICAgICAgICB7bmFtZTogXCJNb2NoYVwiLCBwcmljZTogXCLigqw1LjI1XCJ9LFxuICAgICAgICB7bmFtZTogXCJNYWNjaGlhdG9cIiwgcHJpY2U6IFwi4oKsMy43NVwifSxcbiAgICAgICAge25hbWU6IFwiSWNlZCBDb2ZmZWVcIiwgcHJpY2U6IFwi4oKsMy41MFwifSxcbiAgICAgICAge25hbWU6IFwiQ29sZCBCcmV3XCIsIHByaWNlOiBcIuKCrDQuNTBcIn0sXG4gICAgICAgIHtuYW1lOiBcIkZyYXBww6lcIiwgcHJpY2U6IFwi4oKsNS43NVwifSxcbiAgICAgICAge25hbWU6IFwiSG90IENob2NvbGF0ZVwiLCBwcmljZTogXCLigqw0LjAwXCJ9LFxuICAgIF0sXG4gICAgVGVhczogW1xuICAgICAgICB7bmFtZTogXCJHcmVlbiBUZWFcIiwgcHJpY2U6IFwi4oKsMy41MFwifSxcbiAgICAgICAge25hbWU6IFwiQmxhY2sgVGVhXCIsIHByaWNlOiBcIuKCrDMuMjVcIn0sXG4gICAgICAgIHtuYW1lOiBcIkhlcmJhbCBUZWFcIiwgcHJpY2U6IFwi4oKsMy43NVwifSxcbiAgICAgICAge25hbWU6IFwiQ2hhaSBUZWEgTGF0dGVcIiwgcHJpY2U6IFwi4oKsNC41MFwifSxcbiAgICAgICAge25hbWU6IFwiSWNlZCBUZWFcIiwgcHJpY2U6IFwi4oKsMy4yNVwifSxcbiAgICAgICAge25hbWU6IFwiTWF0Y2hhIExhdHRlXCIsIHByaWNlOiBcIuKCrDUuMDBcIn0sXG4gICAgXSxcbiAgICBcIlNwZWNpYWx0eSBEcmlua3NcIjogW1xuICAgICAgICB7bmFtZTogXCJWYW5pbGxhIEJlYW4gTGF0dGVcIiwgcHJpY2U6IFwi4oKsNS41MFwifSxcbiAgICAgICAge25hbWU6IFwiQ2FyYW1lbCBNYWNjaGlhdG9cIiwgcHJpY2U6IFwi4oKsNS43NVwifSxcbiAgICAgICAge25hbWU6IFwiSGF6ZWxudXQgTW9jaGFcIiwgcHJpY2U6IFwi4oKsNi4wMFwifSxcbiAgICAgICAge25hbWU6IFwiUHVtcGtpbiBTcGljZSBMYXR0ZSAoc2Vhc29uYWwpXCIsIHByaWNlOiBcIuKCrDUuNzVcIn0sXG4gICAgICAgIHtuYW1lOiBcIlBlcHBlcm1pbnQgTW9jaGEgKHNlYXNvbmFsKVwiLCBwcmljZTogXCLigqw2LjI1XCJ9LFxuICAgIF0sXG4gICAgUGFzdHJpZXM6IFtcbiAgICAgICAge25hbWU6IFwiQ3JvaXNzYW50XCIsIHByaWNlOiBcIuKCrDIuNTBcIn0sXG4gICAgICAgIHtuYW1lOiBcIk11ZmZpblwiLCBwcmljZTogXCLigqwyLjc1XCJ9LFxuICAgICAgICB7bmFtZTogXCJTY29uZVwiLCBwcmljZTogXCLigqwzLjAwXCJ9LFxuICAgICAgICB7bmFtZTogXCJCYWdlbCB3aXRoIENyZWFtIENoZWVzZVwiLCBwcmljZTogXCLigqwzLjUwXCJ9LFxuICAgICAgICB7bmFtZTogXCJDb29raWVcIiwgcHJpY2U6IFwi4oKsMS41MFwifSxcbiAgICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtY29udGFpbmVyXCIpXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwYWdlLWhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk91ciBNZW51XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgT2JqZWN0LmtleXMoTUVOVV9JVEVNUykuZm9yRWFjaCgoaXRlbVR5cGUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBpdGVtc0xpc3QuaWQgPSBgJHtpdGVtVHlwZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKVswXX0tbGlzdGA7XG5cbiAgICAgICAgY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgbGlzdEhlYWRlci50ZXh0Q29udGVudCA9IGl0ZW1UeXBlO1xuICAgICAgICBsaXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWhlYWRlclwiKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChsaXN0SGVhZGVyKTtcblxuICAgICAgICBNRU5VX0lURU1TW2l0ZW1UeXBlXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGl0ZW1FbGVtZW50LmlubmVySFRNTCA9IGAke2l0ZW0ubmFtZX0gPHNwYW4gY2xhc3M9XCJsaS1zZXBhcmF0b3JcIj48L3NwYW4+ICR7aXRlbS5wcmljZX1gO1xuXG4gICAgICAgICAgICBpdGVtc0xpc3QuYXBwZW5kQ2hpbGQoaXRlbUVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW1zTGlzdCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgbG9nbyBmcm9tIFwiLi4vaW1hZ2VzL2xvZ28ucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWROYXZCYXIoKSB7XG4gICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIik7XG5cbiAgICBjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBsb2dvVGV4dC5jbGFzc0xpc3QuYWRkKFwibG9nby10ZXh0XCIsIFwiZmFuY3ktZm9udFwiKTtcbiAgICBsb2dvVGV4dC5pbm5lckhUTUwgPSAnVGhlIDxzcGFuIGNsYXNzPVwiYWNjZW50LXRleHRcIj5Db2ZmZWU8L3NwYW4+IEh1dCc7XG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcblxuICAgIGNvbnN0IGxvZ29JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbG9nb0ltYWdlLnNyYyA9IGxvZ287XG4gICAgbG9nb0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWltYWdlXCIpO1xuICAgIGxvZ29JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJUaGUgQ29mZmVlIEh1dCBsb2dvOyB0d28gY29mZmVlIGJlYW5zXCIpO1xuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuXG4gICAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LXRhYnNcIik7XG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGhvbWVUYWIuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCJcIiBkYXRhLXRhYj1cImhvbWVcIiB0YWJpbmRleD1cIjBcIj5Ib21lPC9hPic7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKFwicGFnZS10YWJcIiwgXCJzZWxlY3RlZC10YWJcIik7XG4gICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuXG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBtZW51VGFiLmlubmVySFRNTCA9ICc8YSBocmVmPVwiXCIgZGF0YS10YWI9XCJtZW51XCIgdGFiaW5kZXg9XCIxXCI+TWVudTwvYT4nO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZChcInBhZ2UtdGFiXCIpO1xuICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGFiKTtcblxuICAgIGNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29udGFjdFRhYi5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIlwiIGRhdGEtdGFiPVwiY29udGFjdFwiIHRhYmluZGV4PVwiMlwiPkNvbnRhY3Q8L2E+JztcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoXCJwYWdlLXRhYlwiKTtcbiAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG59XG4iLCJpbXBvcnQgaG9tZUJhY2tncm91bmQgZnJvbSBcIi4uL2ltYWdlcy9ob21lQmFja2dyb3VuZC5qcGdcIjtcbmltcG9ydCBtZW51QmFja2dyb3VuZCBmcm9tIFwiLi4vaW1hZ2VzL21lbnVCYWNrZ3JvdW5kLmpwZ1wiO1xuaW1wb3J0IGNvbnRhY3RCYWNrZ3JvdW5kIGZyb20gXCIuLi9pbWFnZXMvY29udGFjdEJhY2tncm91bmQuanBnXCI7XG5cbmNvbnN0IFBBR0VfQkFDS0dST1VORCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1iYWNrZ3JvdW5kXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYWNrZ3JvdW5kTG9hZChwYWdlKSB7XG4gICAgc3dpdGNoIChwYWdlKSB7XG4gICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgICBQQUdFX0JBQ0tHUk9VTkQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2hvbWVCYWNrZ3JvdW5kfSlgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgICAgICBQQUdFX0JBQ0tHUk9VTkQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke21lbnVCYWNrZ3JvdW5kfSlgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjb250YWN0XCI6XG4gICAgICAgICAgICBQQUdFX0JBQ0tHUk9VTkQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2NvbnRhY3RCYWNrZ3JvdW5kfSlgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG4iLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vcGFnZUxvYWRcIjtcbmltcG9ydCBiYWNrZ3JvdW5kTG9hZCBmcm9tIFwiLi9iYWNrZ3JvdW5kTG9hZFwiO1xuaW1wb3J0IGxvYWROYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbExvYWQoKSB7XG4gICAgbG9hZE5hdkJhcigpO1xuICAgIHBhZ2VMb2FkKFwiaG9tZVwiKTtcbiAgICBsb2FkRm9vdGVyKCk7XG4gICAgYmFja2dyb3VuZExvYWQoXCJob21lXCIpO1xufVxuXG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250YWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKHBhZ2UpIHtcbiAgICBpZiAocGFnZSA9PT0gXCJob21lXCIpIHtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT09IFwibWVudVwiKSB7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgfSBlbHNlIGlmIChwYWdlID09PSBcImNvbnRhY3RcIikge1xuICAgICAgICBsb2FkQ29udGFjdCgpO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGluaXRpYWxMb2FkIGZyb20gXCIuL21vZHVsZXMvaW5pdGlhbExvYWRcIjtcbmltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9tb2R1bGVzL3BhZ2VMb2FkXCI7XG5pbXBvcnQgYmFja2dyb3VuZExvYWQgZnJvbSBcIi4vbW9kdWxlcy9iYWNrZ3JvdW5kTG9hZFwiO1xuaW1wb3J0IFwiLi9zdHlsZS9zdHlsZS5jc3NcIjtcblxubGV0IHBhZ2VUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlLXRhYiBhLCAudGFiLWJ1dHRvblwiKTtcbmNvbnN0IEJBQ0tHUk9VTkRfV1JBUFBFUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2dyb3VuZC13cmFwcGVyXCIpO1xuXG5sZXQgY3VycmVudFRhYiA9IFwiaG9tZVwiO1xuXG5mdW5jdGlvbiBzdHlsZVRhYihzZWxlY3RlZCkge1xuICAgIHBhZ2VUYWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICBjb25zdCB0YWJQYXJlbnQgPSB0YWIucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKHRhYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiKSAhPT0gc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRhYlBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtdGFiXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFiUGFyZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC10YWJcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0RG90T2Zmc2V0KCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOnJvb3RcIik7XG4gICAgY29uc3QgaG9tZVRhYlBvc2l0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLXRhYiBhW2RhdGEtdGFiPSdob21lJ11cIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgY3VycmVudFRhYlBvc2l0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBhZ2UtdGFiIGFbZGF0YS10YWI9XCIke2N1cnJlbnRUYWJ9XCJdYCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAoY3VycmVudFRhYiA9PT0gXCJob21lXCIpIHtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZG90LW9mZnNldFwiLCBcIjUwJVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldCA9IGN1cnJlbnRUYWJQb3NpdGlvbi54ICsgKGN1cnJlbnRUYWJQb3NpdGlvbi53aWR0aCAvIDIpIC0gaG9tZVRhYlBvc2l0aW9uLng7XG4gICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZG90LW9mZnNldFwiLCBgJHtvZmZzZXR9cHhgKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVGFiKGUpIHtcbiAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09IFwiQVwiKSBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0YWJFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgdGFiID0gdGFiRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiKTtcblxuICAgIGlmIChjdXJyZW50VGFiID09PSB0YWIpIHJldHVybjtcblxuICAgIEJBQ0tHUk9VTkRfV1JBUFBFUi5jbGFzc0xpc3QuYWRkKFwiZmFkZS1vdXRcIik7XG4gICAgc3R5bGVUYWIodGFiKTtcbiAgICBwYWdlTG9hZCh0YWIpO1xuXG4gICAgaWYgKHRhYiA9PT0gXCJob21lXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWItYnV0dG9uXCIpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hUYWIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjdXJyZW50VGFiID0gdGFiO1xuICAgIHNldERvdE9mZnNldCgpO1xufVxuXG5pbml0aWFsTG9hZCgpO1xucGFnZVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhZ2UtdGFiIGEsIC50YWItYnV0dG9uXCIpO1xuXG5wYWdlVGFicy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoVGFiKTtcbn0pO1xuXG5CQUNLR1JPVU5EX1dSQVBQRVIuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgKCkgPT4ge1xuICAgIGJhY2tncm91bmRMb2FkKGN1cnJlbnRUYWIpO1xuICAgIEJBQ0tHUk9VTkRfV1JBUFBFUi5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZS1vdXRcIik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==