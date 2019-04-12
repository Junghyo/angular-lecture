import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { A01Component } from '../components/A01.pipe.component';
import { A02Component } from '../components/A02.pipe.component';
import { A03Component } from '../components/A03.pipe.component';
import { FormsModule } from '@angular/forms';
import { A04Component } from '../components/A04.custom.component';
import { UpLowPipe } from '../pipes/up.low.pipe';
import { A05Component } from '../components/A05.custom.component';
import { ReplacePipe } from '../pipes/replace.pipe';
import { AbbrPipe } from '../pipes/abbr.pipe';
import { LimitPipe, ArrayNumPipe } from '../pipes/limit.pipe';
import { SearchPipe, KeyNamePipe } from '../pipes/search.pipe';
@NgModule({
    declarations: [
        A01Component,
        A02Component,
        A03Component,
        A04Component,
        A05Component,
        UpLowPipe,
        ReplacePipe,
        AbbrPipe,
        LimitPipe,
        ArrayNumPipe,
        SearchPipe,
        KeyNamePipe
    ],
    imports: [ CommonModule, FormsModule],
    exports: [A01Component, A02Component, A03Component, A04Component, A05Component],
    providers: [DatePipe, CurrencyPipe],
})
export class PipeModule {}