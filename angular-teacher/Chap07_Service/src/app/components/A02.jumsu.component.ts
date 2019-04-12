import { Component } from '@angular/core';
import { JumsuVO } from "./../service/A02_JumsuVO.service";
import { JumsuDAOService } from '../service/A02_JumsuDAO.service';
@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. Custom Service - 생성자 없음</h3>
            </div>

            <div class="card-body">
                {{nolbu}}<br>
                {{hungbu}}
            </div>
        </div>
    `,
    // app.module에 JumsuDAOService를 정의함
    providers: [ JumsuVO, /*JumsuDAOService*/ ]
})
export class A02Component{
    public nolbu: string;
    public hungbu: string;

    constructor(private vo: JumsuVO, private dao: JumsuDAOService){}

    ngOnInit(): void {
        this.vo.name = "NolBU";
        this.vo.kor = 100;
        this.vo.eng = 90;
        this.dao.getTotal(this.vo);
        this.dao.getAvg(this.vo);
        this.nolbu = this.dao.display(this.vo);

        this.vo.name = "Hungbu";
        this.vo.kor = 90;
        this.vo.eng = 90;
        this.dao.getTotal(this.vo);
        this.dao.getAvg(this.vo);
        this.hungbu = this.dao.display(this.vo);
    }
}