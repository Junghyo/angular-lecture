import { Component } from '@angular/core';

@Component({
    selector: 'a01ChildComponent',
    template: `

        
        <div class="card-body box">
            <h3>Child Component</h3>
            <span>Child Component Content</span>
            <a01GrandComponent></a01GrandComponent>
            <a01GrandComponent></a01GrandComponent>
            <!-- 서로 참조를 하면 안됨. 
            <a01Component></a01Component>
            -->
        </div>
    `,
    styles: [`
        .box { color: green; border: 1px solid green; padding:10px; margin:10px; width:70%; height:70%; text-align:center; }
    `]
})
export class A01ChildComponent { }


