// A05_promise.service

import { Injectable } from '@angular/core';
import { JumsuVO } from './A03_JumsuVO.service';
import { JumsuDAOService } from './A02_JumsuDAO.service';

@Injectable()
export class PromiseService {
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
        for(let item of this.students){
            this.vo.push( new JumsuVO(item.name, item.kor, item.eng) )
        }

        this.setResult();
    }

    public setResult(): void {
        for(let item of this.vo){
            this.dao.getTotal(item);
            this.dao.getAvg(item);
            this.result.push( this.dao.display(item) )
        }
    }

    public getData() {
        setTimeout( () => {
            return this.result;
        }, 1000)

        return "nothing...."
    }


    public getResult(check: boolean): Promise<string[]>{
        
        return new Promise<string[]>( (resolve, reject) => {
            setTimeout( () => {
                if(check){
                    resolve(this.result);
                }else{
                    reject("Error 메시지");
                }
            }, 2000)
        })
    }
}