import { Component } from '@angular/core';
import { HelloService } from '../service/a01.hello.service';
import { HiService } from '../service/a01.hi.service';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>1. Custom Service</h3>
            </div>

            <div class="card-body">
                Hello Service<br/>
                Age : {{yodaAge}}<br/>
                User: {{helloService.user.tel}}, {{helloService.user.address}}<br/>
                Method: {{helloService.getGreet("yoda")}}
            </div>

            <div class="card-body">
            Hi Service<br/>
            Age : {{hiService.age}}<br/>
            User: {{hiService.user.tel}}, {{helloService.user.address}}<br/>
            Method: {{hiService.getGreet("yoda")}}
        </div>
        </div>
    `,
    // 사용할 서비스 객체 생성
    providers: [ HiService ]
})
export class A01Component{
    public yodaAge: number;
    public helloService: HelloService = new HelloService();
    
    // 매개변수에 접근제한자가 붙으면 멤버변수를 동일한 이름으로 생성하고
    // this.hi = hi 형태로 대입까지 해 줌 
    constructor(public hiService: HiService) { }

    ngOnInit(): void {
        this.yodaAge = this.helloService.age;
    }
}
