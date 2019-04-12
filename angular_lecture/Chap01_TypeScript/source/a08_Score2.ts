import { ImplScore } from "./a08_ImplScore";

export class Score4 extends ImplScore {
    private java: number;

    constructor(name: string, kor: number, eng: number, java: number) {
        super(name, kor, eng);
        this.java = java;
    }
    
    public getTotal(): number {
        this.total = this.kor + this.eng + this.java;
        return this.total;
    }

    public display(): string {
        return `name: ${this.name}\ntotal: ${this.total}\navg: ${this.avg}`;
    }
}