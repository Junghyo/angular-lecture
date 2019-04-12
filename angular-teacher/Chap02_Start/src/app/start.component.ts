import { Component } from "@angular/core";

// start.component.ts

@Component({
    selector: "startComp",
    template: `
        <h1>Start Component</h1>

        <div>
            Hello~ {{name}}<br>
            <button (click)="changeName()">Change</button>
        </div>

        <div>
            <oneComp></oneComp>
        </div>
    `
})
export class StartComponent {
    public name: string = "NolBu";

    public changeName(): void {
        this.name = "HungBu"
    }
}