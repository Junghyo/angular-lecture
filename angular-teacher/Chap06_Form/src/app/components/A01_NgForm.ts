import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>1. Template Base Form</h3>
            </div>
            <div class="card-body">
                <!-- ngModel을 <form>태그 안에서 사용하는 경우 name 속성이 필수 -->
                <div class="card-body">
                    myForm Value: {{myForm.value | json}}<br>
                    myForm Valid: {{myForm.valid}}<br>
                    <br>
                    lastName Value: {{lName.value}}<br>
                    lastName Valid: {{lName.valid}}<br>
                </div>
                <form #myForm="ngForm" (submit)="onSendData(myForm.value)">
                    <div>
                        <label>UserName:</label>
                        <input type="text" class="form-control" name="fName" [(ngModel)]="firstName">
                        <input type="text" class="form-control" required
                            name="lName" ngModel   #lName="ngModel">
                    </div>
                    <br>

                    <div>
                        <label>SSN:</label>
                        <input type="text" class="form-control" name="ssn" ngModel>
                    </div>
                    <br>

                    <div>
                        <label>Password:</label>
                        <input type="text" class="form-control" name="pw" ngModel>
                    </div>
                    <br>

                    <div>
                        <label>Confirm password : </label>
                        <input type="password" class="form-control" name="repw" ngModel>
                    </div>
                    <br>

                    <div>
                        <label>Department : </label>
                        <select class="form-control" name="dept" ngModel>
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
export class A01Component{
    public ary: string[] = ['Salary', 'Department']
    public dept: string = 'Salary';
    public firstName: string = 'Hong';
    public lastName: string = "GilDong"


    public onSendData(data: any): void {
        console.log(data);

        // Http 서비스를 이용해서 서버에 전달...
    }
    
}
