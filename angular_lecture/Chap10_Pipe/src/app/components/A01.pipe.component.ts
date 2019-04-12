import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>A01 Pipe Date / Currency / JSON</h3>
            </div>

            <div class="card-body">
                <h4>Date Pipe</h4>
                    1. {{today}} - {{today | date}} - {{today | date : 'yyyy년 MM월 dd일 a hh:mm:ss EEEE'}}<br/>
                    2. {{todayISO}} - {{todayISO | date}} - {{todayISO | date : 'yy년 M월 d일 a h:m:s EEE'}}<br/>
                    3. {{todayUTC}} - {{todayUTC | date}} - {{todayUTC | date : 'y년 M월 d일 a h:m:s EEE'}}<br/>
                <br>

                <h4>Date Pipe 단축형</h4>
                    1. Date: {{today | date : 'fullDate'}} - {{today | date : 'longDate'}} - {{today | date : 'mediumDate'}}
                    - {{today | date : 'shortDate'}}<br/>
                    2. Time: {{today | date : 'mediumTime'}} - {{today | date : 'shortTime'}}<br/>
                    3. All: {{today | date : 'medium'}} - {{today | date : 'short'}}<br/>
                    4. Method: {{getToday()}}<br/>
            </div>

            <div class="card-body">
                <h4>통화코드 ISO 4217 규격에 따름.</h4>
                1. {{money | currency}}<br/>
                2. {{money | currency : 'KRW' : 'symbol'}}<br/>
                3. {{money | currency : 'KRW' : 'code'}}<br/>
                4. {{money | currency : 'CNY' : 'symbol'}}<br/>
                5. {{money | currency : 'CNY' : 'symbol-narrow'}}<br/>
                6. {{money | currency : 'CNY' : 'symbol' : '10.10'}}<br/>
                7. {{98765.4321 | currency : 'CNY' : 'symbol' : '1.1-2'}}<br/>
                8. {{getMoney()}}<br/>
            </div>

            <div class="card-body">
                <h4>JSON</h4>
                {{obj}}<br/>
                {{obj | json}}
            </div>
        </div>
    `,
    // providers: [DatePipe] module.ts에 등록하는 것이 좋음 (많이 사용하는 경우)
})
export class A01Component{
    public today: Date = new Date();       // 날짜 형식
    public todayUTC: number = Date.now();  // 숫자 형식 1970.1.1 00:00:00의 mile sec
    public todayISO: string = this.today.toISOString();    // 문자 형태

    public money: number = 12345.6789;

    public obj: any = {
        name: 'Hong',
        age: 20,
        ary: ['One','Two'],
        info: {
            id: 10,
            add: 'Seoul'
        }
    }

    // pipe를 contorller에서 사용하기 위해서는 주입을 먼저 받는다.
    // custom service와 마찬가지로 providers에 올리고 생성자에서 주입

    constructor(private datePipe : DatePipe, private moneyPipe : CurrencyPipe) { }

    public getToday(): string {
        return this.datePipe.transform(this.today, 'yyyy/MM/dd')
    }

    public getMoney(): string {
        return this.moneyPipe.transform(this.money, "GBP", "symbol", "1.1-3");
    }
}
