import { Component } from "@angular/core";

@ Component({
    selector: "one-comp",
    template: `
        <h3>{{title}}</h3>
    `
})

export class OneComponent {
    title = "One Component"
}