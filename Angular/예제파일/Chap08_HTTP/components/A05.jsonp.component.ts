import { Component } from '@angular/core';

@Component({
    selector: 'a05Component',
    template: `
    <div class="card-body">
        <div class="card-heading">
            <h3>4. JSONP</h3>
        </div>
        <div class="card-body">
            <label>검색어
            <input type="text" class="form-control">
            </label>
            <button class="btn btn-primary">Search</button>
        </div>
        <div class="card-body">
            <b></b><br>
            
        </div>
    </div>
    `,
    providers: []
})
export class A05Component  { 
    // https://en.wikipedia.org/w/api.php?search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK
    
    
}