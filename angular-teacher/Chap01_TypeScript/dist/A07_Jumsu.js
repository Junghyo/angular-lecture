"use strict";
// A07_Jumsu
Object.defineProperty(exports, "__esModule", { value: true });
var JumsuTwo = /** @class */ (function () {
    function JumsuTwo(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this._eng = eng;
        this.total = 0;
        this.avg = 0;
    }
    JumsuTwo.prototype.getKor = function () {
        return this.kor;
    };
    JumsuTwo.prototype.setKor = function (kor) {
        this.kor = kor;
    };
    Object.defineProperty(JumsuTwo.prototype, "eng", {
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
    JumsuTwo.prototype.getTotal = function () {
        this.total = this.kor + this._eng;
        return this.total;
    };
    JumsuTwo.prototype.getAvg = function (x) {
        this.avg = this.total / x;
        return this.avg;
    };
    JumsuTwo.prototype.display = function () {
        return this.name + "\uB2D8\uC758\uC758 \uCD1D\uC810\uC740 " + this.total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this.avg;
    };
    return JumsuTwo;
}());
exports.JumsuTwo = JumsuTwo;
//# sourceMappingURL=A07_Jumsu.js.map