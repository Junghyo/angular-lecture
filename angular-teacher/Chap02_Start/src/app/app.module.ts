import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StartComponent } from './start.component';
import { OneComponent } from './components/one.component';
import { TwoComponent } from './components/two.component';


@NgModule({
  declarations: [
    StartComponent, OneComponent, TwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [StartComponent, TwoComponent]
})
export class AppModule { }
