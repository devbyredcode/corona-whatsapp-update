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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n$(document).ready(function () {\n  // Fetch Corona Data\n  getCoronaData(); // Window Width\n\n  $(window).width() <= 768 ? $('.site-wrapper').removeClass('overflow-h') : $('.site-wrapper').addClass('overflow-h'); // Button Submit Validation\n\n  $('.input-submit-user').each(function () {\n    $(this).on(\"keyup\", function () {\n      if (validateButtonSubmit()) {\n        $('#submitUserData').removeClass('btn--disabled');\n        $('#submitUserData').removeAttr('disabled');\n      } else {\n        $('#submitUserData').addClass('btn--disabled');\n        $('#submitUserData').attr('disabled', true);\n      }\n    });\n  });\n}); // Input Number Validation\n\n$('.input-number').keydown(function (e) {\n  var key = e.charCode || e.keyCode || 0;\n  return key == 8 || key == 9 || key == 13 || key == 46 || key == 110 || key == 190 || key >= 35 && key <= 40 || key >= 48 && key <= 57 || key >= 96 && key <= 105;\n});\n$('#submitUserData').click(function () {\n  var userPhone = $('#inputUserNumber').val();\n  var userName = $('#inputUserName').val();\n  submitUserData($(this), userPhone, userName);\n});\n\nfunction validateButtonSubmit() {\n  var validateStatus = [];\n  $('.input-submit-user').each(function () {\n    if ($(this).hasClass('input-number')) {\n      if ($(this).val() == \"\" || $(this).val() == null) {\n        validateStatus.push(0);\n      } else {\n        if ($(this).val().length <= 10) {\n          validateStatus.push(0);\n        } else {\n          validateStatus.push(1);\n        }\n      }\n    } else {\n      $(this).val() == \"\" || $(this).val() == null ? validateStatus.push(0) : validateStatus.push(1);\n    }\n  });\n  return validateStatus.includes(0) ? false : true;\n}\n\nfunction getCoronaData() {\n  $.ajax({\n    type: 'GET',\n    url: 'https://indonesia-covid-19.mathdro.id/api',\n    success: function success(res) {\n      // console.log(res);\n      $('#totalCase').html(res.jumlahKasus);\n      $('#totalTreatedCase').html(res.perawatan);\n      $('#totalDeathCase').html(res.meninggal);\n      $('#totalHealthCase').html(res.sembuh);\n    },\n    error: function error(err) {\n      console.log(err);\n    }\n  });\n}\n\nfunction submitUserData(element, phone, name) {\n  submitProcess(element, 'MENDAFTARKAN ...');\n  $.ajax({\n    type: 'POST',\n    url: '',\n    data: {\n      phone: phone,\n      name: name\n    },\n    success: function success(res) {\n      console.log(res);\n      submitProcess(element, 'SUKSES ...');\n      setTimeout(function () {\n        submitProcess(element, 'DAFTARKAN NOMOR');\n      }, 2000);\n    },\n    error: function error(err) {\n      console.log(err);\n      submitProcess(element, 'GAGAL ...');\n      setTimeout(function () {\n        submitProcess(element, 'DAFTARKAN NOMOR');\n      }, 2000);\n    }\n  });\n}\n\nfunction submitProcess(param, text) {\n  $(param).html(text);\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });