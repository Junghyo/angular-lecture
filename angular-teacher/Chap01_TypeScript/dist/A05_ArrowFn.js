"use strict";
// A05_ArrowFn.ts
var A05ArrowFn;
(function (A05ArrowFn) {
    // 함수 리터럴 방식
    var calcTax = function (state, amount, person) {
        if (state === "NY") {
            return amount * 0.06 - person * 600;
        }
        else if (state === "NJ") {
            return amount * 0.03 - person * 300;
        }
        return -1;
    };
    // Arrow 방식
    // function을 생략하고 매개변수 뒤에 () => {} 형태로 시작
    var calcTax2 = function (state, amount, person) {
        if (state === "NY") {
            return amount * 0.06 - person * 600;
        }
        else if (state === "NJ") {
            return amount * 0.03 - person * 300;
        }
        return -1;
    };
    console.log(calcTax2('NY', 5000, 2));
    console.log("");
    var onAdd = function (x, y) {
        return x + y;
    };
    // 함수가 return 구문 딱 1줄만 있는 경우
    // return을 생략하고 한 줄에 기술 가능
    var onMin = function (x, y) { return x - y; };
    // 매개변수가 1개인 경우는 () 생략 가능(typeScript에서는 안됨)
    // let onMulti = x => x * 10;           // javascript
    var onMulti = function (x) { return x * 10; }; // TypeScript
    // => 뒤가 value인 경우만 return이 자동으로 붙는다
    // 이 경우는 그대로 출력
    var onDiv = function (x) { return console.log(x); };
    // this의 참조가 틀리다
    var TodayClass = /** @class */ (function () {
        function TodayClass() {
            this.today = new Date();
        }
        TodayClass.prototype.getTime = function () {
            var _this = this;
            window.setTimeout(function () {
                // this => window
                console.log(_this.today.toLocaleString());
            }, 1000);
        };
        return TodayClass;
    }());
    var NowClass = /** @class */ (function () {
        function NowClass() {
            this.today = new Date();
        }
        NowClass.prototype.getTime = function () {
            var _this_1 = this;
            window.setTimeout(function () {
                // arrow 함수에서는 사용된 객체가 this
                console.log(_this_1.today.toLocaleString());
            }, 1000);
        };
        return NowClass;
    }());
    var today = new TodayClass();
    var now = new NowClass();
    today.getTime();
    now.getTime();
})(A05ArrowFn || (A05ArrowFn = {}));
//# sourceMappingURL=A05_ArrowFn.js.map