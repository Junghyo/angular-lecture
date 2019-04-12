// A04_mock.service.ts

import { Injectable } from '@angular/core';
import { JumsuVO } from './A03_JumsuVO.service';
import { JumsuDAOService } from './A02_JumsuDAO.service';

@Injectable()
export class MockService {
    private students: {name: string, kor: number, eng: number}[] = [
        {name: 'NolBu', kor: 100, eng: 80},
        {name: 'HungBu', kor: 90, eng: 80},
        {name: '홍길동', kor: 80, eng: 80},
        {name: '성춘향', kor: 70, eng: 80},
        {name: '이몽룡', kor: 60, eng: 80}
    ];


    private vo: JumsuVO[] = [];
    private result: string[] = [];

    constructor(private dao: JumsuDAOService){
        // console.log("A04 MockService");

        for(let item of this.students){
            this.vo.push( new JumsuVO(item.name, item.kor, item.eng) )
        }

        this.setResult();
    }

    /* 컴포넌트가 아님. 라이프 사이클 메서드 없음
    ngOnInit(): void {
        console.log("INIT");
    }
    */

    public setResult(): void {
        for(let item of this.vo){
            this.dao.getTotal(item);
            this.dao.getAvg(item);
            this.result.push( this.dao.display(item) )
        }
    }

    public getData(): {name: string, kor: number, eng: number}[] {
        return this.students;
    }

    public getResult(): string[]{
        
        return this.result;
    }
}