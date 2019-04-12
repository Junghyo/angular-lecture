import { AJumsu } from "./A08_AJumsu";

// A08_JumsuThree

export class Jumsu3 extends AJumsu {
    private java: number;

    constructor(name: string, kor: number, eng: number, java: number) {
        super(name, kor, eng);
        this.java = java;
    }

    public getTotal(): number {
        this.total = this.kor + this.eng + this.java;
        return this.total;
    };

    public display(): string {
        return `${this.name}님의의 총점은 ${this.total}이고 평균은 ${this.avg}`
    }
}