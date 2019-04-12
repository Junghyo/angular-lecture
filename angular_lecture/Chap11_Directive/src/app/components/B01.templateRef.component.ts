import { Component, ViewChild, ViewContainerRef, TemplateRef, EmbeddedViewRef } from '@angular/core';

@Component({
    selector: 'b01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>B01 TemplateRef</h3>
            </div>
            <div class="card-body">
                <button class="btn btn-sm btn-primary" (click)="viewAll()">View All</button>&ngsp;
                <button class="btn btn-sm btn-danger" (click)="clearAll()">Remove All</button>
            </div>
            <div class="card-body">
                <button class="btn btn-sm btn-primary" (click)="viewTemp(temp1)">Temp 1</button>&ngsp;
                <button class="btn btn-sm btn-primary" (click)="viewTemp(temp2)">Temp 2</button>&ngsp;
                <button class="btn btn-sm btn-danger" (click)="clearTemp()">Remove</button>
            </div>

            <ng-template #temp1 let-name="name" let-num="age">
            <!-- 이 내부에서는 let-num의 let-을 삭제한 이름이 내부 변수명이 된다.-->
                <div class="card-body">
                    <div class="card-heading">
                        <h4>Template 1</h4>
                    </div>
                    <div class="card-body">
                        Message: {{message}}<br>
                        Name: {{name}} / {{num}}<br/>
                    </div>
                </div>
            </ng-template>

            <ng-template #temp2>
                <div class="card-body">
                    <div class="card-heading">
                        <h4>Template 2</h4>
                    </div>
                    <div class="card-body">
                        Message: {{message}}<br>
                    </div>
                </div>
            </ng-template>
        </div>
    `
})
export class B01Component {
    public message: string = 'B01 Component';
    private view: boolean = true;

    // Template 객체
    @ViewChild('temp1') temp1: TemplateRef<HTMLElement>;
    @ViewChild('temp2') temp2: TemplateRef<HTMLElement>;

    // Template 관리 객체
    public tempView: EmbeddedViewRef<HTMLElement>;

    // Template을 관리할 관리 컨테이너 객체
    constructor(private vcr: ViewContainerRef) { }


    public viewAll(): void {
        if(this.view){
            this.vcr.createEmbeddedView(this.temp1);
            this.vcr.createEmbeddedView(this.temp2);
            this.view=false;
        }
    }

    public clearAll(): void {
        if(this.vcr) this.vcr.clear();
        this.view = true;
    }

    public viewTemp(temp: TemplateRef<HTMLElement>): void {
        // if(this.vcr) this.vcr.clear();
        // this.vcr.createEmbeddedView(temp);
        let obj: any = {
            name: "yoda",
            age: 31
        }

        if(this.tempView) this.tempView.destroy();
        this.tempView = this.vcr.createEmbeddedView(temp, obj);
    }

    public clearTemp(): void {
        if(this.tempView) this.tempView.destroy();
        
    }
}
