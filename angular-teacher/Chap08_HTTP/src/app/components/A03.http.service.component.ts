
import { Component } from '@angular/core';
import { A03ProductService } from '../service/A03.Proudct.service';

@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. HTTP Service - Service</h3>
            </div>
            <div class="card-body">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Expiry</th>
                    <tr>
                    <tr *ngFor="let item of productData">
                        <td><a (click)="getItem(item)">{{item.name}}</a></td>
                        <td>{{item.category}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.expiry}}</td>
                    </tr>
                    <!-- } -->
                </table>
                <button class="btn btn-primary" (click)="getData()">Load</button>
            </div>

            <div class="card-body">
                Name: {{product?.name}}<br>
                Category: {{product?.category}}
            </div>
        
        </div>
    `,
    // http.module에서 정의 함
    providers: []
})
export class A03Component  { 
    
    public productData: string[];
    public product: any;

    constructor(private service: A03ProductService){}

    public getData(): void {
        this.service.getProduct("assets/resources/productData.json")
        .subscribe(
            (data: string[]) => {
                this.productData = data;
            },
            (error: string) => {
                console.log(error);
            }
        )
    }

    public getItem(item: any): void {
        this.product = item;
    }

}