// A07_Extends.ts

import { JumsuTwo } from './A07_Jumsu'

class JumsuThree extends JumsuTwo {
    private java: number;

    constructor(name: string, kor: number, eng: number, java: number){
        super(name, kor, eng);
        this.java = java;
    }

    // method override
    public getTotal(): number {
        this.total = this.getKor() + this.eng + this.java;
        return this.total;
    }
}

let nolbu = new JumsuThree("NolBu", 100, 90, 80);
nolbu.getTotal();
nolbu.getAvg(3);
console.log(nolbu.display());

