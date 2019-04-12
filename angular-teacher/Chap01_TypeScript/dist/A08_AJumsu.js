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
//# sourceMappingURL=A08_AJumsu.js.map