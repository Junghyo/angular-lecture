import { Injectable } from '@angular/core';
import { ScoreVO } from './a02.score.vo.service';
import { DecimalPipe } from '@angular/common';

@Injectable()
export class ScoreDAO {
    
    constructor(private decimal: DecimalPipe) { }

    public getTotal(vo: ScoreVO): number {
        vo.total = vo.kor + vo.eng;
        return vo.total;
    }

    public getAvg(vo: ScoreVO, x: number): number {
        vo.avg = parseFloat(this.decimal.transform(vo.total / x, '1.2-2'));
        return vo.avg;
    }

    public display(vo:ScoreVO): string {
        return `${vo.name}님의 총점은 ${vo.total}이고 평균은 ${vo.avg}입니다.`;
    }
}