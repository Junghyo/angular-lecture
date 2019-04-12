// dir.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A01Component } from '../components/A01.component';
import { A01OneDirective, A01TwoDirective, A01ThreeDirective } from '../directives/a01.directive';
import { A02Component } from '../components/A02.input.component';
import { A02OneDirective } from '../directives/a02.directive';
import { A03Component } from '../components/A03.hostListener.component';
import { A03OneDirective } from '../directives/a03.directive';
import { A04Component, A04OneDirective } from '../components/A04.renderer.component';
import { A05Component, A05OneDirective } from '../components/A05.renderer.component';
import { B01Component } from '../components/B01.templateRef.component';
import { B02Component, B02OneComponent } from '../components/B02.templateRef.component';
import { B03Component, B03OneDirective } from '../components/B03.templateRef.component';

@NgModule({
    declarations: [
        A01Component,
        A01OneDirective,
        A01TwoDirective,
        A01ThreeDirective,
        A02Component,
        A02OneDirective,
        A03Component,
        A03OneDirective,
        A04Component,
        A04OneDirective,
        A05Component,
        A05OneDirective,
        B01Component,
        B02Component,
        B02OneComponent,
        B03Component,
        B03OneDirective

    ],
    imports: [ CommonModule ],
    exports: [
        A01Component, 
        A02Component,
        A03Component,
        A04Component,
        A05Component,
        B01Component,
        B02Component,
        B03Component
    ],
    providers: [],
})
export class DirectiveModule {}