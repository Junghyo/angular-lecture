
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
@Component({
    selector: 'a07Component',
    template: `
    <div class="card-body">
        <div class="card-heading">
            <h3>7. Observable Event Demo</h3>
        </div>

        <div class="card-body">
            <input type="text" class="form-control" placeholder="Enter stock" [formControl]="search">
        </div>
    </div>
    `,
})
export class A07Component  { 

    public search: FormControl = new FormControl('default');

    ngOnInit(): void {
        // observable 객체로 던짐
        console.log(this.search);
        this.search.valueChanges
        // 가공자 로직별로 묶을 수 있음. 필요시 해당 가공자만 제거하면 됨
        .pipe(
            // arrow 함수. return  생략
            map( (data: string) => data.toUpperCase() )
        )
        .pipe(
            map( (data:string) =>{
                let value = data.split("").reverse();
                return value.join("");
            })
        )
        .subscribe(
            (data: string) => {
                console.log(data);
            },
            (error: any) => {
                console.log(error);
            }
        )
    }
}