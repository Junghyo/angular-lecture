import { Component } from '@angular/core';

@Component({
    selector: 'a05OneComponent',
    template: `
        <div class="card-body">
            <h4>A05 One Component</h4>

            Name: <input type="text" class="form-control">
            Age: <input type="text" class="form-control">
            ID: <input type="text" class="form-control">
        </div> 
    `
})
export class A05OneComponent {
    public name: string = 'Hong';
    public age: number = 20;
    public user: { id: number, name: string } = {
        id: 10,
        name: 'HongGilDong'
    }

    public greet(name: string): string {
        console.log(name);
        return name;
    }
}

@Component({
    selector: 'a05Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>5. ViewChild</h3>
            </div>
            <div class="card-body">
                <a05OneComponent></a05OneComponent>
            </div>
        </div>
    `
})
export class A05Component {

}
