import { Component } from '@angular/core';
import { HelloService } from '../service/A01_Hello.service';
import { HiService } from '../service/A01_Hi.service';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>1. Custom Service</h3>
            </div>

            <div class="card-body">
                Hello Service<br>
                Age: {{nolbuAge}}<br>
                User: {{hs.user.tel}}, {{hs.user.add}}<br>
                Method: {{hs.getGreet('NolBu')}} 
            </div>

            <div class="card-body">
                Hi Service<br>
                Age: {{hi.age}}<br>
                User: {{hi.user.tel}}, {{hi.user.add}}<br>
                Method: {{hi.getGreet('NolBu')}} 
            </div>
        </div>
    `,
    // 사용할 서비스 객체 생성
    providers: [ HiService ]
})
export class A01Component{
    public nolbuAge: number;

    public hs: HelloService = new HelloService();

    // 매개변수에 접근제한자가 붙으면 멤버변수를 동일한 이름으로 생성하고
    // this.hi = hi 형태로 대입까지 해 줌
    constructor(public hi: HiService){ }
    
    ngOnInit(): void {
        this.nolbuAge = this.hs.age;
    }

}
