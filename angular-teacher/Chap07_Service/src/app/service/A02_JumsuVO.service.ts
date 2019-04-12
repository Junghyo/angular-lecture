// A02_JumsuVO.service.ts

import { Injectable } from '@angular/core';

@Injectable()
export class JumsuVO {
    public name: string;
    public kor: number;
    public eng: number;
    public total: number;
    public avg: number;

    public toString(): string {
        return `[JumsuVO] name=${this.name}, kor=${this.kor}, eng=${this.eng}, total=${this.total}, avg=${this.avg}`;
    }

}