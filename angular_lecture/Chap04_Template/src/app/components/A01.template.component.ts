import { Component } from '@angular/core';

@Component({
    selector: 'a01Component',
    // template: `
    //     <div class="card-body">
    //         <div class="card-heading">
    //             <h3>1. Template Sample</h3>
    //         </div>
    //         <div class="card-body">
    //             Name: {{name}}<br/>
    //             Obj: {{obj.id}} / {{obj.address}} <br/>
    //             <span *ngFor="let item of arry">Arrary: {{item}}</span>
    //         </div>
    //     </div>
    // `,
    templateUrl: './../html/a01.template.html',
    styleUrls: ['./../html/a01.styles.css']
    // styles: [`
    //     h3 { color: green; }
    // `]
})
export class A01Component {
    public name: string = 'HongGilDong';

    public obj: {id: number, address: string} = {
        id: 1,
        address: 'Seoul'
    };

    public ary: string[] = ['One', 'Two', 'Three'];


}
