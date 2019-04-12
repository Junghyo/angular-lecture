import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { A01Component } from './components/A01.service.component';
import { A02Component } from './components/A02.jumsu.component';
import { A03Component } from './components/A03.jumsu.component';
import { A04Component } from './components/A04.mock.component';
import { A05Component } from './components/A05.promise.component';
import { A06Component } from './components/A06_observable.component';
import { A07Component } from './components/A07.observable.component';
import { A08Component } from './components/A08.weather.component';

import { ScoreDAO } from './service/a02.scroe.dao.service';

import { DecimalPipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    A01Component,
    A02Component,
    A03Component,
    A04Component,
    A05Component,
    A06Component,
    A07Component,
    A08Component
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule
  ],
  // declarations에 선언한 컴퍼넌트에서 정의없이 사용 가능
  providers: [ ScoreDAO, DecimalPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
