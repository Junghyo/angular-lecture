"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a08_ImplScore_1 = require("./a08_ImplScore");
class Score3 extends a08_ImplScore_1.ImplScore {
    constructor(name, kor, eng) {
        super(name, kor, eng);
    }
    getTotal() {
        this.total = this.kor + this.eng;
        return this.total;
    }
    display() {
        return `name: ${this.name}\ntotal: ${this.total}\navg: ${this.avg}`;
    }
}
exports.Score3 = Score3;
//# sourceMappingURL=a08_Score.js.map