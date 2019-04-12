import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'a05OneComponent',
    template: `
        <div class="card-body">
            <h4>A05 One Component</h4>

            Name: <input type="text" class="form-control" [(ngModel)]="name">
            Age: <input type="text" class="form-control" [(ngModel)]="age">
            ID: <input type="text" class="form-control" [(ngModel)]="user.id">
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
        // console.log(name);
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
                <a05OneComponent #one></a05OneComponent>
            </div>
            <div class="card-body">
                리퍼런스를 직접 참조<br/>
                Name: {{oneComp.name}}<br/>
                Age: {{oneComp.age}}<br/>
                ID: {{oneComp.user.id}}<br/>
                Greet: {{oneComp.greet("yoda")}}
            </div>
            <div class="card-body">
                내부 변수 참조<br/>
                Name: {{name}}<br/>
                Age: {{age}}<br/>
                ID1: {{user.id}}<br/>
                ID2: {{id}}<br/>
                Greet1: {{fn("yoda1")}}<br/>
                Greet2: {{fn1("yoda2")}}
            </div>
        </div>
    `
})
export class A05Component {
    
    public name: string;
    public age: number;
    public user: { id: number, name: string };
    public id: number;

    public fn: (x: string) => string;
    public fn1(x: string) {
        return x;
    }

    // template tag에 달아놓은 #one => A05OneComponent one = new A05OneComponent()
    @ViewChild('one') oneComp: A05OneComponent;

    ngOnInit(): void {
        // console.log(this.oneComp);
        this.name = this.oneComp.name;
        this.age = this.oneComp.age;
        this.user = this.oneComp.user;
        this.fn = this.oneComp.greet;
        this.id = this.oneComp.user.id;
    }
}
