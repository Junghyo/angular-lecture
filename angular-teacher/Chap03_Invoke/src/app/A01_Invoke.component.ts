// A01_Invoke.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-invoke01',
    template: `
        <div class="card-body">
            <h3>A01 Invoke</h3>
        </div>

        <div class="card-body">
            Qty: <input type="text" class="form-control" [(ngModel)]="qty"><br>
            Cost: <input type="text" class="form-control" [(ngModel)]="cost"><br>
            <br>
            Total: <span>{{qty * cost}}</span>
        </div>
    `,
    styles: [``]
})
export class A01InvokeComponent {
    public qty: number = 3;
    public cost: number = 5;

    constructor() { }

    ngOnInit(): void { }
}
