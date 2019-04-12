"use strict";
// A04_Function.ts
var A04Function;
(function (A04Function) {
    var PI = 3.14;
    // PI = 12345;
    // calcTax("NY", 5000, 2);
    // calcTax2("NY", 5000, 2);
    function calcTax(state, amount, person) {
        if (state === "NY") {
            return amount * 0.06 - person * 600;
        }
        else if (state === "NJ") {
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
    var result = calcTax("NY", 5000, 2);
    console.log(result);
    // 함수 리터럴 방식
    var calcTax2 = function (state, amount, person) {
        if (state === "NY") {
            return amount * 0.06 - person * 600;
        }
        else if (state === "NJ") {
            return amount * 0.03 - person * 300;
        }
        return -1;
    };
    result = calcTax2("NY", 5000, 2);
    console.log(result);
    // ES2015
    // 매개변수의 기본값 할당 가능. 
    // 기본값이 있는 매개변수는 없는 매개변수보다 뒤에 기술
    function calcTax3(amount, person, state) {
        if (person === void 0) { person = 1; }
        if (state === void 0) { state = 'NY'; }
        if (state === "NY") {
            return amount * 0.06 - person * 600;
        }
        else if (state === "NJ") {
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
    result = calcTax3(5000, 2);
    console.log("NY: " + result);
    result = calcTax3(5000, 2, 'NJ');
    console.log("NJ: " + result);
    // ES2015
    // 생략 가능한 매개변수 선언 가능 => ? (angular에서 사용)
    // 생략 가능한 매개변수 다른 매개변수보다 뒤에 기술
    function calcTax4(amount, person, state) {
        // console.log(state);
        // state = (state === undefined) ? 'NY' : state;
        if (person === void 0) { person = 1; }
        if (state === "NY") {
            return amount * 0.06 - person * 600;
        }
        else if (state === "NJ") {
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
    // state는 생략 가능 매개변수로 에러 발생 안함
    result = calcTax4(5000, 2);
    console.log("NY: " + result);
    result = calcTax4(5000, 2, 'NJ');
    console.log("NJ: " + result);
})(A04Function || (A04Function = {}));
//# sourceMappingURL=A04_Function.js.map