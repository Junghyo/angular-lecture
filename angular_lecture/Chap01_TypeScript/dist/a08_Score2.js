"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a08_ImplScore_1 = require("./a08_ImplScore");
class Score4 extends a08_ImplScore_1.ImplScore {
    constructor(name, kor, eng, java) {
        super(name, kor, eng);
        this.java = java;
    }
    getTotal() {
        this.total = this.kor + this.eng + this.java;
        return this.total;
    }
    display() {
        return `name: ${this.name}\ntotal: ${this.total}\navg: ${this.avg}`;
    }
}
exports.Score4 = Score4;
//# sourceMappingURL=a08_Score2.js.map