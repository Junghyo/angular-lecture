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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/A08_Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/A08_AJumsu.ts":
/*!******************************!*\
  !*** ./source/A08_AJumsu.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// A08_AJumsu.ts
Object.defineProperty(exports, "__esModule", { value: true });
// 추상클래스. TypeScript 문법
var AJumsu = /** @class */ (function () {
    function AJumsu(name, kor, eng) {
        this.total = 0;
        this.avg = 0;
        this.name = name;
        this.eng = eng;
        this.kor = kor;
    }
    AJumsu.prototype.getAvg = function (x) {
        this.avg = this.total + x;
        return this.avg;
    };
    return AJumsu;
}());
exports.AJumsu = AJumsu;


/***/ }),

/***/ "./source/A08_JumsuThree.ts":
/*!**********************************!*\
  !*** ./source/A08_JumsuThree.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var A08_AJumsu_1 = __webpack_require__(/*! ./A08_AJumsu */ "./source/A08_AJumsu.ts");
// A08_JumsuThree
var Jumsu3 = /** @class */ (function (_super) {
    __extends(Jumsu3, _super);
    function Jumsu3(name, kor, eng, java) {
        var _this = _super.call(this, name, kor, eng) || this;
        _this.java = java;
        return _this;
    }
    Jumsu3.prototype.getTotal = function () {
        this.total = this.kor + this.eng + this.java;
        return this.total;
    };
    ;
    Jumsu3.prototype.display = function () {
        return this.name + "\uB2D8\uC758\uC758 \uCD1D\uC810\uC740 " + this.total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this.avg;
    };
    return Jumsu3;
}(A08_AJumsu_1.AJumsu));
exports.Jumsu3 = Jumsu3;


/***/ }),

/***/ "./source/A08_JumsuTwo.ts":
/*!********************************!*\
  !*** ./source/A08_JumsuTwo.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var A08_AJumsu_1 = __webpack_require__(/*! ./A08_AJumsu */ "./source/A08_AJumsu.ts");
// A08_JumsuTwo.ts
var Jumsu2 = /** @class */ (function (_super) {
    __extends(Jumsu2, _super);
    function Jumsu2(name, kor, eng) {
        return _super.call(this, name, kor, eng) || this;
    }
    Jumsu2.prototype.getTotal = function () {
        this.total = this.kor + this.eng;
        return this.total;
    };
    ;
    Jumsu2.prototype.display = function () {
        return this.name + "\uB2D8\uC758\uC758 \uCD1D\uC810\uC740 " + this.total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this.avg;
    };
    return Jumsu2;
}(A08_AJumsu_1.AJumsu));
exports.Jumsu2 = Jumsu2;


/***/ }),

/***/ "./source/A08_Main.ts":
/*!****************************!*\
  !*** ./source/A08_Main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var A08_JumsuTwo_1 = __webpack_require__(/*! ./A08_JumsuTwo */ "./source/A08_JumsuTwo.ts");
var A08_JumsuThree_1 = __webpack_require__(/*! ./A08_JumsuThree */ "./source/A08_JumsuThree.ts");
// A08_Main.ts
var A08Main;
(function (A08Main) {
    var hong = new A08_JumsuTwo_1.Jumsu2("HongGilDong", 90, 80);
    var nolbu = new A08_JumsuThree_1.Jumsu3("NolBu", 100, 90, 80);
    var hungbu = new A08_JumsuTwo_1.Jumsu2("HungBu", 90, 80);
    var jumsuAry = [hong, nolbu, hungbu];
    for (var _i = 0, jumsuAry_1 = jumsuAry; _i < jumsuAry_1.length; _i++) {
        var item = jumsuAry_1[_i];
        item.getTotal();
        if (item instanceof A08_JumsuTwo_1.Jumsu2) {
            item.getAvg(2);
        }
        else if (item instanceof A08_JumsuThree_1.Jumsu3) {
            item.getAvg(3);
        }
        console.log(item.display());
    }
})(A08Main || (A08Main = {}));


/***/ })

/******/ });
//# sourceMappingURL=A08Result.js.map