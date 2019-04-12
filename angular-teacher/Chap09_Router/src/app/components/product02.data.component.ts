import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// 128 page
@Component({
    selector: 'product-data',
    template: `
        <div class="card-body">    
            <h3>Product Data Component</h3>

            Num: {{num + 100}}<br>
            <hr>
            Data[0]: {{name}} / {{check}} / {{age + 100}}<br>
            Data[1]: {{obj.name}} / {{obj.isProd}} / {{obj.age}}<br>
        </div>
    `
})
export class ProductDataComponent{
    public num: number;
    public check: boolean;
    public name: string;
    public age: number;

    public obj: {isProd:boolean, name: string, age: number};

    constructor(public ac: ActivatedRoute){}

    ngOnInit(): void {
        this.ac.params.subscribe(
            (data: any) => {

                // Guard 작업
                if(typeof data['num'] === 'number'){
                    this.num = data['num']
                }else if(typeof data['num'] === 'string'){
                    this.num = parseFloat(data['num'])
                }
                
            }
        );

        this.ac.data.subscribe(
            (data: Array<{isProd:boolean, name: string, age: number}>) => {
                this.name = data[0].name;
                this.check = data[0].isProd;
                this.age = data[0].age;

                this.obj = data[1];
            }
        )
    }
    
}