import { Component } from '@angular/core';

@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">   
                <h3>B02 Pipe i18nSelectPipe</h3>
            </div>

            <div class="card-body">
                <h4>i18nSelect</h4>
                <div>
                    1. {{fruit.apple}}<br>
                    2. {{fruit['apple']}}<br>
                    3. {{'apple' | i18nSelect : fruit}}
                </div>
                <br>

                <h4>i18nPlural</h4>
                <div>
                    <input type="number" class="form-control" [(ngModel)]="num"><br>
                    {{num | i18nPlural : mapping}}
                </div>
            </div>
        </div>
    `
})
export class A03Component{
    public num: number = 1;

    public fruit: {[key: string]: string} = {
        'apple': '사과',
        'banana': '바나나',
        'grape': '포도',
        'orange': '오렌지',
        'manago': '망고',
        'watermelon': '수박',
        'kiwi': '키위'
    }

    public mapping: { [key: string]: string} = {
        '=0': '1이상의 숫자를 입력해 주세요',
        '=1': '1개의 가격은 100원 입니다',
        '=2': '2개의 가격은 180원 입니다',
        '=3': '3개의 가격은 250원 입니다',
        'other': '3개 이상 구입할 수 없습니다.',
    }
    
}