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
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <br>
                <button class="btn btn-primary btn-sm">명령식</button>
                <button class="btn btn-danger btn-sm">명령식</button>
            </div>

            <div class="card-body">
                <h4>Class, Style Binding</h4>
                <div>1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div>2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div>3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div>4. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

                <div>
                    <span>5. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</span>
                    <input type="checkbox">Check
                </div>

                <div>6. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div>7. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div>8. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div>9. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>

            </div>

            <div class="card-body">
                <div>1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div>2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
                <div>3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사..</div>
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
    
}
