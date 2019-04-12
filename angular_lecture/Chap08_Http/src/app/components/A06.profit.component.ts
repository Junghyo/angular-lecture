import { Component } from '@angular/core';
import { ProfitService } from '../service/a06.profit.service';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'a06Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>
                    6. HTTP Service
                    <span class="label label-primary">profit</span>
                </h3>
            </div>

            <div class="card-body form-inline">
                <div class="form-group">
                    <select class="form-control" [formControl]="search">
                        <option value="All">All</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                    </select>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" (click)="getProfit()">Change</button>
                </div>
            </div>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Profit</th>
                            <th>Expenses</th>
                            <th>Amount</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let item of profitList">
                            <td>{{item.year}}</td>
                            <td>{{item.month}}</td>
                            <td>{{item.profit}}</td>
                            <td>{{item.expenses}}</td>
                            <td>{{item.amount}}</td>
                            <td>
                                <a (click)="getItem(item)">{{item.comment}}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            
            </div>

            <div class="card-body">
                <textarea class="form-control" [disabled]>{{profit?.comment}}</textarea>
            </div>
        </div>
    `,
    providers: [ ProfitService ]
})
export class A06Component  { 

    public search: FormControl = new FormControl('All');

    public profitList: ProfitType[];

    public profit: ProfitType;

    private url: string = "http://70.12.50.190:8080/Profit/profitList";

    // 주입
    constructor(private profitService: ProfitService) { }

    public getProfit(): void { 
        this.profitService.getData(this.url, this.search.value)
        .subscribe(
            (data: ProfitType[]) => {
                this.profitList = data;
            },
            (error: string) => {
                alert(error);
            }
        )
    }

    public getItem(item: ProfitType): void {
        this.profit = item;
    }
    
}

interface ProfitType {
    year: string;
    month: string;
    profit: number;
    expenses: number;
    amount: number;
    comment: string;
}