(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.



var app = new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  el: "#app",
  data: {
    'search': ''
  },
  delimiters: ['#{', '}']
});
console.log('Hello Webpack Encore! Edit me in assets/js/app.js'); // scroll

jquery__WEBPACK_IMPORTED_MODULE_1___default()('a').click(function () {
  var target = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.getAttribute('href'));

  if (target.length) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html, body').animate({
      scrollTop: target.offset().top
    }, 2000);
  }
}); // ScrollReveal

var sr = ScrollReveal(); // Title

sr.reveal('h2', {
  origin: 'left',
  distance: '50px',
  reset: true,
  duration: 2000
}); // Feedbacks

sr.reveal('#feedback2', {
  duration: 4000,
  origin: 'bottom',
  distance: '10px',
  reset: true
}); // Form //

sr.reveal('#feedback-title', {
  delay: 500,
  duration: 2000,
  origin: 'left',
  distance: '50px',
  reset: false
});
sr.reveal('#feedback-content', {
  delay: 700,
  duration: 2000,
  origin: 'right',
  distance: '50px'
});
sr.reveal('#feedback-author', {
  delay: 900,
  duration: 2000,
  origin: 'left',
  distance: '50px'
});
sr.reveal('#feedback-submit', {
  delay: 1100,
  duration: 2000,
  origin: 'right',
  distance: '50px'
});
sr.reveal('.feedbacks-title', {
  duration: 2000,
  origin: 'bottom',
  distance: '50px'
});
sr.reveal('.feedback-source', {
  duration: 2000,
  origin: "bottom",
  distance: '50px'
}); // Nav-item //

sr.reveal('.nav-item', {
  interval: 500,
  origin: 'top',
  distance: '10px',
  reset: false
}); // Paragraph

sr.reveal('p', {
  origin: 'right',
  distance: '50px',
  reset: true,
  duration: 2000
}); // Button to top

sr.reveal('.btn-circle', {
  origin: 'bottom',
  delay: 200,
  distance: '50px',
  reset: true,
  duration: 2000
}); // Newsletter

sr.reveal('#newsletter1', {
  origin: 'top',
  distance: '50px',
  reset: true,
  duration: 2000
});
sr.reveal('#email', {
  origin: 'left',
  distance: '50px',
  reset: true,
  duration: 2000
});
sr.reveal('#newsletter2', {
  origin: 'right',
  distance: '50px',
  reset: true,
  duration: 2000
});
sr.reveal('#emailHelp', {
  origin: 'bottom',
  distance: '50px',
  reset: true,
  duration: 2000
}); // End Newsletter
// Login

sr.reveal('.login-left', {
  origin: 'left',
  distance: '50px',
  reset: true,
  duration: 2000
});
sr.reveal('.login-right', {
  origin: 'right',
  distance: '50px',
  reset: true,
  duration: 2000
});
sr.reveal('.login-button', {
  origin: 'right',
  distance: '40px',
  reset: true,
  duration: 2000,
  interval: 700
}); // Register form

sr.reveal('#register-left', {
  origin: 'left',
  distance: '50px',
  reset: true,
  duration: 2000
});
sr.reveal('#register-right', {
  origin: 'right',
  distance: '50px',
  reset: true,
  duration: 2000
});
sr.reveal('#register-top', {
  origin: 'top',
  distance: '50px',
  reset: true,
  duration: 2000
});
sr.reveal('#register-conditions', {
  origin: 'left',
  distance: '50px',
  reset: true,
  duration: 2000
});
sr.reveal('#register-submit', {
  origin: 'right',
  distance: '50px',
  reset: true,
  duration: 2000
}); //admin

sr.reveal('.admin-card', {
  duration: 2000,
  interval: 500
}); //admin

sr.reveal('.admin-card-text', {
  duration: 2000,
  distance: '15px',
  origin: 'top',
  interval: 500
}); // admin buttons :

