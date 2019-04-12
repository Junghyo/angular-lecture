"use strict";
// A07_Extends.ts
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
var A07_Jumsu_1 = require("./A07_Jumsu");
var JumsuThree = /** @class */ (function (_super) {
    __extends(JumsuThree, _super);
    function JumsuThree(name, kor, eng, java) {
        var _this = _super.call(this, name, kor, eng) || this;
        _this.java = java;
        return _this;
    }
    // method override
    JumsuThree.prototype.getTotal = function () {
        this.total = this.getKor() + this.eng + this.java;
        return this.total;
    };
    return JumsuThree;
}(A07_Jumsu_1.JumsuTwo));
var nolbu = new JumsuThree("NolBu", 100, 90, 80);
nolbu.getTotal();
nolbu.getAvg(3);
console.log(nolbu.display());
//# sourceMappingURL=A07_Extends.js.map