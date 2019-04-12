import { Component, OnInit } from '@angular/core';
import { InvokeService } from './service/invoke.service';

@Component({
    selector: 'app-invoke02',
    template: `
        <div class="card-body">
            <h3>A02 Invoke</h3>
        </div>
        <div class="card-body">
            Qty: <input type="text" class="form-control" [(ngModel)]="qty"/><br/>
            Cost: <input type="text" class="form-control" [(ngModel)]="cost"/><br/>
            Country:
            <select class="form-control" [(ngModel)]="inCurr">
                <option *ngFor="let item of currencies">{{item}}</option>
            </select>
            <br/>
            Total: <span *ngFor="let item of currencies">{{getTotal(item) | currency : item : 'symbol-narrow' : '1.2'}} &nbsp; </span>
        </div>
    `,
    styles: [``],
    providers: [ InvokeService ] 
})
export class A02InvokeComponent {
    public qty: number = 3;
    public cost: number = 5;
    public inCurr: string = "USD";
    
    public currencies: string[] = this.invoke.currencies;
    
    public rate : {[key: string]: number} = this.invoke.rate;

    public getTotal(outCurr: string) {
        // return this.cost * this.qty * this.rate[outCurr] / this.rate[this.inCurr];
        return this.invoke.convertRate(this.qty * this.cost, outCurr, this.inCurr);
    }
    
    // 주입
    constructor(private invoke: InvokeService) { }

    ngOnInit(): void { }
}
