"use strict";
// a07_Extends.ts
Object.defineProperty(exports, "__esModule", { value: true });
const a07_Score_1 = require("./a07_Score");
class ScoreThree extends a07_Score_1.Score2 {
    constructor(name, kor, eng, java) {
        super(name, kor, eng);
        this.java = java;
    }
    // method override
    getTotal() {
        this.total = this.getKor() + this.eng + this.java;
        return this.total;
    }
}
let yoda = new ScoreThree("yoda", 100, 90, 90);
yoda.getTotal();
yoda.getAvg(3);
console.log(yoda.display());
//# sourceMappingURL=a07_Extends.js.map