import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeModule } from './components/pipe.module';

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
