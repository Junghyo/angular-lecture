import { Component } from '@angular/core';

@Component({
    selector: 'a04Component',
    template:`
        <div class="card card-body">
            <div class="card-heading">
                <h3>4. Event, Class, Style 바인딩</h3>
            </div>
            
            <div class="card-body">
                <h4>이벤트 바인딩</h4>
                <div>
                    <span>{{result}}</span><br/>
                    innerText: <span [innerText]="result"></span><br/>
                    innerHTML: <span [innerHTML]="result"></span>
                </div>
                <br>
                <button class="btn btn-primary btn-sm" (click)="changeResult('yoda')">명령식</button>
                <button class="btn btn-danger btn-sm" on-click="changeResult('seo')">명령식</button>
            </div>

            <div class="card-body">
                <h4>Class Binding</h4>
                <div class="green">1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [class]="'green'">2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [attr.class]="'green'">3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [class]="greenColor">4-1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [class.green]="true">4-2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

                <div>
                    <span [class.green]="check">5. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</span>
                    <input type="checkbox" [(ngModel)]="check">Check
                </div>

                <div [ngClass]="greenColor">6. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngClass]="[greenColor, 'bold']">7. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngClass]="{'green': check, 'bold':true}">8. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div bind-ngClass="{'green': check, 'bold': true}">9. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

            </div>

            <div class="card-body">
                <h4>Style Binding</h4>
                <div [style.color]="'orange'" [style.fontWeight]="'bold'">1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div [ngStyle]="{'color': greenColor, 'font-weight': 'bold'}">2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div bind-ngStyle="{'color': 'red', 'font-weight': 'bold'}">3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div>4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
            </div>

        </div>
    `,
    styles: [`
        .green { color: green; }
        .bold { font-weight: bold; }
    `]
})
export class A04Component{
    public result: string;
    public name: string = 'HongGilDong';
    public greenColor: string = 'green';
    public check: boolean = false;

    public changeResult(str: string) {
        this.result = `<b>${str}</b>`;
    }
    
}
