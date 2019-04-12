import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'

import { A01Component } from './A01.http.promise.component';
import { A02Component } from './A02.http.observable.component';
import { A03Component } from './A03.http.service.component';
import { A04Component } from './A04.jsonp.component';

import { A03ProductService } from '../service/a03.product.service';
import { A05Component } from './A05.jsonp.component';
import { A06Component } from './A06.profit.component';

@NgModule({
    declarations: [
        A01Component,
        A02Component,
        A03Component,
        A04Component,
        A05Component,
        A06Component],
    imports: [ CommonModule, HttpClientModule, HttpClientJsonpModule, ReactiveFormsModule ],
    exports: [ A01Component, A02Component, A03Component, A04Component, A05Component, A06Component ],
    providers: [ A03ProductService ],
})
export class HttpModule {}