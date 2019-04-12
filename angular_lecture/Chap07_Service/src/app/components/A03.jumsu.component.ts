import { Component } from '@angular/core';
import { ScoreDAO } from '../service/a02.scroe.dao.service';
import { ScoreVO } from '../service/a03.score.vo.service';

@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. Custom Service - 생성자 있음</h3>
            </div>

            <div class="card-body">
                <span *ngFor="let item of result">{{item}}<br></span>
            </div>
        </div>
    `
    // providers는 app.module에 정의함
})
export class A03Component{
    public janny: ScoreVO;
    public gimmy: ScoreVO;

    public vo: ScoreVO[] = [];
    public result: String[] = [];

    constructor(private dao: ScoreDAO) {
        // this.janny = new ScoreVO("janny", 100, 80, 2);
        // this.gimmy = new ScoreVO("gimmy", 90, 45, 2);
    }

    ngOnInit(): void {
        this.vo.push(new ScoreVO("janny", 100, 80));
        this.vo.push(new ScoreVO("gimmy", 90, 45));

        for(let item of this.vo) {
            this.dao.getTotal(item);
            this.dao.getAvg(item, 2);
            this.result.push(this.dao.display(item));

        }
    }
}