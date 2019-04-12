import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <h3>1. 다른 컴퍼넌트의 포함 관계</h3>
        </div>
        
        <div class="card-body box">
            <h3>Parent Component</h3>
            <span>Parent Component Content</span>
        </div>

        <div class="card-body">
            <a01ChildComponent></a01ChildComponent>
            <a01GrandComponent></a01GrandComponent>
        </div>
    `,
    styles: [`
        .box { border: 1px solid #666; padding:10px; margin:10px; width:70%; height:70%; text-align:center; }
    `]
})
export class A01Component { }


