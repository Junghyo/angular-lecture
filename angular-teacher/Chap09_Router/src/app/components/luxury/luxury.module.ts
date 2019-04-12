// luxury.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryComponent } from './luxury.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ LuxuryComponent ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            { path: "luxury",   component: LuxuryComponent }
        ])
    ],
    exports: [ LuxuryComponent ],
    providers: [],
})
export class LuxuryModule {}