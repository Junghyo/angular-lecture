import { Component } from '@angular/core';

@Component({
    selector: 'a04Component',
    template: `
        <div class="card-body">
            <div class="card-heading">   
                <h3>B03 Custom Pipe</h3>
            </div>

            <div class="card-body">
                <h4>UpLow</h4>
                <div>
                    <!-- custom pipe는 module의 declarations에 올리고 사용해야 함.-->
                    1. 커스텀 파이프 : {{'I am a boy' | upLow}}<br/>
                    2. 기본 파이프 : {{'I am a boy' | uppercase}}<br/>
                    3. 체이닝 파이프 : {{'I am a boy' | uppercase | slice : -7 : -3}}<br/>
                    4. 커스텀 파이프 : {{1234 | upLow}}<br/>
                    5. 커스텀 파이프 : {{'I am a YODA' | upLow : 'lower'}}<br/>
                    6. 커스텀 파이프 : {{'I am a YODA' | upLow : 'upper'}}<br/>
                </div>
                <h4>Replace</h4>
                <div>
                    1. {{'I am a boy' | replace : 'boy' }}<br>
                    2. {{'I am a boy' | replace : 'boy' : 1234}}<br>
                    3. {{'I am a boy' | replace : 'boy' : 'girl' }}<br>
                </div>
                <br>

		        <h4>Abbr</h4>
                <div>
                    1. {{str | abbr}}<br>
                    2. {{str | abbr : 10}}<br>
                    3. {{str | abbr : 10 : '***'}}<br>
                </div>
                
            </div>
        </div>
    `,
    providers: []
})
export class A04Component{

    public delete_alpha:RegExp = /[a-zA-Z]+/g;
    public delete_number:RegExp = /[0-9]+/g;
    public str: string = '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세';
    
}
