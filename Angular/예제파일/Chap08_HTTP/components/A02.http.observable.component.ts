
import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. HTTP Service - Observable</h3>
            </div>
            <div class="card-body">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Expiry</th>
                    <tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <button class="btn btn-primary">Load</button>
            </div>

            <div class="card-body">
                {{products | json}}
            </div>
        
        </div>
    `,
})
export class A02Component  {
    
}