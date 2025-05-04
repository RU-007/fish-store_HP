/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.getElementById('carousel');
  var items = document.querySelectorAll('.product-carousel-item');
  var indicators = document.querySelectorAll('.indicator-list');
  var currentIndex = 0;
  var totalItems = items.length;
  function getItemWidth() {
    return items[0].getBoundingClientRect().width + 16; // gapを含める
  }
  function updateCarousel() {
    var offset = getItemWidth();
    // スライド中央寄せのため、wrapperのpaddingを含めて調整
    var translateX = -(currentIndex * offset);
    carousel.style.transform = "translateX(".concat(translateX, "px)");
    indicators.forEach(function (dot, index) {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  // 初期表示
  updateCarousel();
  var interval = setInterval(autoSlide, 3000);

  // インジケータークリック対応
  indicators.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
      currentIndex = index;
      updateCarousel();
      clearInterval(interval);
      interval = setInterval(autoSlide, 3000); // 再開
    });
  });

  // ウィンドウリサイズ時の再計算
  window.addEventListener('resize', function () {
    updateCarousel();
  });
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

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector("#menu");
  var menu2 = document.querySelector("#menu2");
  var lists1 = [{
    name: 'サーモン',
    img: 'サーモン.jpeg',
    price: '1,000'
  }, {
    name: 'サーモン２',
    img: 'サーモン２.jpeg',
    price: '1,200'
  }, {
    name: '金目鯛刺身',
    img: '金目鯛刺身.jpeg',
    price: '1,500'
  }, {
    name: '鯛刺身',
    img: '鯛刺身.jpeg',
    price: '1,300'
  }, {
    name: '銀たら',
    img: '銀たら.jpeg',
    price: '1,400'
  }, {
    name: 'たら切り身',
    img: 'たら切り身.jpeg',
    price: '1,100'
  }, {
    name: 'ふり刺身',
    img: 'ふり刺身.jpeg',
    price: '1,600'
  }, {
    name: 'さわら刺身',
    img: 'さわら刺身.jpeg',
    price: '1,700'
  }];
  var lists2 = [{
    name: '銀たら',
    img: '銀たら.jpeg',
    price: '1,400'
  }, {
    name: 'たら切り身',
    img: 'たら切り身.jpeg',
    price: '1,100'
  }, {
    name: 'ふり刺身',
    img: 'ふり刺身.jpeg',
    price: '1,600'
  }, {
    name: 'さわら刺身',
    img: 'さわら刺身.jpeg',
    price: '1,700'
  }, {
    name: 'サーモン',
    img: 'サーモン.jpeg',
    price: '1,000'
  }, {
    name: 'サーモン２',
    img: 'サーモン２.jpeg',
    price: '1,200'
  }];

  // 共通の関数を作成
  function renderMenu(targetMenu, items) {
    for (var i = 0; i < items.length; i++) {
      var _items$i = items[i],
        name = _items$i.name,
        img = _items$i.img,
        price = _items$i.price;
      var content = "\n      <div class=\"menu-item\">\n        <img src=\"./images/".concat(img, "\" alt=\"").concat(name, "\">\n        <h2>").concat(name, "</h2>\n        <p>").concat(price, "\u5186</p>\n      </div>");
      targetMenu.insertAdjacentHTML('beforeend', content);
    }
  }

  // menuとmenu2にそれぞれ異なるリストを追加
  renderMenu(menu, lists1);
  renderMenu(menu2, lists2);
});

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