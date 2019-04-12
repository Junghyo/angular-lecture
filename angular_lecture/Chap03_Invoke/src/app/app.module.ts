import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { A01InvokeComponent } from './a01.invoke.component';
import { FormsModule } from '@angular/forms';
import { A02InvokeComponent } from './a02.invoke.component';

@NgModule({
  declarations: [
    A01InvokeComponent,
    A02InvokeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [A01InvokeComponent, A02InvokeComponent]
})
export class AppModule { }
