import { Component } from '@angular/core';
import { PromiseService } from '../service/A05_promise.service';

@Component({
    selector: 'a05Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>Jumsu Service</h3>
            </div>

            <div class="card-body">
                <span *ngFor="let item of data">{{item}}<br></span>
            </div>
        </div>
    `,
    providers: [PromiseService]
})
export class A05Component{

    public data: string[];
    
    constructor(private promise: PromiseService){}

    ngOnInit(): void {
        // console.log(this.promise.getData());

        this.promise.getResult(true)
        .then(
            // 성공시 실행할 함수
            (data: string[]) => {
                // console.log(data);
                this.data = data;
            }, 
            // 실패시 실행할 함수
            (error: string) => {
                console.log(error);
            }
        )
    }
}