sr.reveal('.admin-card-button-left', {
  duration: 2000,
  distance: '20px',
  origin: 'left',
  interval: 500
});
sr.reveal('.admin-card-button-right', {
  duration: 2000,
  distance: '20px',
  origin: 'right',
  interval: 500
});
sr.reveal('.admin-card-button-bottom', {
  duration: 2000,
  distance: '20px',
  origin: 'bottom',
  interval: 500
});
sr.reveal('.admin-card-button-right-role', {
  duration: 2000,
  distance: '20px',
  origin: 'right',
  interval: 500
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJWdWUiLCJlbCIsImRhdGEiLCJkZWxpbWl0ZXJzIiwiY29uc29sZSIsImxvZyIsIiQiLCJjbGljayIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImxlbmd0aCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwic3IiLCJTY3JvbGxSZXZlYWwiLCJyZXZlYWwiLCJvcmlnaW4iLCJkaXN0YW5jZSIsInJlc2V0IiwiZHVyYXRpb24iLCJkZWxheSIsImludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0NBRUE7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRyxJQUFJQywyQ0FBSixDQUFRO0FBQ2hCQyxJQUFFLEVBQUUsTUFEWTtBQUVoQkMsTUFBSSxFQUFFO0FBQ0YsY0FBVTtBQURSLEdBRlU7QUFLaEJDLFlBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxHQUFQO0FBTEksQ0FBUixDQUFaO0FBU0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1EQUFaLEUsQ0FFQTs7QUFDQUMsNkNBQUMsQ0FBQyxHQUFELENBQUQsQ0FBT0MsS0FBUCxDQUFhLFlBQVc7QUFDcEIsTUFBSUMsTUFBTSxHQUFHRiw2Q0FBQyxDQUFDLEtBQUtHLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBRCxDQUFkOztBQUNBLE1BQUdELE1BQU0sQ0FBQ0UsTUFBVixFQUFpQjtBQUNiQyxTQUFLLENBQUNDLGNBQU47QUFDQU4saURBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JPLE9BQWhCLENBQXdCO0FBQ3BCQyxlQUFTLEVBQUVOLE1BQU0sQ0FBQ08sTUFBUCxHQUFnQkM7QUFE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O0FBSWpDSyxVQUFRLEVBQUU7QUFKdUIsQ0FBckM7QUFNQVIsRUFBRSxDQUFDRSxNQUFILENBQVUsMEJBQVYsRUFBc0M7QUFDbENJLFVBQVEsRUFBRSxJQUR3QjtBQUVsQ0YsVUFBUSxFQUFFLE1BRndCO0FBR2xDRCxRQUFNLEVBQUUsT0FIMEI7QUFJbENLLFVBQVEsRUFBRTtBQUp3QixDQUF0QztBQU1BUixFQUFFLENBQUNFLE1BQUgsQ0FBVSwyQkFBVixFQUF1QztBQUNuQ0ksVUFBUSxFQUFFLElBRHlCO0FBRW5DRixVQUFRLEVBQUUsTUFGeUI7QUFHbkNELFFBQU0sRUFBRSxRQUgyQjtBQUluQ0ssVUFBUSxFQUFFO0FBSnlCLENBQXZDO0FBT0FSLEVBQUUsQ0FBQ0UsTUFBSCxDQUFVLCtCQUFWLEVBQTJDO0FBQ3ZDSSxVQUFRLEVBQUUsSUFENkI7QUFFdkNGLFVBQVEsRUFBRSxNQUY2QjtBQUd2Q0QsUUFBTSxFQUFFLE9BSCtCO0FBSXZDSyxVQUFRLEVBQUU7QUFKNkIsQ0FBM0MsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xyXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICBlbDogXCIjYXBwXCIsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgJ3NlYXJjaCc6ICcnXHJcbiAgICB9LFxyXG4gICAgZGVsaW1pdGVyczogWycjeycsICd9J11cclxufSlcclxuXHJcblxyXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xyXG5cclxuLy8gc2Nyb2xsXHJcbiQoJ2EnKS5jbGljayhmdW5jdGlvbiAoKXtcclxuICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xyXG4gICAgaWYodGFyZ2V0Lmxlbmd0aCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gU2Nyb2xsUmV2ZWFsXHJcblxyXG5jb25zdCBzciA9IFNjcm9sbFJldmVhbCgpO1xyXG5cclxuLy8gVGl0bGVcclxuc3IucmV2ZWFsKCdoMicsIHtcclxuICAgIG9yaWdpbjogJ2xlZnQnLFxyXG4gICAgZGlzdGFuY2U6ICc1MHB4JyxcclxuICAgIHJlc2V0OiB0cnVlLFxyXG4gICAgZHVyYXRpb246IDIwMDBcclxufSlcclxuXHJcbi8vIEZlZWRiYWNrc1xyXG5zci5yZXZlYWwoJyNmZWVkYmFjazInLCB7XHJcbiAgICBkdXJhdGlvbjogNDAwMCxcclxuICAgIG9yaWdpbjogJ2JvdHRvbScsXHJcbiAgICBkaXN0YW5jZTogJzEwcHgnLFxyXG4gICAgcmVzZXQ6IHRydWVcclxufSlcclxuXHJcbi8vIEZvcm0gLy9cclxuc3IucmV2ZWFsKCcjZmVlZGJhY2stdGl0bGUnLCB7XHJcbiAgICBkZWxheTogNTAwLFxyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICBvcmlnaW46ICdsZWZ0JyxcclxuICAgIGRpc3RhbmNlOiAnNTBweCcsXHJcbiAgICByZXNldDogZmFsc2UsXHJcbn0pXHJcbnNyLnJldmVhbCgnI2ZlZWRiYWNrLWNvbnRlbnQnLCB7XHJcbiAgICBkZWxheTogNzAwLFxyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICBvcmlnaW46ICdyaWdodCcsXHJcbiAgICBkaXN0YW5jZTogJzUwcHgnLFxyXG59KVxyXG5zci5yZXZlYWwoJyNmZWVkYmFjay1hdXRob3InLCB7XHJcbiAgICBkZWxheTogOTAwLFxyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICBvcmlnaW46ICdsZWZ0JyxcclxuICAgIGRpc3RhbmNlOiAnNTBweCcsXHJcbn0pXHJcbnNyLnJldmVhbCgnI2ZlZWRiYWNrLXN1Ym1pdCcsIHtcclxuICAgIGRlbGF5OiAxMTAwLFxyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICBvcmlnaW46ICdyaWdodCcsXHJcbiAgICBkaXN0YW5jZTogJzUwcHgnLFxyXG59KVxyXG5cclxuc3IucmV2ZWFsKCcuZmVlZGJhY2tzLXRpdGxlJywge1xyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICBvcmlnaW46ICdib3R0b20nLFxyXG4gICAgZGlzdGFuY2U6ICc1MHB4JyxcclxufSlcclxuXHJcbnNyLnJldmVhbCgnLmZlZWRiYWNrLXNvdXJjZScsIHtcclxuICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgb3JpZ2luOiBcImJvdHRvbVwiLFxyXG4gICAgZGlzdGFuY2U6ICc1MHB4J1xyXG59KVxyXG5cclxuLy8gTmF2LWl0ZW0gLy9cclxuc3IucmV2ZWFsKCcubmF2LWl0ZW0nLCB7XHJcbiAgICBpbnRlcnZhbDogNTAwLFxyXG4gICAgb3JpZ2luOiAndG9wJyxcclxuICAgIGRpc3RhbmNlOiAnMTBweCcsXHJcbiAgICByZXNldDogZmFsc2VcclxufSlcclxuXHJcbi8vIFBhcmFncmFwaFxyXG5zci5yZXZlYWwoJ3AnLCB7XHJcbiAgICBvcmlnaW46ICdyaWdodCcsXHJcbiAgICBkaXN0YW5jZTogJzUwcHgnLFxyXG4gICAgcmVzZXQ6IHRydWUsXHJcbiAgICBkdXJhdGlvbjogMjAwMFxyXG59KVxyXG5cclxuLy8gQnV0dG9uIHRvIHRvcFxyXG5zci5yZXZlYWwoJy5idG4tY2lyY2xlJywge1xyXG4gICAgb3JpZ2luOiAnYm90dG9tJyxcclxuICAgIGRlbGF5OiAyMDAsXHJcbiAgICBkaXN0YW5jZTogJzUwcHgnLFxyXG4gICAgcmVzZXQ6IHRydWUsXHJcbiAgICBkdXJhdGlvbjogMjAwMFxyXG59KVxyXG5cclxuLy8gTmV3c2xldHRlclxyXG5zci5yZXZlYWwoJyNuZXdzbGV0dGVyMScsIHtcclxuICAgIG9yaWdpbjogJ3RvcCcsXHJcbiAgICBkaXN0YW5jZTogJzUwcHgnLFxyXG4gICAgcmVzZXQ6IHRydWUsXHJcbiAgICBkdXJhdGlvbjogMjAwMFxyXG59KVxyXG5zci5yZXZlYWwoJyNlbWFpbCcsIHtcclxuICAgIG9yaWdpbjogJ2xlZnQnLFxyXG4gICAgZGlzdGFuY2U6ICc1MHB4JyxcclxuICAgIHJlc2V0OiB0cnVlLFxyXG4gICAgZHVyYXRpb246IDIwMDBcclxufSlcclxuc3IucmV2ZWFsKCcjbmV3c2xldHRlcjInLCB7XHJcbiAgICBvcmlnaW46ICdyaWdodCcsXHJcbiAgICBkaXN0YW5jZTogJzUwcHgnLFxyXG4gICAgcmVzZXQ6IHRydWUsXHJcbiAgICBkdXJhdGlvbjogMjAwMFxyXG59KVxyXG5zci5yZXZlYWwoJyNlbWFpbEhlbHAnLCB7XHJcbiAgICBvcmlnaW46ICdib3R0b20nLFxyXG4gICAgZGlzdGFuY2U6ICc1MHB4JyxcclxuICAgIHJlc2V0OiB0cnVlLFxyXG4gICAgZHVyYXRpb246IDIwMDBcclxufSlcclxuLy8gRW5kIE5ld3NsZXR0ZXJcclxuXHJcbi8vIExvZ2luXHJcbnNyLnJldmVhbCgnLmxvZ2luLWxlZnQnLCB7XHJcbiAgICBvcmlnaW46ICdsZWZ0JyxcclxuICAgIGRpc3RhbmNlOiAnNTBweCcsXHJcbiAgICByZXNldDogdHJ1ZSxcclxuICAgIGR1cmF0aW9uOiAyMDAwXHJcbn0pXHJcbnNyLnJldmVhbCgnLmxvZ2luLXJpZ2h0Jywge1xyXG4gICAgb3JpZ2luOiAncmlnaHQnLFxyXG4gICAgZGlzdGFuY2U6ICc1MHB4JyxcclxuICAgIHJlc2V0OiB0cnVlLFxyXG4gICAgZHVyYXRpb246IDIwMDBcclxufSlcclxuc3IucmV2ZWFsKCcubG9naW4tYnV0dG9uJywge1xyXG4gICAgb3JpZ2luOiAncmlnaHQnLFxyXG4gICAgZGlzdGFuY2U6ICc0MHB4JyxcclxuICAgIHJlc2V0OiB0cnVlLFxyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICBpbnRlcnZhbDogNzAwXHJcbn0pXHJcblxyXG4vLyBSZWdpc3RlciBmb3JtXHJcbnNyLnJldmVhbCgnI3JlZ2lzdGVyLWxlZnQnLCB7XHJcbiAgICBvcmlnaW46ICdsZWZ0JyxcclxuICAgIGRpc3RhbmNlOiAnNTBweCcsXHJcbiAgICByZXNldDogdHJ1ZSxcclxuICAgIGR1cmF0aW9uOiAyMDAwLFxyXG59KVxyXG5zci5yZXZlYWwoJyNyZWdpc3Rlci1yaWdodCcsIHtcclxuICAgIG9yaWdpbjogJ3JpZ2h0JyxcclxuICAgIGRpc3RhbmNlOiAnNTBweCcsXHJcbiAgICByZXNldDogdHJ1ZSxcclxuICAgIGR1cmF0aW9uOiAyMDAwLFxyXG59KVxyXG5zci5yZXZlYWwoJyNyZWdpc3Rlci10b3AnLCB7XHJcbiAgICBvcmlnaW46ICd0b3AnLFxyXG4gICAgZGlzdGFuY2U6ICc1MHB4JyxcclxuICAgIHJlc2V0OiB0cnVlLFxyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbn0pXHJcblxyXG5zci5yZXZlYWwoJyNyZWdpc3Rlci1jb25kaXRpb25zJywge1xyXG4gICAgb3JpZ2luOiAnbGVmdCcsXHJcbiAgICBkaXN0YW5jZTogJzUwcHgnLFxyXG4gICAgcmVzZXQ6IHRydWUsXHJcbiAgICBkdXJhdGlvbjogMjAwMFxyXG59KVxyXG5cclxuc3IucmV2ZWFsKCcjcmVnaXN0ZXItc3VibWl0Jywge1xyXG4gICAgb3JpZ2luOiAncmlnaHQnLFxyXG4gICAgZGlzdGFuY2U6ICc1MHB4JyxcclxuICAgIHJlc2V0OiB0cnVlLFxyXG4gICAgZHVyYXRpb246IDIwMDBcclxufSlcclxuXHJcbi8vYWRtaW5cclxuc3IucmV2ZWFsKCcuYWRtaW4tY2FyZCcsIHtcclxuICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgaW50ZXJ2YWw6IDUwMFxyXG59KVxyXG5cclxuLy9hZG1pblxyXG5zci5yZXZlYWwoJy5hZG1pbi1jYXJkLXRleHQnLCB7XHJcbiAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgIGRpc3RhbmNlOiAnMTVweCcsXHJcbiAgICBvcmlnaW46ICd0b3AnLFxyXG4gICAgaW50ZXJ2YWw6IDUwMFxyXG59KVxyXG5cclxuLy8gYWRtaW4gYnV0dG9ucyA6XHJcbnNyLnJldmVhbCgnLmFkbWluLWNhcmQtYnV0dG9uLWxlZnQnLCB7XHJcbiAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgIGRpc3RhbmNlOiAnMjBweCcsXHJcbiAgICBvcmlnaW46ICdsZWZ0JyxcclxuICAgIGludGVydmFsOiA1MDBcclxufSlcclxuc3IucmV2ZWFsKCcuYWRtaW4tY2FyZC1idXR0b24tcmlnaHQnLCB7XHJcbiAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgIGRpc3RhbmNlOiAnMjBweCcsXHJcbiAgICBvcmlnaW46ICdyaWdodCcsXHJcbiAgICBpbnRlcnZhbDogNTAwXHJcbn0pXHJcbnNyLnJldmVhbCgnLmFkbWluLWNhcmQtYnV0dG9uLWJvdHRvbScsIHtcclxuICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgZGlzdGFuY2U6ICcyMHB4JyxcclxuICAgIG9yaWdpbjogJ2JvdHRvbScsXHJcbiAgICBpbnRlcnZhbDogNTAwXHJcbn0pXHJcblxyXG5zci5yZXZlYWwoJy5hZG1pbi1jYXJkLWJ1dHRvbi1yaWdodC1yb2xlJywge1xyXG4gICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICBkaXN0YW5jZTogJzIwcHgnLFxyXG4gICAgb3JpZ2luOiAncmlnaHQnLFxyXG4gICAgaW50ZXJ2YWw6IDUwMFxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=