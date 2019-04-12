
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>1. HTTP Service - Observable</h3>
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
})
export class A01Component  { 
    // 전체 데이터
    public productData: string[];

    // 한줄 데이터
    public product: {name: string, category:string, price: number, expiry: number};

    constructor(private http: HttpClient) { }

    public getData(): void {
        // observable 객체
        this.http.get("assets/resources/productData.json")
        .subscribe(
            (data: string[]) => {
                // console.log(data);
                this.productData = data;
            },
            (error: HttpErrorResponse) => {
                console.log(error.status, error.statusText);
            }
        )
    }

    public getInfo(item: {name: string, category:string, price: number, expiry: number}): void {
        this.product = item;
    }
}

