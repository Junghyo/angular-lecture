
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>1. HTTP Service - Promise</h3>
            </div>
            <div class="card-body">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Expiry</th>
                    <tr>
                    <!-- for(let item of productData"){ -->
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
})
export class A01Component  { 

    // 전체 데이터
    public productData: string[];

    // 한 줄 데이터를 저장할 변수
    public product: any;
   
    constructor(private http: HttpClient){ }

    public getData(): void {
        this.http.get("assets/resources/productData.json")
        .toPromise()        // Observable => Promise로 변경
        .then(
            (data: string[]) => {
                // console.log(data);
                this.productData = data;
            },
            (error: HttpErrorResponse) => {
                console.log(error.status);
            }
        )
    }

    public getItem(item: any): void {
        this.product = item;
    }
}