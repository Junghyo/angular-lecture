// A01.child.component
import { Component } from '@angular/core';

@Component({
    selector: 'a01ChildComp',
    template: `
        <div class="card-body box">
            <h3>Child Component</h3>
            <span>Child Component Content</span>

            <a01GrandComp></a01GrandComp>
            <a01GrandComp></a01GrandComp>
        </div>
    `,
    styles: [`
        .box { border: 1px solid green; padding:10px; margin:10px; width:70%; height:70%; text-align:center; }
    `]
})
export class A01ChildComponent { }


