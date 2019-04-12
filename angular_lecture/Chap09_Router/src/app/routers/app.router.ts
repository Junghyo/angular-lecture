import { HomeComponent } from '../components/home.component';
import { ProductDetailComponent } from '../components/product.component';

import { RouterModule } from '@angular/router';
import { ProductParamComponent } from '../components/product01.param.component';
import { ProductDataComponent } from '../components/product02.data.component';
import { ProductArgsComponent } from '../components/product03.args.component';
import { ProductChildComponent } from '../components/product04.childMain.component';
import { DescriptionComponent } from '../components/childComponent/description.component';
import { SellerComponent } from '../components/childComponent/seller.component';
import { ProductActivateComponent } from '../components/product05.active.component';
import { LoginGuard } from '../services/login.guard';
import { LogoutGuard } from '../services/logout.guard';
import { NotFoundComponent } from '../components/notFound.component';
import { SubHomeComponent } from '../components/company/subHome.component';
import { ContentComponent } from '../components/company/content.component';
import { AboutComponent } from '../components/company/about.component';

export const AppRouter = RouterModule.forRoot([
    // {path: "", component: HomeComponent},
    // {path: "", redirectTo: "home", pathMatch: "prefix"},
    {path: "", redirectTo: "home", pathMatch: "full"},

    {path: "home", component: HomeComponent},
    {path: "product", component: ProductDetailComponent},

    // data 전달
    // path 방식 : /:id => 변수명이 된다.
    // 요청하는 패스 [routerLink]="['/productParam/10']"와 같이 요청하면 id=10과 같은 의미
    /*path: "productParam/:id" 
            "productParam" => X
            "productParam/10" => OK
            "productParam/10/40" => X
       
      path: "productParam/:data/prod/:id"   변수명 : data, id 
            "productParam" => X
            "productParam/10" => OK
            "productParam/10/40" => X
            "productParam/10/prod" => X
            "productParam/10/40/50" => X
            "productParam/10/prod/50" => OK
     
    */      
    {path: "productParam/:id", component: ProductParamComponent},

    // 고정 데이터 전달
    {path: "productData/:num", component: ProductDataComponent,
        data: [
            {isProd: true, name: "yoda", age: 31},
            {isProd: false, name: "kim", age: 21},
            {isProd: true, name: "song", age: 11}
        ]
    },

    // 웹 url의 매개변수로 넘김
    // 여기서 설정은 없고 링크에서 매개변수를 설정한다.
    {path: "productArgs", component: ProductArgsComponent},


    // 로드된 컴퍼넌트가 <router-outlet>을 가지고 있어서 
    // 그 하위에 또 다시 다른 컴포넌트(하위 컴포넌트)를 로드하는 경우
    {path: "productChild", component: ProductChildComponent,
        children: [
            {path: "desc", component: DescriptionComponent},
            {path: "seller/:id", component: SellerComponent}
        ]
    },

    // Activate
    {path: "productActivate", component: ProductActivateComponent,
        canActivate: [ LoginGuard ],
        canDeactivate: [ LogoutGuard ]
    },

    // 외부 router 등록 => 여기서는 안함. module에서 등록만 하면 됨.
    // luxury.module.ts 파일에 등록된 패스를 그대로 가져와 사용한다.

    // lazy load
    {path: 'base', loadChildren: "./modules/lazy.module#LazyModule"},


    // 다중 outlet 설정
    // 페이지에 <router-outlet>이 여러개 있어야 하며, 각 이름이 있어야 한다.
    {path: "subhome", component: SubHomeComponent, outlet: "primary"},
    {path: "content", component: ContentComponent, outlet: "middle"},
    {path: "about", component: AboutComponent, outlet: "footer"},


    // 위의 모든 조건(path)가 매칭되지 않는 경우
    // 항상 맨 마지막에 있어야 한다.
    {path: "**", component: NotFoundComponent}
])