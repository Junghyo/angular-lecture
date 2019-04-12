import { Component, Input, HostListener, ElementRef, Renderer } from '@angular/core';

import { Directive } from '@angular/core';

@Directive({
    selector: '[a03OneDir]',
    /*
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
    */
})
export class A03OneDirective {

    @Input('a03OneDir') color: string;

    private elem: HTMLElement

    constructor(private el: ElementRef, private render: Renderer){
        // console.log(this.el);
        this.elem = this.el.nativeElement;

        console.log(this.color);
    }

    @HostListener('mouseenter') onMouseEvent(): void {
        this.render.setElementStyle(this.elem, "color", this.color);
    }

    @HostListener('mouseleave') onMouseLeave(): void {
        this.render.setElementStyle(this.elem, "color", "");
    }
}


@Component({
    selector: 'a03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>3. Directive HostListener</h3>
            </div>

            <div class="card-body">
                <div [a03OneDir]="'orange'">Directive Attribute</div>
                <p [a03OneDir]="'green'">Native Attribute</p>
            </div>
        </div>
    `
})
export class A03Component {

}
