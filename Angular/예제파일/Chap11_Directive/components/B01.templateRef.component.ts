import { Component, ViewChild, ViewContainerRef, TemplateRef, EmbeddedViewRef } from '@angular/core';

@Component({
    selector: 'b01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>B01 TemplateRef</h3>
            </div>
            <div class="card-body">
                <button class="btn btn-sm btn-primary">View All</button>&ngsp;
                <button class="btn btn-sm btn-danger">Remove All</button>
            </div>
            <div class="card-body">
                <button class="btn btn-sm btn-primary">Temp 1</button>&ngsp;
                <button class="btn btn-sm btn-primary">Temp 2</button>&ngsp;
                <button class="btn btn-sm btn-danger">Remove</button>
            </div>

            <ng-template #temp1>
                <div class="card-body">
                    <div class="card-heading">
                        <h4>Template 1</h4>
                    </div>
                    <div class="card-body">
                        Message: {{message}}<br>
                        Name: 
                    </div>
                </div>
            </ng-template>

            <ng-template #temp2>
                <div class="card-body">
                    <div class="card-heading">
                        <h4>Template 2</h4>
                    </div>
                    <div class="card-body">
                        Message: {{message}}<br>
                    </div>
                </div>
            </ng-template>
        </div>
    `
})
export class B01Component {
    public message: string = 'B01 Component';
    private view: boolean = true;
}
