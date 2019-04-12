import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArrayName, FormArray } from '@angular/forms';

@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. Model Base Form Array</h3>
            </div>
            <div>
                myForm Value: {{myForm.value | json}}<br/>
                myForm Valid: {{myForm.valid}}<br/>
                <br/>
                lastName Value: {{myForm.get('name').get('0').value}}<br/>
                lastName Valid: {{myForm.get('name').get('1').value}}
                <br/>
            </div>
            <div class="card-body">
                <form [formGroup]="myForm" (submit)="sendData()">
                    <div formArrayName="name">
                        <label>UserName:</label>
                        <input type="text" class="form-control" formControlName="0">
                        <input type="text" class="form-control" formControlName="1">
                    </div>
                    <br>

                    <div>
                        <label>SSN: {{myForm.get('ssn').value}}</label>
                        <input type="text" class="form-control" formControlName="ssn">
                    </div>
                    <br>

                    <div>
                        <label>Password:</label>
                        <input type="text" class="form-control" formControlName="pwd">
                    </div>
                    <br>

                    <div>
                        <label>Confirm password : </label>
                        <input type="password" class="form-control" formControlName="repwd">
                    </div>
                    <br>

                    <div>
                        <label>Department : </label>
                        <select class="form-control" formControlName="dept">
                            <option *ngFor="let item of ary">{{item}}</option>
                        </select>
                    </div>
                    <br>
                    
                    <button class="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    `
})
export class A03Component{
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'Hong';
    public lastName: string = "GilDong";

    public myForm: FormGroup;

    ngOnInit(): void {
        // Form 객체
        this.myForm = new FormGroup({
            // view에서도 name 정의가 있어야 함 => formArrayName
            // key name이 없으므로 대신 index번호를 문자형태의 key로 사용
            name: new FormArray([
                new FormControl(this.firstName),
                new FormControl('yoda'),
            ]),
            // Form 요소
            ssn: new FormControl(''),
            pwd: new FormControl(''),
            repwd: new FormControl(''),
            dept: new FormControl('')
        });
    }

    public sendData(): void {
        console.log(this.myForm.value);
    }
    
    public getPassword(): void {
        return this.myForm.get("pw").value;
    }

    public lastNameValid(): boolean {
        return this.myForm.get("name").get("1").valid;
    }
}
