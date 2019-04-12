import { ImplScore } from "./a08_ImplScore";

export class Score3 extends ImplScore {
    
    constructor(name: string, kor: number, eng: number) {
        super(name, kor, eng);
    }

    public getTotal(): number {
        this.total = this.kor + this.eng;
        return this.total;
    }

    public display(): string {
        return `name: ${this.name}\ntotal: ${this.total}\navg: ${this.avg}`;
    }
}