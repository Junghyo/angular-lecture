
import { Component } from '@angular/core';
import { A03ProductService } from '../service/a03.product.service';
import { Observable } from 'rxjs';

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
                    <td><a (click)="getInfo(item)">{{item.name}}</a></td>
                    <td>{{item.category}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.expiry}}</td>
                </tr>
            </table>
            <br/>
            <textarea class="form-control">
                {{product?.name}}
                {{product?.category}}
            </textarea>
            <button class="btn btn-primary" (click)="getData()">Load</button>
        </div>

        <div class="card-body">
            
        </div>
    
    </div>
    `,
    // http.module.ts에서 정의 함
    providers: []
})
export class A03Component  { 
   
    public productData: string[];
    public product: Product;

    constructor(private a03Service: A03ProductService ) { }

    public getData(): void {
        this.a03Service.getProduct("assets/resources/productData.json")
        .subscribe(
            (data: string[]) => {
                this.productData = data;
            },
            (error: string) => {
                console.log(error);
            }
        )
    }

    public getInfo(item: Product): void {
        this.product = item;
    }
    
}

export interface Product {
        name: string;
        category: string;
        price: number;
        expiry: number;
}