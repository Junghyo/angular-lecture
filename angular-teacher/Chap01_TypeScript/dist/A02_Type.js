"use strict";
// A02_Type.ts
var A02Type;
(function (A02Type) {
    console.log("------------------ var ----------------");
    var name = "NolBu";
    var name = "HungBu";
    console.log("Name: " + name + ", typeof: " + typeof name);
    name = 10;
    console.log("Name: " + name + ", typeof: " + typeof name);
    console.log("");
    var str = "GLOBAL";
    if (true) { // if, for, switch 문은 {} scope가 존재하지 않음
        var str = "IF Scope Str";
    }
    console.log(str);
    for (var i = 0; i < 10; i++) { }
    console.log(i);
    console.log("");
    // ES2015
    console.log("------------------ let ----------------");
    var name1 = "HungBu";
    // let name1: any = "HungBu";  // 중복 선언 에러
    var str1 = "Global";
    // if, for, switch 등의 {} 안에 선언된 변수는 Scope를 갖는다
    if (true) {
        var str1_1 = "IF Scope str1";
    }
    console.log(str1);
    for (var k = 0; k < 10; k++) { }
    // console.log(k);
    console.log();
    console.log("------------------ Type ----------------");
    // string, number, boolean, symbol, undefined
    var name2 = "NolBu";
    // name2 = 10;
    // name2 = true;
    // name2 = new Date();
    var age = 10;
    // age = "HungBu";
    // age = true;
    var check = true;
    // check = 1;
    console.log("typeof " + typeof (name2) + ", " + typeof (age) + ", " + typeof (check));
    console.log("");
    console.log("------------------ Type any ----------------");
    var name3 = "NolBu";
    console.log("Name3:  " + name3 + ", " + typeof (name3));
    name3 = 10;
    console.log("Name3:  " + name3 + ", " + typeof (name3));
    // 이 경우도 any 타입이 된다
    var name4; // 타입도 없고 초기화도 안됨
    var name5 = undefined; // 타입 설정이 없고 undefined으로 초기화
    var name6 = null; // 타입 설정이 없고 null으로 초기화
    name6 = 10;
    name6 = "NolBu";
    console.log("");
    // null과 undefined로 타입을 설정하지 않는다 (필요하면 union을 사용)
    var undefinedType;
    var nullType;
    // undefined으로 타입이 설정되면 undefined만 대입 가능
    // undefinedType = 10;
    // undefinedType = null;
    undefinedType = undefined;
    // nullType으로 타입이 설정되면 nullType만 대입 가능
    // nullType = 10;
    // nullType = undefined;
    nullType = null;
    // union
    var name7 = undefined;
    console.log("name7:  " + name7 + ", " + typeof (name7));
    name7 = "NolBu";
    console.log("name7:  " + name7 + ", " + typeof (name7));
    // name7 = 10;
    console.log("");
    // Value에도 Type이 존재한다
    var name8 = "HongGilDong";
    console.log("name8:  " + name8 + ", " + typeof (name8));
    // name8 = 10;
    var age8 = 10;
    // age9 = true;
    // 객체
    var today = new Date();
    console.log("today:  " + today + ", " + typeof (today));
    console.log("today:  " + today.constructor + ", " + (today instanceof Date));
    console.log("today:  " + (today.constructor === Date));
})(A02Type || (A02Type = {}));
//# sourceMappingURL=A02_Type.js.map