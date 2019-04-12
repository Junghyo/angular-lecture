
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from "rxjs/operators";

@Component({
    selector: 'a07Component',
    template: `
    <div class="card-body">
        <div class="card-heading">
            <h3>7. Observable Event Demo</h3>
        </div>

        <div class="card-body">
            <input type="text" class="form-control" 
                placeholder="Enter stock"
                [formControl]="search">
        </div>
    </div>
    `,
})
export class A07Component  { 
    
    public search: FormControl = new FormControl('');

    ngOnInit(): void {
        // console.log(this.search);

        this.search.valueChanges

        .pipe(
            map( (data: string) => data.toUpperCase() )
        )

        .pipe(
            map( (data:string) => {
                let value = data.split("").reverse();
                return value.join('');
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