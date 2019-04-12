import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveModule } from './modules/dir.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
