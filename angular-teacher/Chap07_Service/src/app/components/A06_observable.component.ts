import { Component } from '@angular/core';
import { ObservableService } from '../service/A06_observable.service';

import { map, filter } from "rxjs/operators";

@Component({
    selector: 'a06Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>Jumsu Service</h3>
            </div>

            <div class="card-body">
                
            </div>

            <div class="card-body">
                <span></span>
            </div>
        </div>
    `,
    providers: [ObservableService]
})
export class A06Component{
    public data: string[];

    constructor(private service: ObservableService){}

    ngOnInit(): void {
        // 발행자
        this.service.getResult(true)
        .pipe(
            // 데이터가 배열 1개다. 따라서 필터링 할 것이 없음
            filter( (data: string[]) => {
                console.log("filter => ", data);
                return data.length === 5;
            }),
            map( (data: string[]) => {
                console.log("map =>", data);

                let five: string[] = [];

                for(let item of data){
                    if(item.indexOf('5') != -1){
                        five.push(item)
                    }
                }
                return five;
            }),
            map( (data: string[]) => {
                console.log("map => ", data);
                return data;
            })
        )

        // 수신자
        .subscribe(
            (data: any) => {
                console.log(data);
                this.data = data;
            },
            (error: string) => {
                console.log(error);
            }
        )
    }
}
