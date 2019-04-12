// lazy.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryLazyComponent } from './luxuryLazy.component';
import { RouterModule } from '@angular/router';

// Lazy Load 목적
// app.module.ts에 import에 등록하는 순간 로드가 완료되므로 등록 안함
// path에 이 module까지의 경로를 모두 등록
@NgModule({
    declarations: [ LuxuryLazyComponent ],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: 'lazy',  component: LuxuryLazyComponent}
        ])
    ],
    exports: [],
    providers: [],
})
export class LazyModule {}