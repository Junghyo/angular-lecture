// test.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-name',
    template: `
        <div>
            <h1></h1>
        </div>
    `
})
export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
