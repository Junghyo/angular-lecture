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
                Name: , kor: , Eng: <br>
                Total: <br>
                Avg: <br>
                ID: , Address: 
            </div>

            <div class="card-body">
                <h4>Safe Navigation Operator</h4>
                없는 기본형 변수 참조(표시안됨-에러없음) Age: <br>
                없는 객체형 변수 참조(?없으면 에러) user.name: 
            </div>

            <div class="card-body">
                <h4>속성 바인딩</h4>
                Name: <input type="text" class="form-control"><br>
                Name: <input type="text" class="form-control"><br>
                KOR: <input type="text" class="form-control"><br>
                ENG: <input type="text" class="form-control"><br>
            </div>

            <div class="card-body">
                Name: <input type="text" class="form-control">
            </div>
        </div>
    `
})
export class A03Component{
    public name: string = 'HongGilDong';
    public kor: number = 80;
    public eng: number = 95;
    public total: number;

    public hong: {id: number, address: string} = {
        id: 20,
        address: 'Seoul'
    }
    
}