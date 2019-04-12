import { Component }              from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>B01 Pipe Percent / Decimal / Slice</h3>
            </div>

            <div class="card-body">
                <h4>Percent</h4>
                <div>
                    
                    <br>
                    <div>Angular 4에서는 소수점 이하는 3이 기본. 단일 값 4부터 지정은 에러<br>
                    자리수 3 이하로 지정해서 표현하고자 할 경우는 1.1-1과 같은 방식으로 이용</div> 
                    
                    <br>
                    
                </div>
                <br>

                <h4>Decimal Pipe</h4>
                <div>
                    <div>Angular 4와 동일하나 소수점 이하를 4 이상으로 설정해도 에러 아님</div>
                    
                    <br>
                    <div>Angular 4에서는 소수점 이하는 3이 기본. 단일 값 4부터 지정은 에러<br>
                    자리수 3 이하로 지정해서 표현하고자 할 경우는 1.1-1과 같은 방식으로 이용</div> 
                    
                    <br>
                    
                </div>
                <br>

                <h4>String slice</h4>
                <div>
                    
                    <br>
                    
                </div>
            </div>
        </div>
    `,
    providers: []
})
export class A02Component{

    public num: number = 1.23;
    public str: string = '동해물과 백두산이 마르고 닳도록';

}