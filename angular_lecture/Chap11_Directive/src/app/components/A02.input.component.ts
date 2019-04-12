import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. Directive Input</h3>
            </div>

            <div class="card-body">
                <div [a02OneDir]="name" [age]="age" [info]="info">One Dir</div>
            </div>
            
        </div>
    `
})
export class A02Component {
    public name: string = 'HongGilDong';
    public age: number = 20;
    public info: {address: string, tel: string} = {
        address: 'Seoul',
        tel: '010-1111-2222'
    }
}