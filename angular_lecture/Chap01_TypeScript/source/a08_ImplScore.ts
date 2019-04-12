import InterScore from "./a08_Interface";

// 추상클래스, typescript 전용 문법
export abstract class ImplScore implements InterScore {
    // override
    name: string;
    public kor: number;
    public eng: number;
    public total: number = 0;
    public avg: number = 0;

    constructor(name: string, kor: number, eng: number) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }

    // public getTotal(): number {
    //     this.total = this.kor + this.eng;
    //     return this.total;
    // }

    public getAvg(x: number): number {
        this.avg = this.total / x;
        return this.avg;
    }


    // 구현하지 않은 메서드
    public abstract getTotal(): number;
    public abstract display(): string;
}