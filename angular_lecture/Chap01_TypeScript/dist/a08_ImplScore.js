"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 추상클래스, typescript 전용 문법
class ImplScore {
    constructor(name, kor, eng) {
        this.total = 0;
        this.avg = 0;
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }
    // public getTotal(): number {
    //     this.total = this.kor + this.eng;
    //     return this.total;
    // }
    getAvg(x) {
        this.avg = this.total / x;
        return this.avg;
    }
}
exports.ImplScore = ImplScore;
//# sourceMappingURL=a08_ImplScore.js.map