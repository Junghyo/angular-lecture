import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StartComponent } from './start.component';
import { OneComponent } from './components/one.component';
import { TwoComponent } from './components/two.component';



@NgModule({
  // Pipe, Component, Directive(지시자)
  declarations: [
    StartComponent,
    OneComponent,
    TwoComponent   
  ],
  // Service, Module
  imports: [
    BrowserModule
  ],
  // 사용자 정의 Service
  providers: [],
  bootstrap: [StartComponent, TwoComponent]
})
export class AppModule { }
