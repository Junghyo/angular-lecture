import { Injectable } from '@angular/core';

@Injectable()
export class ScoreVO {
    public name: string;
    public kor: number;
    public eng: number;
    public total: number;
    public avg: number;
    
    public toString(): string {
        return `[ScoreVO] name=${this.name}, kor=${this.kor}, eng=${this.eng}, 
                total=${this.total}, avg=${this.avg}`
    }
}