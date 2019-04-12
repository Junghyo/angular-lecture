import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { A01InvokeComponent } from './A01_Invoke.component';
import { A02InvokeComponent } from './A02_Invoke.component';


@NgModule({
  declarations: [
    A01InvokeComponent, A02InvokeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [A01InvokeComponent, A02InvokeComponent]
})
export class AppModule { }
