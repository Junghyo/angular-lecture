// chap05.module.ts

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { A01Component } from './A01.parent.component';
import { A01ChildComponent } from './A01.child.component';
import { A01GrandComponent } from './A01.grand.component';
import { A02Component, A02OneComponent } from './A02.input.component';
import { A03Component, A03OneComponent } from './A03.output.component';
import { A04Component, A04OneComponent, A04TwoComponent } from './A04.inOutput.component';
import { A05Component, A05OneComponent } from './A05.viewChild.component';
import { A06Component, A06OneComponent } from './A06.projection.component';
import { A07Component, A07OneComponent } from './A07.life.component';
import { A08Component, A08OneComponent } from './A08.host.component';

@NgModule({
    declarations: [ A01Component, A01ChildComponent, A01GrandComponent,
        A02Component, A02OneComponent, A03Component, A03OneComponent,
        A04Component, A04OneComponent, A04TwoComponent,
        A05Component, A05OneComponent,
        A06Component, A06OneComponent,
        A07Component, A07OneComponent,
        A08Component, A08OneComponent
    ],
    imports: [ CommonModule, FormsModule ],
    exports: [ A01Component, A02Component, A03Component,
        A04Component, A05Component, A06Component,
        A07Component, A08Component
    ],
    providers: [],
})
export class Chap05Module {}