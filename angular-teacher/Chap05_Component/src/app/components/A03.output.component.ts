import { Component, Output, EventEmitter } from '@angular/core';
import { EventObjType } from "./../types/EventObjType";

@Component({
    selector: 'a03OneComponent',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>하위 컴퍼넌트</h3>
            </div>
            <div class="card-body">
                Name: <br>
                <button class="btn btn-primary btn-sm" (click)="sendName()">Send Name</button> &nbsp; 
                <button class="btn btn-danger btn-sm" (click)="sendObj()">Send Object</button>
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

    // Custom Event 생성. 생성한 이벤트의 emit() 메서드로 전파
    @Output()
    public sendNameEvent: EventEmitter<string> = new EventEmitter();

    @Output()
    public sendObjEvent: EventEmitter<EventObjType> = new EventEmitter();

    // 메서드로 호출되면 이벤트 전파
    public sendName(): void {
        this.sendNameEvent.emit(this.name);
    }

    public sendObj(): void {
        let sendData: EventObjType = {
            name: this.name,
            obj: this.obj,
            ary: this.ary,
            age: this.age
        }

        this.sendObjEvent.emit(sendData);
    }

}


@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. 상위 Component에 Data 전달</h3>
            </div>
            
            <div class="card-body">
                Name: {{name}}<br>
                Obj: {{data?.name}} / {{data?.obj.tel}}<br>
                Ary: {{data?.ary[0]}}
            </div>

            <a03OneComponent 
                (sendNameEvent)="getName($event)" 
                (sendObjEvent)="getObject($event)">
            </a03OneComponent>
        </div>
    `
})
export class A03Component {

    public name: string;

    // 객체인데 값이 대입 안 될수도 있음(초기화 안됨)
    public data: EventObjType;

    public getName(data: string): void {
        // console.log(data);
        this.name = data;
    }

    public getObject(data: EventObjType): void {
        // console.log(data);
        this.data = data;
    }
}
