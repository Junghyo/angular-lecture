import { Injectable } from '@angular/core';
import { ScoreVO } from './a03.score.vo.service';
import { ScoreDAO } from './a02.scroe.dao.service';

// rxjs 5버전(Angular 5까지)과 6버전(Angular 6부터)의 import 방식이 틀림
import { Observable } from 'rxjs';

@Injectable()
export class ObservableService {
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

    public getData() {
        setTimeout( () => {
            return this.result;
        }, 1000)
        
        return "nothing...."
    }

    public getResult(check: boolean): Observable<string[]> {
        return new Observable<string[]>( (observer) => {
            setTimeout( () => {
                if(check) {
                    observer.next(this.result);
                } else {
                    observer.error("error message");
                }
            }, 1500)
        })
    }
}