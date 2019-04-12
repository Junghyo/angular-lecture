import { Component } from '@angular/core';
import { ObservableService } from '../service/a06.observable.service';
import { map, filter } from 'rxjs/operators';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { ConcatSource } from 'webpack-sources';

@Component({
    selector: 'a06Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>6. Observable Service</h3>
            </div>

            <div class="card-body">
                
            </div>

            <div class="card-body">
                <span *ngFor="let item of data">{{item}}<br/></span>
            </div>
        </div>
    `,
    providers: [ ObservableService ]
})
export class A06Component{
    public data: string[];
    
    constructor(private observableService: ObservableService) { }

    ngOnInit(): void {
        // 발행자
        this.observableService.getResult(true)
        // 가공자
        .pipe(
            filter((data: string[]) => {
                console.log(`filter => ${data}`);
                return data.length === 5;
            }),
            map((data: string[]) => {
                    console.log("map1 =>", data);
                    let five: string[]= [];
                    for (let item of data){
                        if(item.indexOf('yoda') == -1){
                            five.push(item);
                        }
                    }
                    return five;
                }),
                map((data:string[]) => {
                    console.log("map2 =>", data);
                    return data;
                })
        )
        // 수신자
        .subscribe(
            (data: string[]) => {
                console.log(data);
                this.data = data;
            },
            (error: string) => {
                console.log(error);
            }
        )
    }
}
