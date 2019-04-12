// pipe.module.ts

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { A01Component } from './A01.pipe.component';
import { A02Component } from './A02.pipe.component';
import { A03Component } from './A03.pipe.component';
import { A04Component } from './A04.custom.component';
import { A05Component } from './A05.custom.component';

import { UpLowPipe } from '../pipe/upLow.pipe';
import { ReplacePipe } from '../pipe/replace.pipe';
import { AbbrPipe } from '../pipe/abbr.pipe';
import { LimitPipe, ArrayNumPipe } from '../pipe/limit.pipe';
import { SearchPipe, KeyNamePipe } from '../pipe/search.pipe';

@NgModule({
    declarations: [
        A01Component, A02Component, A03Component,
        A04Component, A05Component,
        UpLowPipe, ReplacePipe, AbbrPipe, LimitPipe, ArrayNumPipe,
        SearchPipe, KeyNamePipe
    ],
    imports: [ CommonModule, FormsModule ],
    exports: [
        A01Component, A02Component, A03Component,
        A04Component, A05Component
    ],
    providers: [
        DatePipe, CurrencyPipe
    ],
})
export class PipeModule {}