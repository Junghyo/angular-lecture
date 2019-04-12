import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { ProductParamComponent } from './product01.param.component';
import { ProductDataComponent } from './product02.data.component';
import { ProductArgsComponent } from './product03.args.component';
import { ProductChildComponent } from './product04.childMain.component';
import { DescriptionComponent } from './childComponent/description.component';
import { SellerComponent } from './childComponent/seller.component';
import { ProductActivateComponent } from './product05.active.component';
import { LoginGuard } from '../service/Login.guard';
import { LogoutGuard } from '../service/Logout.guard';
import { NotFoundComponent } from './notFound.component';
import { SubHomeComponent } from './company/subHome.component';
import { ContentComponent } from './company/content.component';
import { AboutComponent } from './company/about.component';

// app.router.ts
export const appRouter = RouterModule.forRoot([
    // { path: "",       component: HomeComponent},

    // "prefix"
    { path: "",    redirectTo: "home",      pathMatch: "full"},

    { path: "home",     component: HomeComponent},
    { path: "product",     component: ProductDetailComponent},

    // data 전달
    // path 방식 - /:id => 변수명이 된다
    // 요청하는 패스 [routerLink]="['/productParam/10']와 같이 요청하면
    // id = 10과 같은 의미
    // path: "productParam/:id
    //      productParam => X
    //      productParam/10 => OK
    //      productParam/10/40      => X

    //      "productParam/:data/prod/:id"
    //      변수명 => data, id
    //      productParam => X
    //      productParam/10 => X
    //      productParam/10/40      => X
    //      productParam/10/prod      => X
    //      productParam/10/40/50      => X
    //      productParam/10/prod/50      => OK
    { path: "productParam/:id",     component: ProductParamComponent},

    // 고정 데이터 전달
    { path: "productData/:num",     component: ProductDataComponent, 
        data: [
            {isProd: true, name: "홍길동", age: 20},
            {isProd: false, name: "놀부", age: 40}
        ]
    },

    // 웹 브라우저 주소줄의 매개변수로 넘김.
    // 여기서 설정은 없고 링크에서 매개변수를 설정한다
    { path: "productArgs",      component: ProductArgsComponent},

    // 로드된 컴퍼넌트가 <router-outlet>을 가지고 있어서
    // 그 하위에 또 다시 다른 컴퍼넌트(하위 컴퍼넌트)를 로드하는 경우
    { path: "productChild",     component: ProductChildComponent,
        children: [
            { path: "desc",         component: DescriptionComponent},
            { path: "seller/:id",   component: SellerComponent}
        ]
    },

    // Activate
    { path: "productActivate",  component: ProductActivateComponent,
        canActivate: [ LoginGuard ],
        canDeactivate: [ LogoutGuard ],
    },


    // 외부 router 등록 => 여기서는 안함. module에서 등록만 하면 됨
    // luxury.module.ts 파일에 등록된 패스를 그대로 가져와 사용한다


    // lazy load
    { path: 'base',    loadChildren: "./components/luxuryLazy/lazy.module#LazyModule"},


    // 다중 outlet 설정
    // 페이지에 <router-outlet>이 여러개 있어야 하며, 각 이름이 있어야 한다
    { path: "subHome",  component: SubHomeComponent,  outlet: "primary"},
    { path: "content",  component: ContentComponent,  outlet: "middle"},
    { path: "about",  component: AboutComponent,  outlet: "footer"},


    // 위의 모든 조건(path)가 매칭되지 않는 경우
    // 항상 맨 마지막에 있어야 한다.
    { path: "**",   component: NotFoundComponent}

])