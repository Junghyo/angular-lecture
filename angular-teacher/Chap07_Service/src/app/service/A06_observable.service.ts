// A06_observable.service

import { Injectable } from '@angular/core';
import { JumsuVO } from './A03_JumsuVO.service';
import { JumsuDAOService } from './A02_JumsuDAO.service';

// rxjs 5 버전 => Angular 2 ~ Angular 5
// rxjs 6 버전 => Angular 6 부터
// 두 버전의 import 방식이 틀림
import { Observable } from 'rxjs';

@Injectable()
export class ObservableService {
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

    public getResult(check: boolean): Observable<string[]>{
        
        return new Observable<string[]>( (observer) => {
            setTimeout( () => {
                if(check){
                    let ary = ["10", "20", "30", "40", "50"]
                    observer.next(this.result);
                    // observer.next(ary);
                }else{
                    observer.error("Error 메시지");
                }
            }, 1500)
        })
    }
}