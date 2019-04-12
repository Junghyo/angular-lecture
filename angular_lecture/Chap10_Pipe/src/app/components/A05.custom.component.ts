import { Component } from '@angular/core';

@Component({
    selector: 'a05Component',
    template: `
        <div class="card-body">
            <div class="card-heading">   
                <h3>B04 Custom Pipe</h3>
            </div>

            <div class="card-body">
                <h4>LimitTo</h4>
                <div class="form-group">
                    <label for="num">Number</label>
                    <select class="form-control" name="num" [(ngModel)]="num">
                        <option *ngFor="let item of obj | aryNum">{{item}}</option>
                    </select>
                    <br>

                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>KOR</th>
                            <th>ENG</th>
                        </tr>
                        <tr *ngFor="let item of obj | limit : num">
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.kor}}</td>
                            <td>{{item.eng}}</td>
                        </tr>
                    </table>
                </div>
                <br>

                <h4>Search</h4>
                <div>
                    <label>Field</label>
                    <select [(ngModel)]="keyName" class="form-control">
                        <option *ngFor="let item of obj | keyName" [value]="item">{{item | uppercase}}</option>
                    </select>
                    <label>검색어</label><input type="text" class="form-control" [(ngModel)]="keyword">
                    <label><input type="checkbox" [(ngModel)]="ignoreCase"> 대소문자 구분</label>
                    <table class="table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>KOR</th>
                            <th>ENG</th>
                        </tr>
                        <tr *ngFor="let item of obj | search : keyName : keyword : ignoreCase">
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.kor}}</td>
                            <td>{{item.eng}}</td>
                        </tr>
                    </table>
                </div>
                <br>
            </div>
        </div>
    `,
    providers: []
})
export class A05Component{
    
    public keyName: string = 'name';
    public keyword: string = '';
    public ignoreCase: boolean = false;

    public obj: Array<{id: number, name: string, kor: number, eng: number}> = [
        {id: 1, name: 'Hong', kor: 90, eng: 71},
        {id: 2, name: 'Jimea', kor: 80, eng: 72},
        {id: 3, name: 'NolBu', kor: 70, eng: 73},
        {id: 4, name: 'HungBu', kor: 60, eng: 74},
        {id: 5, name: 'Ih', kor: 50, eng: 85}
    ];

    public keys: Array<string> = Object.keys(this.obj[0]);

    public num: number = this.obj.length;

    constructor(){}

    
}
