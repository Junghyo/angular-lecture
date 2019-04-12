"use strict";
// A06_Class.ts
var num = 10;
var PI = 3.14;
function getName() {
    return 'HongGilDong';
}
var Jumsu = /** @class */ (function () {
    function Jumsu(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this._eng = eng;
        this.total = 0;
        this.avg = 0;
    }
    // kor. 일반적 메소드. 
    Jumsu.prototype.getKor = function () {
        return this.kor;
    };
    Jumsu.prototype.setKor = function (kor) {
        this.kor = kor;
    };
    Object.defineProperty(Jumsu.prototype, "eng", {
        // Getter, Setter Method
        // 사용은 프로퍼티(멤버변수)처럼 호출해서 사용
        get: function () {
            return this._eng;
        },
        set: function (eng) {
            this._eng = eng;
        },
        enumerable: true,
        configurable: true
    });
    Jumsu.prototype.getTotal = function () {
        this.total = this.kor + this._eng;
        return this.total;
    };
    Jumsu.prototype.getAvg = function (x) {
        this.avg = this.total / x;
        return this.avg;
    };
    Jumsu.prototype.display = function () {
        return this.name + "\uB2D8\uC758\uC758 \uCD1D\uC810\uC740 " + this.total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this.avg;
    };
    return Jumsu;
}());
var hong = new Jumsu("Hong", 100, 90);
hong.getTotal();
hong.getAvg(2);
console.log(hong.display());
// console.log(hong.kor);
console.log(hong.name);
// 일반 메서드
hong.setKor(10);
console.log(hong.getKor());
// Getter, Setter
// 일반 멤버변수처럼 호출해서 사용한다
hong.eng = 30;
console.log(hong.eng);
//# sourceMappingURL=A06_Class.js.map