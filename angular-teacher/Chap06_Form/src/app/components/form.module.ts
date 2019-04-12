// form.module.ts

import { NgModule } from '@angular/core';
// View => FormsModule
// Model => ReactiveFormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { A01Component } from './A01_NgForm';
import { A02Component } from './A02_FormGroup';
import { A03Component } from './A03_FormArray';
import { A04Component } from './A04_FormGroupValidation';
import { A05Component } from './A05_FormGroupValidation';

@NgModule({
    declarations: [
        A01Component, A02Component, A03Component, A04Component,
        A05Component
    ],
    imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
    exports: [
        A01Component, A02Component, A03Component, A04Component,
        A05Component
    ],
    providers: [],
})
export class FormModule {}