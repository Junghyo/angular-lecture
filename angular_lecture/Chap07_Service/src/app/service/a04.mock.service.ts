import { Injectable } from '@angular/core';
import { ScoreVO } from './a03.score.vo.service';
import { ScoreDAO } from './a02.scroe.dao.service';

@Injectable()
export class MockService {
    private students: {name: string, kor:number, eng:number}[] = [
        {name: "yoda", kor: 100, eng: 100},
        {name: "jun", kor: 60, eng: 80},
        {name: "kim", kor: 55, eng: 90},
        {name: "song", kor: 80, eng: 95},
        {name: "joo", kor: 90, eng: 75},
    ];

    private vo: ScoreVO[] = [];
    private result: string[] = [];

    constructor(private dao: ScoreDAO) { 
        for(let item of this.students) {
            this.vo.push(new ScoreVO(item.name, item.kor, item.eng));
        }
        this.setResult();
    }
    // 컴포넌트가 아님. 라이프 사이클 메서드 없음.
    // ngOnInit(): void {
    // }

    public setResult(): void {
        for(let item of this.vo) {
            this.dao.getTotal(item);
            this.dao.getAvg(item, 3);
            this.result.push(this.dao.display(item))
        }
    }

    public getData(): {name: string, kor: number, eng: number}[] {
        return this.students;
    }

    public getResult(): string[] {
        return this.result;
    }
}