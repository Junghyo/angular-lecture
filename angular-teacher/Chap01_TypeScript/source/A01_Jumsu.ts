// A01_Jumsu.ts
namespace Test{
    class Jumsu{
        private name: string;
        private kor: number;
        private eng: number;
        private total: number;
        private avg: number;

        constructor(name: string, kor: number, eng: number) {
            this.name = name;
            this.kor = kor;
            this.eng = eng;
            this.total = 0;
            this.avg = 0;
        }

        public getTotal(): number{
            this.total = this.kor + this.eng;
            return this.total;
        }

        public getAvg(x: number): number {
            this.avg = this.total / x;
            return this.avg;
        }

        public display(): string {
            return `${this.name}님의의 총점은 ${this.total}이고 평균은 ${this.avg}`
        }
    }

    let nolbu = new Jumsu("놀부", 100, 90);
    nolbu.getTotal();
    nolbu.getAvg(2);

    let result = nolbu.display();
    console.log(result);


    let hungbu = new Jumsu("흥부", 50, 80);
    hungbu.getTotal();
    hungbu.getAvg(2);

    let result1 = hungbu.display();
    console.log(result1);
}