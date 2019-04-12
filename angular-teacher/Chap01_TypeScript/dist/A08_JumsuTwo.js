"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var A08_AJumsu_1 = require("./A08_AJumsu");
// A08_JumsuTwo.ts
var Jumsu2 = /** @class */ (function (_super) {
    __extends(Jumsu2, _super);
    function Jumsu2(name, kor, eng) {
        return _super.call(this, name, kor, eng) || this;
    }
    Jumsu2.prototype.getTotal = function () {
        this.total = this.kor + this.eng;
        return this.total;
    };
    ;
    Jumsu2.prototype.display = function () {
        return this.name + "\uB2D8\uC758\uC758 \uCD1D\uC810\uC740 " + this.total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this.avg;
    };
    return Jumsu2;
}(A08_AJumsu_1.AJumsu));
exports.Jumsu2 = Jumsu2;
//# sourceMappingURL=A08_JumsuTwo.js.map