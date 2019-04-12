import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-param',
    template: `
        <div class="card-body">
            <h3>Product Details for Product</h3>
            Data: {{num}}
        </div>
    `
})
export class ProductParamComponent{
    public num: number;

    constructor(private ac: ActivatedRoute) {
        console.log(ac);
    }

    ngOnInit(): void {
        // this.num = this.ac.snapshot.params['id'];
        this.ac.params
            .subscribe(
                (data: any) => {
                    this.num = data['id']
                },
                (error: any) => {
                    console.log(error);
                }
            )
    }

}