import { Directive, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Directive({
    selector: 'a01OneDir',
    host: {
        '(click)': 'onClick()'
    }
})
export class A01OneDirective { 
    public onClick(): void {
        console.log("A01 One Directive");
    }
}



@Directive({
    selector: '[a01TwoDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A01TwoDirective { 
    public onClick(): void {
        console.log("A01 Two Directive");
    }
}


@Directive({
    selector: '[a01ThreeDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A01ThreeDirective { 
    @Input("a01ThreeDir") data: any;
    public onClick(): void {
        console.log("A01 Three Directive: " + this.data);
    }
}