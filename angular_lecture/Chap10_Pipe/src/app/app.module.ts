import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeModule } from './modules/pipe.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
