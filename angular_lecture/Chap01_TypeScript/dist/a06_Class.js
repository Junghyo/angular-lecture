"use strict";
// a06_Class.ts
let num = 10;
const PI = 3.14;
function getName() {
    return 'hong-gildong';
}
class Score {
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
let hong = new Score("Hong", 100, 90);
hong.getTotal();
hong.getAvg(2);
console.log(hong.display());
// console.log(hong.kor);
console.log(hong.name);
// 일반 메서드
hong.setKor(10);
console.log(hong.getKor());
// Getter, Setter 메서드
hong.eng = 30;
console.log(hong.eng);
//# sourceMappingURL=a06_Class.js.map