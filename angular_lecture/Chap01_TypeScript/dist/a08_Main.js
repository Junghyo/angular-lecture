"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a08_Score_1 = require("./a08_Score");
const a08_Score2_1 = require("./a08_Score2");
var A08Main;
(function (A08Main) {
    let yoda = new a08_Score_1.Score3("yoda", 90, 100);
    let hong = new a08_Score2_1.Score4("gildong", 100, 50, 70);
    let kim = new a08_Score_1.Score3("jiseok", 30, 50);
    let scoreArry = [yoda, hong, kim];
    for (let item of scoreArry) {
        item.getTotal();
        if (item instanceof a08_Score_1.Score3) {
            item.getAvg(2);
        }
        else if (item instanceof a08_Score2_1.Score4) {
            item.getAvg(3);
        }
        console.log(item.display());
    }
})(A08Main || (A08Main = {}));
//# sourceMappingURL=a08_Main.js.map