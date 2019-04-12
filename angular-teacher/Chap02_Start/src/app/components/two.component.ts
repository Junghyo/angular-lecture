import { Component } from "@angular/core";

// two.component.ts

@Component({
    selector: "twoComp",
    template: `
        <h3>{{title}}</h3>
    `
})
export class TwoComponent {
    title = "Two Component"
}