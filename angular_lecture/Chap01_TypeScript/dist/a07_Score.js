"use strict";
// a06_Class.ts
Object.defineProperty(exports, "__esModule", { value: true });
class Score2 {
    // kor. 일반적 메서드
    getKor() {
        return this.kor;
    }
    setKor(kor) {
        this.kor = kor;
    }
    // Getter, Setter 메서드
    // 사용은 프로퍼티(멤버변수)처럼 호출해서 사용
    get eng() {
        return this._eng;
    }
    // 반환타입을 절대 적지 않음.
    set eng(eng) {
        this._eng = eng;
    }
    constructor(name, kor, eng) {
        this.name = name;
        this.kor = kor;
        this._eng = eng;
        // total, avg 초기화
        this.total = 0;
        this.avg = 0;
    }
    getTotal() {
        this.total = this.kor + this._eng;
        return this.total;
    }
    getAvg(x) {
        this.avg = this.total / x;
        return this.avg;
    }
    display() {
        return ` 이름: ${this.name}\n 총점: ${this.total}\n 평균: ${this.avg}`;
    }
}
exports.Score2 = Score2;
//# sourceMappingURL=a07_Score.js.map