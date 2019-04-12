// A02_JumsuDAO.service.ts

import { Injectable } from '@angular/core';
import { JumsuVO } from './A02_JumsuVO.service';
import { DecimalPipe } from '@angular/common';

@Injectable()
export class JumsuDAOService {

    constructor(private decimal: DecimalPipe){}

    public getTotal(vo: JumsuVO): number {
        vo.total = vo.kor + vo.eng;
        return vo.total;
    }

    public getAvg(vo: JumsuVO): number {
        let value = this.decimal.transform(vo.total / 3, '1.2-2')
        vo.avg = parseFloat(value);
        return vo.avg;
    }

    public display(vo: JumsuVO): string {
        return `${vo.name}님의 총점은 ${vo.total}이고 평균은 ${vo.avg}`;
    }
}