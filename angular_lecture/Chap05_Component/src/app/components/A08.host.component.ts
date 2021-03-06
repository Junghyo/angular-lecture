// p.304
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'a08OneComponent',
    template: `
        <div class="card-body">
            <h3>Host</h3>
            <div class="first">First Child Component</div>
            <div class="second">First Child Component</div>
        </div>
        <br>
        <br>
    `,
    styles: [`
        h3 { color: orange; }
        :host { display: block; border: 2px solid pink; }
        :host(:hover) { background-color: purple; }
        :host(:active) { background-color: black; }
        :host .first { color: brown; }
        :host /deep/ .second { color: yellow; }
    `]
})
export class A08OneComponent {

}

@Component({
    selector: 'a08Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3 class="first">8. Host, Host deep, Host Context</h3>
            </div>

            <div class="card-body">
                <span class="second">This is A08 Component.</span>

                <br>
                <a08OneComponent></a08OneComponent>
            </div>
        </div>
    `,
    styles: [`
        :host { display: block; border: 2px solid royalblue; }
        :host(:hover) { background-color: lightgrey; }
        :host(:active) { background-color: lightgreen; }
        :host .first { color: pink; }
        :host /deep/ .second { color: red; }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class A08Component {

}