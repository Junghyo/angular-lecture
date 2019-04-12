import { Component, Directive, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
    selector: 'b03OneDir'
})
export class B03OneDirective { }


@Component({
    selector: 'b03Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>B03 TemplateRef</h3>
            </div>
            <div class="card-body">

                <b03OneDir #one></b03OneDir>
                

                <button class="btn btn-sm btn-primary" (click)="viewTemp()">ADD</button>
                <br>


                <ng-template #temp>
                    <h4>Template Content 1</h4>
                </ng-template>

            </div>
            
            
        </div>
    `
})
export class B03Component {
    @ViewChild("one", {read: ViewContainerRef}) one: ViewContainerRef;
    @ViewChild("temp") temp: TemplateRef<HTMLElement>;


    public viewTemp(): void {
        this.one.createEmbeddedView(this.temp)
    }
}
