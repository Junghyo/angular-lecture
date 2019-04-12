import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventObjType } from '../types/event.obj.type';

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

    // Controller 내부에서만 사용할 변수라 private
    @Output()
    private sendNameEvent: EventEmitter<string> = new EventEmitter();

    @Output()
    private sendObjEvent: EventEmitter<EventObjType> = new EventEmitter();

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

    constructor() {}

    // 초기화가 완료된 후 실행되는 lifecycle 메서드
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.sendName();
        this.sendObj();
    }


}

@Component({
    selector: 'a04TwoComponent',
    template: `
        <div class="card-body">
            <h4>A04 Two Component</h4>

            <div class="card-body">
                Name: {{name}}<br>
                Obj: {{data?.name}} / {{data?.obj.tel}} / {{data?.obj.address}}<br>
                Ary: {{data?.ary[1]}}
            </div>
        </div>
    `
})
export class A04TwoComponent {
    @Input() name: string;
    @Input() data: EventObjType;
}

@Component({
    selector: 'a04Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>4. 형제 Component간 Data 전달</h3>
            </div>

            <div class="card-body">
                <a04OneComponent
                    (sendNameEvent)="getName($event)"
                    (sendObjEvent)="getObj($event)"></a04OneComponent>
                <a04TwoComponent [name]="name" [data]="data"></a04TwoComponent>
            </div>
        </div>
    `
})
export class A04Component {
    public name: string;
    public data: EventObjType;

    public getName(data: string): void {
        this.name = data;
    }

    public getObj(data: EventObjType): void {
        this.data = data;
    }

}
