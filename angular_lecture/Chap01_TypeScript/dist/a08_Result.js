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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/a08_Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/a08_ImplScore.ts":
/*!*********************************!*\
  !*** ./source/a08_ImplScore.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// 추상클래스, typescript 전용 문법
class ImplScore {
    constructor(name, kor, eng) {
        this.total = 0;
        this.avg = 0;
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }
    // public getTotal(): number {
    //     this.total = this.kor + this.eng;
    //     return this.total;
    // }
    getAvg(x) {
        this.avg = this.total / x;
        return this.avg;
    }
}
exports.ImplScore = ImplScore;


/***/ }),

/***/ "./source/a08_Main.ts":
/*!****************************!*\
  !*** ./source/a08_Main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const a08_Score_1 = __webpack_require__(/*! ./a08_Score */ "./source/a08_Score.ts");
const a08_Score2_1 = __webpack_require__(/*! ./a08_Score2 */ "./source/a08_Score2.ts");
var A08Main;
(function (A08Main) {
    let yoda = new a08_Score_1.Score3("yoda", 90, 100);
    let hong = new a08_Score2_1.Score4("gildong", 100, 50, 70);
    let kim = new a08_Score_1.Score3("jiseok", 30, 50);
    let scoreArry = [yoda, hong, kim];
    for (let item of scoreArry) {
        item.getTotal();
        if (item instanceof a08_Score_1.Score3) {
            item.getAvg(2);
        }
        else if (item instanceof a08_Score2_1.Score4) {
            item.getAvg(3);
        }
        console.log(item.display());
    }
})(A08Main || (A08Main = {}));


/***/ }),

/***/ "./source/a08_Score.ts":
/*!*****************************!*\
  !*** ./source/a08_Score.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const a08_ImplScore_1 = __webpack_require__(/*! ./a08_ImplScore */ "./source/a08_ImplScore.ts");
class Score3 extends a08_ImplScore_1.ImplScore {
    constructor(name, kor, eng) {
        super(name, kor, eng);
    }
    getTotal() {
        this.total = this.kor + this.eng;
        return this.total;
    }
    display() {
        return `name: ${this.name}\ntotal: ${this.total}\navg: ${this.avg}`;
    }
}
exports.Score3 = Score3;


/***/ }),

/***/ "./source/a08_Score2.ts":
/*!******************************!*\
  !*** ./source/a08_Score2.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const a08_ImplScore_1 = __webpack_require__(/*! ./a08_ImplScore */ "./source/a08_ImplScore.ts");
class Score4 extends a08_ImplScore_1.ImplScore {
    constructor(name, kor, eng, java) {
        super(name, kor, eng);
        this.java = java;
    }
    getTotal() {
        this.total = this.kor + this.eng + this.java;
        return this.total;
    }
    display() {
        return `name: ${this.name}\ntotal: ${this.total}\navg: ${this.avg}`;
    }
}
exports.Score4 = Score4;


/***/ })

/******/ });
//# sourceMappingURL=a08_Result.js.map