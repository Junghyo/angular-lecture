import { Component } from "@angular/core";

@Component({
    selector: "start-comp",
    template: `
    <h1>Start Component</h1>
    <div>
        Hello~ {{name}}!<br/>
        <button type="button" (click)="changeName()">Change</button>
    </div>
    <div>
        <one-comp></one-comp>
    </div>
    `
})

export class StartComponent {
    public name: string = "Yoda";
    public check: boolean = true;

    public changeName(): void {
        if(this.check===true) {
            this.check=false;
            this.name="Seo";
        } else {
            this.check=true;
            this.name="Yoda";
        }
    }
}