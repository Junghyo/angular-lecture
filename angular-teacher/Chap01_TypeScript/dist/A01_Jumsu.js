"use strict";
// A01_Jumsu.ts
var Test;
(function (Test) {
    var Jumsu = /** @class */ (function () {
        function Jumsu(name, kor, eng) {
            this.name = name;
            this.kor = kor;
            this.eng = eng;
            this.total = 0;
            this.avg = 0;
        }
        Jumsu.prototype.getTotal = function () {
            this.total = this.kor + this.eng;
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
    var nolbu = new Jumsu("놀부", 100, 90);
    nolbu.getTotal();
    nolbu.getAvg(2);
    var result = nolbu.display();
    console.log(result);
    var hungbu = new Jumsu("흥부", 50, 80);
    hungbu.getTotal();
    hungbu.getAvg(2);
    var result1 = hungbu.display();
    console.log(result1);
})(Test || (Test = {}));
//# sourceMappingURL=A01_Jumsu.js.map