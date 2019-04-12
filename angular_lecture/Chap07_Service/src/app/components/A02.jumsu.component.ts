import { Component } from '@angular/core';
import { ScoreDAO } from '../service/a02.scroe.dao.service';
import { ScoreVO } from '../service/a02.score.vo.service';

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. Custom Service - 생성자 없음</h3>
            </div>

            <div class="card-body">
                {{yoda}}<br/>
                {{kim}}
            </div>
        </div>
    `,
    // app.module에 등록
    providers: [/*ScoreDAO*/ ScoreVO]
})
export class A02Component{
    public yoda: string;
    public kim: string;
    constructor(private vo: ScoreVO, private dao: ScoreDAO) {

    }

    ngOnInit(): void {
        this.vo.name = "yoda";
        this.vo.kor = 100;
        this.vo.eng = 95;
        this.dao.getTotal(this.vo);
        this.dao.getAvg(this.vo, 2);
        this.yoda = this.dao.display(this.vo);

        this.vo.name = "kim";
        this.vo.kor = 70;
        this.vo.eng = 75;
        this.dao.getTotal(this.vo);
        this.dao.getAvg(this.vo, 2);
        this.kim = this.dao.display(this.vo);
    }
}