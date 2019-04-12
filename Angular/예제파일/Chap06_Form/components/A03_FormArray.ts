import { Component } from '@angular/core';

@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. Model Base Form</h3>
            </div>
            <div class="card-body">
                <form>
                    <div>
                        <label>UserName:</label>
                        <input type="text" class="form-control">
                        <input type="text" class="form-control">
                    </div>
                    <br>

                    <div>
                        <label>SSN:</label>
                        <input type="text" class="form-control">
                    </div>
                    <br>

                    <div>
                        <label>Password:</label>
                        <input type="text" class="form-control">
                    </div>
                    <br>

                    <div>
                        <label>Confirm password : </label>
                        <input type="password" class="form-control">
                    </div>
                    <br>

                    <div>
                        <label>Department : </label>
                        <select class="form-control">
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
    
}
