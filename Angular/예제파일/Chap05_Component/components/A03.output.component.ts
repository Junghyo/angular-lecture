import { Component } from '@angular/core';

@Component({
    selector: 'a03OneComponent',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>하위 컴퍼넌트</h3>
            </div>
            <div class="card-body">
                Name: <br>
                <button class="btn btn-primary btn-sm">Send Name</button> &nbsp; 
                <button class="btn btn-danger btn-sm">Send Object</button>
            </div>
            
        </div>
    `
})
export class A03OneComponent {
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
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. 상위 Component에 Data 전달</h3>
            </div>
            
            <div class="card-body">
                Name:<br>
                Obj: <br>
                Ary: 
            </div>

            <a03OneComponent></a03OneComponent>
        </div>
    `
})
export class A03Component {

}
