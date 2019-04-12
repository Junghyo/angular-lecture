import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>1. Directive</h3>
            </div>

            <div class="card-body">
                1. 지시자 이름에 [] 없는 경우<br/>
                <a01OneDir>ONE 1</a01OneDir>
                <!-- Error는 아니지만 이벤트가 실행되지 않음 -->
                <div a01OneDir>ONE 2</div>
                <!-- <div [a01OneDir]>ONE 3 지시자가 @Input()이 있어야 함.</div> -->
            </div>

            <div class="card-body">
                2. 지시자 이름에 [] 있는 경우<br/>
                <!-- <a01TwoDir>TWO 1 태그 형태로는 사용 불가</a01TwoDir> -->
                <div a01TwoDir>TWO 2</div>
                <!--<div [a01TwoDir]>TWO 3 지시자가 @Input()이 있어야 함.</div> -->
            </div>

            <div class="card-body">
                3. 지시자 이름에 [] 있는 경우 + @Input()추가<br/>
                <!-- <a01TwoDir>TWO 1 태그 형태로는 사용 불가</a01TwoDir> -->
                <div a01ThreeDir>THREE 2</div>
                <div [a01ThreeDir]="'abc'">THREE 3 지시자가 @Input()이 있어야 함.</div> 
            </div>
        </div>
    `
})
export class A01Component {

}


