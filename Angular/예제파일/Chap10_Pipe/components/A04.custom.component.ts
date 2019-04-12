import { Component } from '@angular/core';

@Component({
    selector: 'a04Component',
    template: `
        <div class="card-body">
            <div class="card-heading">   
                <h3>B03 Custom Pipe</h3>
            </div>

            <div class="card-body">
                <h4>Replace</h4>
                <div>
                    
                </div>
                <br>

		        <h4>Abbr</h4>
                <div>
                    
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
