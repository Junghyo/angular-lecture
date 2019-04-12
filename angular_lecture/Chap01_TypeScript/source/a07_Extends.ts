// a07_Extends.ts

import { Score2 } from "./a07_Score";

class ScoreThree extends Score2 {
    private java: number;

    constructor(name: string, kor: number, eng: number, java: number) {
        super(name, kor, eng);
        this.java = java;
    }

    // method override
    public getTotal(): number {
        this.total = this.getKor() + this.eng + this.java;
        return this.total;
    }
}

let yoda = new ScoreThree("yoda", 100, 90, 90);
yoda.getTotal();
yoda.getAvg(3);
console.log(yoda.display());