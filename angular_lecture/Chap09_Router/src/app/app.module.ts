import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { ProductDetailComponent } from './components/product.component';
import { AppRouter } from './routers/app.router';
import { ProductParamComponent } from './components/product01.param.component';
import { ProductDataComponent } from './components/product02.data.component';
import { ProductArgsComponent } from './components/product03.args.component';
import { ProductChildComponent } from './components/product04.childMain.component';
import { SellerComponent } from './components/childComponent/seller.component';
import { DescriptionComponent } from './components/childComponent/description.component';
import { LoginGuard } from './services/login.guard';
import { ProductActivateComponent } from './components/product05.active.component';
import { LogoutGuard } from './services/logout.guard';
import { LuxuryModule } from './modules/luxury.module';
import { NotFoundComponent } from './components/notFound.component';
import { SubHomeComponent } from './components/company/subHome.component';
import { ContentComponent } from './components/company/content.component';
import { AboutComponent } from './components/company/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductParamComponent,
    ProductDataComponent,
    ProductArgsComponent,
    ProductChildComponent,
    SellerComponent,
    DescriptionComponent,
    ProductActivateComponent,
    NotFoundComponent,
    SubHomeComponent,
    ContentComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, AppRouter, LuxuryModule
    // routers/app.router.ts로 분리
    // RouterModule.forRoot([
    //   path: url, component: url이 클릭되면 로드될 컴포넌트명
    //   {path: "", component: HomeComponent},
    //   {path: "home", component: HomeComponent},
    //   {path: "product", component: ProductDetailComponent}
    // ])
  ],
  providers: [ LoginGuard, LogoutGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
