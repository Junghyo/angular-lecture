import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormArrayName, FormBuilder } from '@angular/forms';

@Component({
    selector: 'a04Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>4. Form Validator</h3>
            </div>
            <div class="card-body">
                <div class="card-body">
                    Form Value: {{myForm.value | json}}<br>
                    Form Valid: {{myForm.valid}}
                </div>

                <form  [formGroup]="myForm" (submit)="onSubmit(myForm.value)">
                    <div formArrayName="name">
                        <label>UserName: {{getName()}}</label>
                        <div>
                            <input type="text" class="form-control" formControlName="0">
                            <div>
                                이름은 필수 항목입니다.
                            </div>
                            <div>
                                이름은 3글자 이상입니다.(체크는 소문자 minlength)
                            </div>
                            <div>
                                이름은 10자를 넘어갈 수 없습니다.(체크는 소문자 maxlength)
                            </div>

                            <input type="text" class="form-control" formControlName="1">
                            <div>
                                <div>
                                    이름은 필수 항목입니다.
                                </div>
                                <div>
                                    이름은 3글자 이상입니다.(체크는 소문자 minlength)
                                </div>
                                <div>
                                    이름은 10자를 넘어갈 수 없습니다.(체크는 소문자 maxlength)
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>

                    <div>
                        <label>SSN: </label>
                        <input type="text" class="form-control" formControlName="ssn">
                        <div>
                            SSN은 필수 항목입니다.
                        </div>
                    </div>
                    <br>

                    <div>
                        <label>Password: </label>
                        <input type="text" class="form-control" formControlName="pw">
                        <div>
                            패스워드는 필수 항목입니다.
                        </div>
                        <div>
                            패스워드 패턴이 틀립니다.
                        </div>
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
export class A04Component{
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'HongGilDong';

    public myForm: FormGroup;

    ngOnInit() {
        this.myForm = new FormGroup({
            name: new FormArray([
                new FormControl(''),
                new FormControl('')
            ]),
            ssn: new FormControl(''),
            pw: new FormControl(''),
            repw: new FormControl(''),
            dept: new FormControl('')
        })
    }

    public getName(): string{
        return this.myForm.get('name').get('0').value + ' ' + this.myForm.get('name').get('1').value;
    }
    
    public onSubmit(data: any): void{
        console.log(data);
    }
}
