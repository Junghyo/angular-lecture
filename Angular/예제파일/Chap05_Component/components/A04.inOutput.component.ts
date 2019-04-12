import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'a04OneComponent',
    template: `
    <div class="card-body">
        <h4>A04 One Component</h4>

    </div>
    `
})
export class A04OneComponent {
    public name: string = 'HongGilDong';
    public obj: any = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One','Two','Three'];
    public age: number = 20;
    public company: string = 'Multi';

}

@Component({
    selector: 'a04TwoComponent',
    template: `
        <div class="card-body">
            <h4>A04 Two Component</h4>

            <div class="card-body">
                Name: <br>
                Obj: <br>
                Ary: 
            </div>
        </div>
    `
})
export class A04TwoComponent {

}

@Component({
    selector: 'a04Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>4. 형제 Component간 Data 전달</h3>
            </div>

            <div class="card-body">
                <a04OneComponent></a04OneComponent>
                <a04TwoComponent></a04TwoComponent>
            </div>
        </div>
    `
})
export class A04Component {

}
