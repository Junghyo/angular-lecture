import { Component }          from '@angular/core';

@Component({
    selector: 'a03Component',
    template:`
        <div class="card-body">
            <div class="card-heading">
                <h3>3. 속성 바인딩</h3>
            </div>
            
            <div class="card-body">
                <h4>일반 바인딩</h4>
                Name: {{name}} , kor: {{kor}}, Eng: {{eng}}<br>
                Total: {{total}} / {{kor + eng}} / {{getTotal()}}<br>
                Avg: {{getTotal() / 2 }}<br>
                ID: {{hong.id}}, Address: {{hong.address}} 
            </div>

            <div class="card-body">
                <h4>Safe Navigation Operator</h4>
                <!-- build를 할때는 에러로 표시됨 
                없는 기본형 변수 참조(표시안됨-에러없음) Age: {{age}}<br>
                없는 객체형 변수 참조(?없으면 에러) user.name: {{user?.name}}
                -->
            </div>

            <div class="card-body">
                <h4>속성 바인딩</h4>
                <!-- [] 속성의 값은 변수명을 의미한다 -->
                Name: <input type="text" class="form-control" value="{{name}}"><br>
                Name: <input type="text" class="form-control" [value]="name"><br>
                KOR: <input type="text" class="form-control" [attr.value]="name"><br>
                ENG: <input type="text" class="form-control" [(ngModel)]="name"><br>
            </div>

            <div class="card-body">
                <!-- 
                    $event => angular Event 객체
                    evetn => Javascript
                -->
                Name: <input type="text" class="form-control" [value]="name" (input)="changeValue($event)">
            </div>
        </div>
    `
})
export class A03Component{
    public name: string = 'HongGilDong';
    public kor: number = 80;
    public eng: number = 95;
    public total: number;

    public getTotal(): number {
        return this.kor + this.eng;
    }

    public changeValue(evt: Event): void {
        // console.log(window);
        let input: HTMLInputElement = evt.target as HTMLInputElement;
        this.name = input.value;
    }

    public hong: {id: number, address: string} = {
        id: 20,
        address: 'Seoul'
    }
    
}