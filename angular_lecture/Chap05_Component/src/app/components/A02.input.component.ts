import { Component, Input } from '@angular/core';

@Component({
    selector: 'a02OneComponent',
    template: `
        <div class="panel-body">
            <div class="card-body">
                <h4>하위 컴퍼넌트</h4>
                Normal: {{normal}}<br>
                Name: {{name}}<br>
                Object: {{obj.tel}}<br>
                Array: {{ary}}<br>

                Age: {{age + 100}}<br>
                Company: {{company}}<br>
            </div>
        </div>
    `
})
export class A02OneComponent { 
    // 속성으로 전달된 값은 @Input()으로 받는다.
    // @Input("전달된 속성명") 사용할 변수명: 타입
    // []을 사용하지 않고 전달된 속성은 정의를 안해도 에러 아님.
    @Input('normal') normal: string;

    // []을 사용하여 전달된 속성은 꼭 정의를 해야 한다.
    // 속성명은 정의한 변수명과 동일하면 생략 가능.
    @Input() name: string;
    @Input() obj: objType;
    @Input() ary: string[];
    @Input('comp') company: string;
    //@Input() age: number;

    private _age: number;
    @Input('age')
    public set age(age: number) {
        console.log(typeof age);
        if(typeof age ==='string') {
            this._age = Number(age);
        } else {
            this._age = age;
        }
    }

    public get age(): number {
        return this._age;
    }
}

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
                    <input type="text" class="form-control" [(ngModel)]="name">
                </div>
                <div>
                    <label>Obj</label>
                    <input type="text" class="form-control" [(ngModel)]="obj.tel">
                </div>
                <div>
                    <label>Ary</label>
                    <input type="text" class="form-control" [(ngModel)]="ary[0]">
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" class="form-control" [(ngModel)]="age">
                </div>
                <div>
                    <label>Company</label>
                    <input type="text" class="form-control" [(ngModel)]="company">
                </div>
            </div>

            <a02OneComponent normal="Normal"
                             [name]="name"
                             [obj]="obj"
                             [ary]="ary[0]"
                             [age]="age"
                             [comp]="company"></a02OneComponent>
        </div>
    `
})
export class A02Component {
    public name: string = 'HongGilDong';
    public obj: objType = {
        tel: '010-1234-5678',
        address: 'Seoul'
    }
    public ary: string[] = ['One','Two','Three'];
    public age: number = 20;
    public company: string = 'Multi';

}


export interface objType {
    tel: string;
    address: string;
}