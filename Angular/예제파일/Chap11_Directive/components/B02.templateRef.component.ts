import { Component, ContentChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
    selector: 'b02OneComp',
    template: `
        <div class="card-body">
            <h4>Child Component</h4>
            <button class="btn btn-sm btn-primary">VIEW</button>&nbsp;
            <button class="btn btn-sm btn-danger">REMOVE</button>
            <br>
            <br>

            <ng-content></ng-content>
        </div>
    `
})
export class B02OneComponent {
    public view: boolean = true;
    public message: string = 'B02 One Component Message';
    public sendData: any = {
        message: this.message,
        name: 'NolBu',
        getInfo: function(){
            console.log(`${this.name}님 방문해 주셔서 감사합니다.`);
        }
    };
}

@Component({
    selector: 'b02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>B02 TemplateRef</h3>
                <span>B02 Component Content</span>
            </div>

            <div class="card-body">
                <b02OneComp>
                    
                    <div>내부 Template</div>

                    <ng-template>
                        <h4>Child In Template</h4>
                        <div>
                            Message: {{message}}<br>
                            <button class="btn btn-sm btn-primary">Main Method</button>
                        </div>
                       
                        <br>

                        <div>
                            <div>Name: </div>
                            <div>Msg: </div>
                            <button class="btn btn-sm btn-primary">Inner Click</button>
                        </div>
                    </ng-template>
                </b02OneComp>
            </div>

        </div>
    `
})
export class B02Component {
    public message: string = 'B02 Component Message';

}

