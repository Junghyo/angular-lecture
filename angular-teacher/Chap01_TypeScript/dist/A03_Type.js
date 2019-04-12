"use strict";
// A03_Type.ts
var A03Type;
(function (A03Type) {
    console.log("------------ Array -------------");
    // JavaScript
    var ary = [10, 11, 100, 'NolBu', new Date()];
    // TypeScript
    var strAry = ['one', 'two', 'three'];
    var numAry = [10, 11, 100];
    // numAry.push("NolBu");
    numAry.push(101);
    var num = numAry[1];
    // let str: string = numAry[2];
    // for
    for (var i = 0; i < strAry.length; i++) {
        console.log(i + " -> " + strAry[i]);
    }
    // forEach
    strAry.forEach(function (item, index) {
        console.log(index + " -> " + item);
    });
    // es5.     for ~ in => index를 돌려준다
    for (var i in strAry) {
        console.log(i + " -> " + strAry[i]);
    }
    // es2015.     for ~ of => value를 돌려준다(index 없음)
    // angular에서 DOM을 반복하여 생성할 목적으로 사용됨 *ngFor
    for (var _i = 0, strAry_1 = strAry; _i < strAry_1.length; _i++) {
        var i = strAry_1[_i];
        console.log("" + i);
    }
    console.log("");
    console.log("------------ Object -------------");
    var obj1 = {
        name: "NolBu",
        age: 40,
        address: ['Seoul', 'Busan'],
        info: {
            tel: '010-1234-7895',
            child: 2
        },
        getInfo: function (x) {
            return this.name + "\uB2D8\uC758 \uC790\uC2DD\uC740 " + this.info.child + " - " + x;
        }
    };
    var obj2 = {
        name: "NolBu",
        age: 40,
        address: ['Seoul', 'Busan'],
        info: {
            tel: '010-1234-7895',
            child: 2
        },
        getInfo: function (x) {
            return this.name + "\uB2D8\uC758 \uC790\uC2DD\uC740 " + this.info.child + " - " + x;
        }
    };
    // 추출
    var name = obj2.name;
    var child = obj2.info.child;
    // let objAge: string = 'age';
    var age = obj2['age'];
    // 삽입
    // obj2.num = 100;     // type에 해당 속성이 없음
    // key value 형태의 Object
    var obj3 = {
        'A': 10,
        'B': 20,
        'C': 30
    };
    obj3['D'] = 40;
    var num1 = obj3['B'];
    var num2 = obj3.D;
    console.log("num1: " + num1 + ", num2: " + num2);
    console.log('');
    var obj4 = {
        'nolbu': { name: 'NolBu', age: 40, address: 'Seoul' },
        'hungbu': { name: 'HungBu', age: 20, address: 'Seoul' },
    };
    // 추가
    obj4['hong'] = { name: 'Hong', age: 20, address: 'Busan' };
    // 추출
    var hongName = obj4['hong'].name;
    console.log(hongName);
    // for in
    for (var i in obj4) {
        var item = obj4[i];
        console.log(item.name + ", \n                    " + item.age + ", " + item.address);
    }
})(A03Type || (A03Type = {}));
//# sourceMappingURL=A03_Type.js.map