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
                    
                </div>
                <br>

                <h4>i18nPlural</h4>
                <div>
                    <input type="number" class="form-control" [(ngModel)]="num"><br>
                    
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
    
}