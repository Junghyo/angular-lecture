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
                    1. {{'I am a boy' | uppercase }}<br>
                    2. {{'I am a boy' | uppercase | slice : 2 }}<br>

                    <!-- custom pipe는 module의 declarations 올리고 사용 -->
                    3. {{'I am a boy' | upLow}}<br>
                    4. {{ 1234.5678 | upLow}}<br>
                    5. {{'I am a boy' | upLow : 3}}<br>
                    6. {{'I am a boy' | upLow : 'lower'}}<br>
                    7. {{'I am a boy' | upLow : 'upper'}}<br>
                </div>
                <br>

                <h4>Replace</h4>
                <div>
                    1. {{'I am a boy' | replace }}<br>
                    2. {{'I am a boy' | replace : 'boy' }}<br>
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
