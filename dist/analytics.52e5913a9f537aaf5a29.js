/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/*!**********************!*\
  !*** ./analytics.js ***!
  \**********************/
eval("function createAnalytics() {\n  var counter = 0;\n  var destroyed = false;\n  console.log('test');\n\n  var listener = function listener() {\n    return counter++;\n  };\n\n  document.addEventListener('click', listener);\n  return {\n    destroy: function destroy() {\n      document.removeEventListener('click', listener);\n      destroyed = true;\n    },\n    getClicks: function getClicks() {\n      if (destroyed) {\n        return 'Analiytics is destroyed. Total clicks = ${counter}';\n      }\n\n      return counter;\n    }\n  };\n}\n\nwindow.analytics = createAnalytics();\n\n//# sourceURL=webpack:///./analytics.js?");
/******/ })()
;