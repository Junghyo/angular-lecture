import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. Model Base Form</h3>
            </div>
            <div class="card-heading">
                myForm Value: {{myForm.value | json}}<br>
                myForm Valid: {{myForm.valid}}<br>
                <br>
                lastName Value: {{myForm.get('name').get('1').value}}<br>
                lastName Valid: {{myForm.get('name').get('1').valid}}<br>
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
                        <input type="text" class="form-control" formControlName="pw">
                    </div>
                    <br>

                    <div>
                        <label>Confirm password : </label>
                        <input type="password" class="form-control" formControlName="repw">
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
    public lastName: string = "GilDong"

    public myForm: FormGroup;

    ngOnInit(): void {
        this.myForm = new FormGroup({           // Form 객체

            // view도 name 정의가 있어야 함 => formArrayName
            // key name이 없으므로 대신 index 번호를 문자 형태로 key로 사용
            name: new FormArray(
                [
                    new FormControl(this.firstName),         // Form 요소
                    new FormControl('길동'),
                ]
            ),
            ssn: new FormControl(''),
            pw: new FormControl(''),
            repw: new FormControl(''),
            dept: new FormControl(''),
        });
    }

    public sendData(): void {
        console.log(this.myForm.value);
    }


    public getPassword(): string {
        return this.myForm.get("pw").value;
    }

    public lastNameValid(): boolean {
        return this.myForm.get("name").get("1").valid;
    }
    
}
