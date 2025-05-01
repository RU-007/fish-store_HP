/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var track = document.querySelector('.product-carousel-list');
  var slides = document.querySelectorAll('.product-carousel-item');
  var indicators = document.querySelectorAll('.indicator-list');
  var slideCount = slides.length;

  //クローンを作成
  var firstClone = slides[0].cloneNode(true);
  var lastClone = slides[slideCount - 1].cloneNode(true);
  firstClone.classList.add('clone');
  lastClone.classList.add('clone');
  track.appendChild(firstClone); // 最後にクローンを追加
  track.insertBefore(lastClone, slides[0]); // 最初にクローンを追加

  // スライド再取得（クローン込み）
  var allSlides = document.querySelectorAll('.product-carousel-item');
  var currentIndex = 1; // 実際の1番目にスタート
  var slideWidth = allSlides[0].offsetWidth + parseInt(getComputedStyle(allSlides[0]).marginRight);

  // スライド移動関数
  function goToSlide(index) {
    var smooth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    track.style.transition = smooth ? 'transform 0.5s ease' : 'none';
    track.style.transform = "translateX(-".concat(slideWidth * index, "px)");

    // インジケーターの更新
    indicators.forEach(function (dot, i) {
      dot.classList.toggle('active', i === (index - 1 + slideCount) % slideCount);
    });
  }

  // 自動スライド
  function autoSlide() {
    currentIndex++;
    goToSlide(currentIndex);
    if (currentIndex === allSlides.length - 1) {
      // クローンが最後に来たら、本物の1番目にジャンプ
      setTimeout(function () {
        currentIndex = 1;
        goToSlide(currentIndex, false);
      }, 500);
    }
  }

  // 自動スライドのインターバル
  var interval = setInterval(autoSlide, 3000);

  // インジケータークリックで手動移動
  indicators.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      clearInterval(interval);
      currentIndex = i + 1;
      goToSlide(currentIndex);
      interval = setInterval(autoSlide, 3000);
    });
  });

  // ウィンドウリサイズ時の調整
  window.addEventListener('resize', function () {
    slideWidth = allSlides[0].offsetWidth + parseInt(getComputedStyle(allSlides[0]).marginRight);
    goToSlide(currentIndex, false);
  });

  // 初期位置セット（本物の1番目に設定）
  goToSlide(currentIndex, false);
});

/***/ }),

/***/ "./src/js/hamburger.js":
/*!*****************************!*\
  !*** ./src/js/hamburger.js ***!
  \*****************************/
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var headerContainer = document.querySelector(".header-container");
  var btn = document.querySelector(".hamburger-btn");
  var mask = document.getElementById("hamburger-mask");
  var toggleMenu = function toggleMenu() {
    headerContainer.classList.toggle('open');
  };

  // ハンバーガーメニュー開閉
  btn.addEventListener('click', toggleMenu);
  mask.addEventListener('click', toggleMenu);

  // スクロール時の処理
  window.addEventListener('scroll', function () {
    if (headerContainer.classList.contains('open')) {
      toggleMenu();
    }
  });
});

/***/ }),

/***/ "./src/js/order.js":
/*!*************************!*\
  !*** ./src/js/order.js ***!
  \*************************/
/***/ (function() {



/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ (function() {

// extracted by mini-css-extract-plugin

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburger.js */ "./src/js/hamburger.js");
/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hamburger_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel.js */ "./src/js/carousel.js");
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carousel_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.js */ "./src/js/order.js");
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_order_js__WEBPACK_IMPORTED_MODULE_3__);




}();
/******/ })()
;
//# sourceMappingURL=index.js.map