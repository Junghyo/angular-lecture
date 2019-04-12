import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuxuryLazyComponent } from '../components/luxuryLazy/luxuryLazy.component';
import { RouterModule } from '@angular/router';


// app.module.ts에 import에 등록하는 순간 로드가 완료되므로 등록을 하지 않음.
// path에만 등록
@NgModule({
    declarations: [LuxuryLazyComponent],
    imports: [ 
        CommonModule,
        RouterModule.forChild([
            {path: 'lazy', component: LuxuryLazyComponent}
        ]) 
    ],
    exports: [],
    providers: [],
})
export class LazyModule {}