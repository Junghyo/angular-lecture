// dir.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A01Component } from './A01.component';
import { A01OneDirective, A01TwoDirective, A01ThreeDirective } from '../directive/A01.directive';
import { A02Component, A02OneDirective } from './A02.input.component';
import { A03Component, A03OneDirective } from './A03.hostListener.component';
import { A04Component, A04OneDirective } from './A04.renderer.component';
import { A05Component, A05OneDirective } from './A05.renderer.component';
import { B01Component } from './B01.templateRef.component';
import { B02Component, B02OneComponent } from './B02.templateRef.component';
import { B03Component, B03OneDirective } from './B03.templateRef.component';

@NgModule({
    declarations: [
        A01Component, A02Component, A03Component, A04Component,
        A05Component, B01Component, B02Component, B02OneComponent,
        B03Component,

        A01OneDirective, A01TwoDirective, A01ThreeDirective,
        A02OneDirective, A03OneDirective, A04OneDirective,
        A05OneDirective, B03OneDirective

    ],
    imports: [ CommonModule ],
    exports: [
        A01Component, A02Component, A03Component, A04Component,
        A05Component, B01Component, B02Component, B03Component
    ],
    providers: [],
})
export class DirectiveModule {}