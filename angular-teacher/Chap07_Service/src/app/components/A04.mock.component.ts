import { Component } from '@angular/core';
import { MockService } from '../service/A04_mock.service';


@Component({
    selector: 'a04Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>4. Mock Service</h3>
            </div>

            <div class="card-body">
                
            </div>

            <div class="card-body">
                <span *ngFor="let item of data">{{item}}<br></span>
            </div>
        </div>
    `,
    providers: [ MockService ]
})
export class A04Component{

    public data: string[];
    
    constructor(private mock: MockService){}

    ngOnInit(): void {
        this.data = this.mock.getResult();
    }
}