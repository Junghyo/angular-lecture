import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';
import { appRouter } from './components/app.router';
import { ProductParamComponent } from './components/product01.param.component';
import { ProductDataComponent } from './components/product02.data.component';
import { ProductArgsComponent } from './components/product03.args.component';
import { ProductChildComponent } from './components/product04.childMain.component';
import { DescriptionComponent } from './components/childComponent/description.component';
import { SellerComponent } from './components/childComponent/seller.component';
import { LoginGuard } from './service/Login.guard';
import { ProductActivateComponent } from './components/product05.active.component';
import { LogoutGuard } from './service/Logout.guard';
import { LuxuryModule } from './components/luxury/luxury.module';
import { NotFoundComponent } from './components/notFound.component';
import { SubHomeComponent } from './components/company/subHome.component';
import { ContentComponent } from './components/company/content.component';
import { AboutComponent } from './components/company/about.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProductDetailComponent,
    ProductParamComponent, ProductDataComponent, ProductArgsComponent,
    ProductChildComponent, DescriptionComponent, SellerComponent,
    ProductActivateComponent, NotFoundComponent,
    SubHomeComponent, ContentComponent, AboutComponent
  ],
  imports: [
    BrowserModule, appRouter, LuxuryModule
    /*
    RouterModule.forRoot([
      // { path: url,   component: url이 클릭되면 로드될 컴포넌트명 }
      // 외부 파일 app.router.ts로 분리. import에 기술
      { path: "",       component: HomeComponent},
      { path: "home",     component: HomeComponent},
      { path: "product",     component: ProductDetailComponent},
    ])
    */
  ],
  // Guard를 먼저 정의해야 함
  providers: [ LoginGuard, LogoutGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
