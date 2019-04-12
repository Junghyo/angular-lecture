"use strict";
// a01_score.ts
var Test;
(function (Test) {
    class Score {
        constructor(name, kor, eng) {
            this.name = name;
            this.kor = kor;
            this.eng = eng;
            // total, avg 초기화
            this.total = 0;
            this.avg = 0;
        }
        getTotal() {
            this.total = this.kor + this.eng;
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
    let yoda = new Score("요다", 100, 100);
    yoda.getTotal();
    yoda.getAvg(2);
    let result = yoda.display();
    console.log(result);
    let seo = new Score("서정효", 50, 95);
    seo.getTotal();
    seo.getAvg(2);
    let result2 = seo.display();
    console.log(result2);
})(Test || (Test = {}));
// tsc a01_score.ts ==> 컴파일 js로 변환
//# sourceMappingURL=a01_score.js.map