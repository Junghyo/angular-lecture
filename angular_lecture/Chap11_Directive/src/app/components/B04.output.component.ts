import { Component, Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[b04OneDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class B04OneDirective {
    
    public onClick(): void{

    }

    public obj: {message: string, user: {name: string, age: number}, getInfo: Function} = {
        message: 'B04 One Directive',
        user: {
            name: 'HongGilDong',
            age: 20
        },
        getInfo: function () {
            return this.user.name + ' - ' + this.user.age;
        }
    }
}

@Component({
    selector: 'b04Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>B04 Directive Output</h3>
            </div>

            <div class="card-body">
                <div>
                    <button class="btn btn-sm btn-primary">Click</button>
                </div>
                <br>
                
                <div>
                    Object: <br>
                    Message: <br>
                    Info: 
                </div>
            </div>
        </div>
    `
})
export class B04Component {

    public obj: {message: string, user: {name: string, age: number}, getInfo: Function};

    
}
