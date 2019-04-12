// a01_score.ts
namespace Test {

    class Score {
        private name: string;
        private kor: number;
        private eng: number;
        private total: number;
        private avg: number;

        constructor(name: string, kor: number, eng: number) {
            this.name = name;
            this.kor = kor;
            this.eng = eng;
            // total, avg 초기화
            this.total = 0;
            this.avg = 0;
        }

        public getTotal(): number {
            this.total = this.kor + this.eng;
            return this.total;
        }

        public getAvg(x: number): number {
            this.avg = this.total / x;
            return this.avg;
        }

        public display(): string {
            return ` 이름: ${this.name}\n 총점: ${this.total}\n 평균: ${this.avg}`
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
}

// tsc a01_score.ts ==> 컴파일 js로 변환