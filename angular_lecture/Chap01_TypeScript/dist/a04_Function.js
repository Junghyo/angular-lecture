"use strict";
// a04_Function.ts
var A04Function;
(function (A04Function) {
    function calcTax(state, amount, person) {
        if (state === "NY") {
            return amount * 0.06 - person * 600;
        }
        else if (state === "NJ") {
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
    let result = calcTax("NY", 5000, 2);
    console.log(result);
    // 함수 리터럴 방식
    let calcTax2 = function (state, amount, person) {
        if (state === "NY") {
            return amount * 0.06 - person * 600;
        }
        else if (state === "NJ") {
            return amount * 0.03 - person * 300;
        }
        return -1;
    };
    let result2 = calcTax2("NY", 5000, 2);
    console.log(result2);
    // es2015
    // 매개변수의 기본값 할당 가능 (선언할때)
    // 기본값이 있는 매개변수는 없는 매개변수보다 뒤에 선언
    function calcTax3(amount, person, state = 'NY') {
        if (state === "NY") {
            return amount * 0.06 - person * 600;
        }
        else if (state === "NJ") {
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
    let result3 = calcTax3(5000, 2);
    let result4 = calcTax3(5000, 2, 'NJ');
    console.log(`NY: ${result3}, NJ: ${result4}`);
    // es2015
    // 생략 가능한 매개변수 선언 가능 (변수명 뒤에 ?)
    // 생략 가능한 매개변수는 다른 매개변수보다 뒤에 기술
    function calcTax4(amount, person, state) {
        console.log(state);
        // state = (state === undefined)? 'NY' : state;
        if (state === "NY") {
            return amount * 0.06 - person * 600;
        }
        else if (state === "NJ") {
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
    let result5 = calcTax4(5000, 2);
    let result6 = calcTax4(5000, 2, 'NY');
    console.log(`생략: ${result5}, NJ: ${result6}`);
})(A04Function || (A04Function = {}));
//# sourceMappingURL=a04_Function.js.map