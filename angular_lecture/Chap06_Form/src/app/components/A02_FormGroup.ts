import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. Model Base Form</h3>
            </div>
            <div>
                myForm Value: {{myForm.value | json}}<br/>
                myForm Valid: {{myForm.valid}}<br/>
                <br/>
                lastName Value: {{myForm.get('name').get('firstName').value}}<br/>
                lastName Valid: {{myForm.get('name').get('lastName').value}}
                <br/>
            </div>
            <div class="card-body">
                <form [formGroup]="myForm" (submit)="sendData()">
                    <div formGroupName="name">
                        <label>UserName:</label>
                        <input type="text" class="form-control" formControlName="firstName">
                        <input type="text" class="form-control" formControlName="lastName">
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
export class A02Component{
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'Hong';
    public lastName: string = "GilDong";

    public myForm: FormGroup;

    ngOnInit(): void {
        // Form 객체
        this.myForm = new FormGroup({
            // view에서도 name 정의가 있어야 함 => formGroupName
            name: new FormGroup({
                'firstName': new FormControl(''),
                lastName: new FormControl(''),
            }),
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
        return this.myForm.get("name").get("lastName").valid;
    }
}
