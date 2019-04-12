import { Component } from '@angular/core';

@Component({
    selector: 'a01GrandComponent',
    template: `

        
        <div class="card-body box">
            <h3>Grand Component</h3>
            <span>Grand Component Content</span>
        </div>
    `,
    styles: [`
        .box { color: orange; border: 1px solid orange; padding:10px; margin:10px; width:70%; height:70%; text-align:center; }
    `]
})
export class A01GrandComponent { }


