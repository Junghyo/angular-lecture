import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[a02OneDir]',
    host: {
        '(click)': 'onClick()'
    }
})
export class A02OneDirective { 
    @Input('a02OneDir') name: string;
    @Input() age: number;
    @Input() info: {[key: string]: string };
    public onClick(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.info.address}, Tel: ${this.info.tel}`);
    }
}
