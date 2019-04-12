import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// sub module
import { Chap05Module } from './components/ch05.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Chap05Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
