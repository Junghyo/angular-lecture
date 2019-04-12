import { Component }          from '@angular/core';

@Component({
    selector: 'a01Component',
    // template: ``,
    templateUrl: './../html/A01Temp.html',
    // 이 컴퍼넌트에만 적용할 CSS를 정의
    styleUrls: ['./../html/A01Style.css'],
    // styles: [``],
})
export class A01Component{
    public name: string = 'HongGilDong';
    
    public obj: {id: number, address: string} = {
        id: 1,
        address: 'Seoul'
    };

    public ary: string[] = ['One', 'Two', 'Three'];

    
}
