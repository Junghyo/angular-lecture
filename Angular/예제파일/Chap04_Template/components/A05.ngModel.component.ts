import { Component }      from '@angular/core';

@Component({
    selector: 'a05Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>5. 양방향 바인딩</h3>
            </div>
            
            <div class="card-body">
                Name: <input class="form-control">
                Name: <input class="form-control">
                Name: <input class="form-control">
                <br>

                List:
                <select class="form-control">
                    <option></option>
                </select>

                <br>
                
                <span>
                    <input type="radio">
                </span>
            </div>
        </div>
    `
})
export class A05Component{
    public name: string = 'HongGilDong';
    public students: Object[] = [
        {name: 'HongGilDong', age: 20, address: 'Seoul'},
        {name: 'IlJimea', age: 25, address: 'Busan'},
        {name: 'ImGGekJung', age: 30, address: 'InChen'},
        {name: 'NolBu', age: 50, address: 'Seoul'},
        {name: 'HungBu', age: 40, address: 'Seoul'},
    ]
}