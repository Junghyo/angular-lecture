import { AJumsu } from "./A08_AJumsu";

// A08_JumsuTwo.ts

export class Jumsu2 extends AJumsu {
    constructor(name: string, kor: number, eng: number) {
        super(name, kor, eng);
    }

    public getTotal(): number {
        this.total = this.kor + this.eng;
        return this.total;
    };

    public display(): string {
        return `${this.name}님의의 총점은 ${this.total}이고 평균은 ${this.avg}`
    }
}