import { Component }      from '@angular/core';

@Component({
    selector: 'a05Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>5. 양방향 바인딩</h3>
            </div>
            
            <div class="card-body">
                Name: <input class="form-control" [(ngModel)]="name">
                Name: <input class="form-control" [(ngModel)]="name">
                Name: <input class="form-control" [value]="name" (input)="changeValue($event)">
                <br>

                List:
                <select class="form-control" [(ngModel)]="name">
                    <option *ngFor="let item of students" [value]="item.name">{{item.age}}</option>
                </select>

                <br>
                
                <span *ngFor="let item of students">
                    <input type="radio" name="name"  [(ngModel)]="name"  [value]="item.name" >{{item.name}} &nbsp; 
                </span>
            </div>
        </div>
    `
})
export class A05Component{
    public name: string = 'HongGilDong';

    public students: {name: string, age: number, address: string}[] = [
        {name: 'HongGilDong', age: 20, address: 'Seoul'},
        {name: 'IlJimea', age: 25, address: 'Busan'},
        {name: 'ImGGekJung', age: 30, address: 'InChen'},
        {name: 'NolBu', age: 50, address: 'Seoul'},
        {name: 'HungBu', age: 40, address: 'Seoul'},
    ]

    public changeValue(evt: Event): void {
        // console.log(window);
        let input: HTMLInputElement = <HTMLInputElement>evt.target;
        this.name = input.value;
    }
}