import { Component } from '@angular/core';

@Component({
    selector: 'a02OneComponent',
    template: `
        <div class="panel-body">
            <div class="card-body">
                <h4>하위 컴퍼넌트</h4>
                Normal: <br>
                Name: <br>
                Object: <br>
                Array: <br>

                Age: <br>
                Company: <br>
            </div>
        </div>
    `
})
export class A02OneComponent { }

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. 하위 Component에 Data 전달</h3>
            </div>
            <div class="card-body">
                <div>
                    <label>Name</label>
                    <input type="text" class="form-control">
                </div>
                <div>
                    <label>Obj</label>
                    <input type="text" class="form-control">
                </div>
                <div>
                    <label>Ary</label>
                    <input type="text" class="form-control">
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" class="form-control">
                </div>
                <div>
                    <label>Company</label>
                    <input type="text" class="form-control">
                </div>
            </div>

            <a02OneComponent></a02OneComponent>
        </div>
    `
})
export class A02Component {
    public name: string = 'HongGilDong';
    public obj: any = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One','Two','Three'];
    public age: number = 20;
    public company: string = 'Multi';

}
