import { Directive, Input, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[a03OneDir]'
    // host: {
    //     '(mouseenter)': 'onMouseEnter()',
    //     '(mouseleave)': 'onMouseLeave()'
    // }
})
export class A03OneDirective { 
    @Input('a03OneDir') color: string;

    private elem: HTMLElement;

    constructor(private el: ElementRef, private render: Renderer) {
        console.log(el);
        this.elem = this.el.nativeElement;
        console.log(this.elem);
        console.log(render);
    }

    @HostListener('mouseenter') onMouseEnter(): void {
        console.log(this.elem);
        this.render.setElementStyle(this.elem, "color", this.color);
    }

    @HostListener('mouseleave') onMouseLeave(): void {
        this.render.setElementStyle(this.elem, "color", "");
    }
}