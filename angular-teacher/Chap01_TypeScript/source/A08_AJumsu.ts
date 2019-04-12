// A08_AJumsu.ts

import IJumsu from "./A08_IJumsu";

// 추상클래스. TypeScript 문법
export abstract class AJumsu implements IJumsu {
    name: string;
    public kor: number;
    public eng: number;
    public total: number = 0;
    public avg: number = 0;

    constructor(name: string, kor: number, eng: number){
        this.name = name;
        this.eng = eng;
        this.kor = kor;
    }

    public getAvg(x: number): number {
        this.avg = this.total + x;
        return this.avg;
    }

    // 구현하지 않은 메서드
    public abstract getTotal(): number;
    public abstract display(): string;
}