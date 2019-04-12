import { Component } from '@angular/core';

@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. Directive HostListener</h3>
            </div>

            <div class="card-body">
                <div [a03OneDir]="'orange'">Directive Attribute</div>
                <p [a03OneDir]="'green'">Native Attribute</p>
            </div>
        </div>
    `
})
export class A03Component {

}
