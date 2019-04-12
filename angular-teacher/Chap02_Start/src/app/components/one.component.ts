import { Component } from "@angular/core";

// one.component.ts

@Component({
    selector: "oneComp",
    template: `
        <h3>{{title}}</h3>
    `
})
export class OneComponent {
    title = "One Component"
}