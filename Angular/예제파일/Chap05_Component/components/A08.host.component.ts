import { Component } from '@angular/core';

@Component({
    selector: 'a08OneComponent',
    template: `
        <div class="card-body">
            <div class="first">First Child Component</div>
            <div class="second">First Child Component</div>
        </div>
        <br>
        <br>
    `
})
export class A08OneComponent {

}

@Component({
    selector: 'a08Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>8. Host, Host deep, Host Context</h3>
            </div>

            <div class="card-body">
                <span>This is A08 Component.</span>

                <br>
                
            </div>
        </div>
    `
})
export class A08Component {

}