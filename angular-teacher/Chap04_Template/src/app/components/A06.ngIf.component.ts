import { Component } from '@angular/core';

@Component({
    selector: 'a06Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>6. ngIf / ngSwitch / ngFor</h3>
            </div>

            <div class="card-body">
                <h4>ngIf</h4>
                <select [(ngModel)]="gender">
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <div>
                    <span *ngIf="gender === 'male'">Male</span>
                    <span *ngIf="gender === 'female' ">Female</span>
                </div>
                <div>
                    <span [hidden]="gender !== 'male'">Male</span>
                    <span [hidden]="gender !== 'female'">Female</span>
                </div>
            </div>

            <div class="card-body">
                <h4>ngSwitch</h4>
                <button (click)="grade = 'admin'">Admin</button>
                <button (click)="grade = 'member'">Member</button>
                <button (click)="grade = 'guest'">Guest</button>
                <button (click)="grade = 'abc'">UnKnown</button>
                <br>
                
                <div [ngSwitch]="grade">
                    <span *ngSwitchCase="'admin'">Admin</span>
                    <span *ngSwitchCase="'member'">Member</span>
                    <span *ngSwitchCase="'guest'">Guest</span>
                    <span *ngSwitchDefault>회원등급을 선택해 주세요.</span>
                </div>
            </div>

            <div class="card-body">
                <h4>ngFor</h4>
                <table class="table">
                    <tr>
                        <td>No</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>KOR</td>
                        <td>ENG</td>
                    </tr>
                    <!-- 
                    let i = 0;
                    for(let item of students){ 
                        let index = i;
                        item => {name: 'NolBu', age: 50, kor: 90, eng: 90};
                    -->
                    <tr *ngFor="let item of students; let i = index;">
                        <td>{{i + 1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.age}}</td>
                        <td>{{item.kor}}</td>
                        <td>{{item.eng}}</td>
                    </tr>
                    <!-- 
                        i++;
                    } 
                    -->
                </table>
                <br>

                <table class="table">
                    <tr>
                        <td>Index</td>
                        <td>Value</td>
                        <td>First</td>
                        <td>Last</td>
                        <td>Middle(x)</td>
                        <td>ODD</td>
                        <td>EVEL</td>
                    </tr>
                    <tr [ngClass]="{bgColor: e}" 
                    *ngFor="
                        let item of students;
                        let i = index;
                        let f = first;
                        let l = last;
                        let m = middle;
                        let o = odd;
                        let e = even;
                    ">
                        <td>{{i}}</td>
                        <td>{{item.name}}</td>
                        <td>{{f}}</td>
                        <td>{{l}}</td>
                        <td>{{m}}</td>
                        <td>{{o}}</td>
                        <td>{{e}}</td>
                    </tr>
                </table>

            </div>


        </div>
    `,
    styles: [`
        .bgColor { background-color: gray}
    `]
})
export class A06Component{
    public gender:string = 'male';

    public grade: string= 'aaa';

    public students: ObjType[] = [
        {name: 'HongGilDong', age: 20, kor: 100, eng: 80},
        {name: 'NolBu', age: 50, kor: 90, eng: 90},
        {name: 'HungBu', age: 40, kor: 70, eng: 60},
    ]
    
}

interface ObjType {
    name: string;
    age: number;
    kor: number;
    eng: number;
}