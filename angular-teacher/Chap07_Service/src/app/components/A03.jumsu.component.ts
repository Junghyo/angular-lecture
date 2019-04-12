import { Component } from '@angular/core';
import { JumsuDAOService } from '../service/A02_JumsuDAO.service';
import { JumsuVO } from '../service/A03_JumsuVO.service';

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
    // app.module에서 사용할 서비스 정의 함
})
export class A03Component{

    // public nolbu: JumsuVO;
    // public hongbu: JumsuVO;

    public vo: JumsuVO[] = [];
    public result: string[] = [];

    constructor(private dao: JumsuDAOService){
        // this.nolbu = new JumsuVO("놀부", 100, 80);
        // this.hongbu = new JumsuVO("흥부", 90, 80);
    }

    ngOnInit(): void {
        this.vo.push( new JumsuVO("놀부", 100, 80) );
        this.vo.push( new JumsuVO("흥부", 90, 80) );

        for(let item of this.vo){
            this.dao.getTotal(item);
            this.dao.getAvg(item);
            this.result.push( this.dao.display(item) )
        }
    }

}