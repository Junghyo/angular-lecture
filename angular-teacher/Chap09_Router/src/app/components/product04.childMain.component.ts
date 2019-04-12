import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'productChild',
    template: `
        <div class="card-boyd">
            <h3>Product Child Component</h3>
            <div>
                <p>
                    <!-- 경로에 '/desc' 는 root 라우터에서 찾음 -->
                    <a [routerLink]="['desc']">Description</a> | 
                    <a [routerLink]="['seller/100']">Seller Info</a>
                </p>

                <router-outlet></router-outlet>
                
            </div>
        </div>
    `
})
export class ProductChildComponent{
    
}