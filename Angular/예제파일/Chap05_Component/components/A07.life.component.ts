import { Component } from '@angular/core';

@Component({
    selector: 'a07OneComponent',
    template: `
        <div class="card-body">
            <h4>A07 One</h4>

        </div>
    `
})
export class A07OneComponent {
    public age: number = 50;

}

@Component({
    selector: 'a07Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>A07 Component</h3>
            </div>
            <div class="card-body">
                <input type="number" class="form-control" [(ngModel)]="age">
            </div>
        </div>
        
    `
})
export class A07Component {
    public age: number = 20;

    constructor(){
        console.log(`A07 Parent Constructor => ${this.age}`);
    }
    
}