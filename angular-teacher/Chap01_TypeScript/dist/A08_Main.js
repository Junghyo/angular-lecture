"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A08_JumsuTwo_1 = require("./A08_JumsuTwo");
var A08_JumsuThree_1 = require("./A08_JumsuThree");
// A08_Main.ts
var A08Main;
(function (A08Main) {
    var hong = new A08_JumsuTwo_1.Jumsu2("HongGilDong", 90, 80);
    var nolbu = new A08_JumsuThree_1.Jumsu3("NolBu", 100, 90, 80);
    var hungbu = new A08_JumsuTwo_1.Jumsu2("HungBu", 90, 80);
    var jumsuAry = [hong, nolbu, hungbu];
    for (var _i = 0, jumsuAry_1 = jumsuAry; _i < jumsuAry_1.length; _i++) {
        var item = jumsuAry_1[_i];
        item.getTotal();
        if (item instanceof A08_JumsuTwo_1.Jumsu2) {
            item.getAvg(2);
        }
        else if (item instanceof A08_JumsuThree_1.Jumsu3) {
            item.getAvg(3);
        }
        console.log(item.display());
    }
})(A08Main || (A08Main = {}));
//# sourceMappingURL=A08_Main.js.map