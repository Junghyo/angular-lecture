import { Component } from "@angular/core";

@ Component({
    selector: "two-comp",
    template: `
        <h3>{{title}}</h3>
    `
})

export class TwoComponent {
    title = "Two Component"
}