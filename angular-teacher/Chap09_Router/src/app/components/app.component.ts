import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>Router</h3>
            </div>

            <div class="card-body">
                <a routerLink="">HOME</a> | 
                <a routerLink="home">HOME</a> | 
                <a [routerLink]="['/product']">PRODUCT</a> |
                <br>

                <a [routerLink]="['/productParam/10']">PRODUCT PARAM 10</a> | 
                <a [routerLink]="['/productParam', 20]">PRODUCT PARAM 20</a> | 
                <a [routerLink]="['/productData', 200]">PRODUCT DATA</a> | 
                <a [routerLink]="['/productArgs']"  [queryParams]="{isProd: true, name: '홍길동', age: 20}">PRODUCT ARGS</a> | 

                <a [routerLink]="['/productChild']">Child</a> | 
                <a [routerLink]="['/productActivate']">Activate</a> | 
                <br>

                <a [routerLink]="[ {outlets: {primary: 'subHome', middle: 'content', footer: 'about'}} ]">All View</a> | 
                <a [routerLink]="[ {outlets: {primary: 'subHome', middle: 'content', footer: null}} ]">Two View</a> | 
                <a [routerLink]="[ {outlets: {primary: 'subHome', middle: null, footer: null}} ]">One View</a> | 
                <br>

                <a [routerLink]="['/luxury']">Luxury</a> | 

                <a [routerLink]="['/base/lazy']">Luxury Lazy</a> | 
                <br>
                
                <button (click)="goURL('home')">HOME</button>
                <button (click)="goURL('/productParam/50')">ProductParam</button>
                <button (click)="goURLArg('/productArgs', {queryParams: {isProd: true, name: '흥부', age: 20}})">ARGS</button>
            </div>

            <div class="card-body">
                <!-- component가 로드 될 위치
                    router module이 먼저 로드되어 있어야 에러 아님
                -->
                <router-outlet></router-outlet>
                <hr>
                <router-outlet name="middle"></router-outlet>
                <hr>
                <router-outlet name="footer"></router-outlet>

            </div>
        </div>
    `,
})
export class AppComponent  { 

    // 경로 참조를 위한 router를 주입받아 그 메서드를 이용
    constructor(private router: Router){}

    public goURL(path: string): void {
        this.router.navigate( [path] );
    }

    public goURLArg(path: string, data: any): void {
        this.router.navigate( [path], data );
    }
}

