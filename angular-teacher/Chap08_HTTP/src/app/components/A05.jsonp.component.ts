import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { WikiService } from '../service/A05.wiki.service';

@Component({
    selector: 'a05Component',
    template: `
    <div class="card-body">
        <div class="card-heading">
            <h3>4. JSONP</h3>
        </div>
        <div class="card-body">
            <label>검색어
            <input type="text" class="form-control"
                [formControl]="search">
            </label>
            <button class="btn btn-primary" (click)="getWiki()">Search</button>
        </div>
        <div class="card-body" *ngFor="let item of wikiData">
            <b><a [href]="item.url" target="_blank">{{item.title}}</a></b><br>
            {{item.desc}}
        </div>
    </div>
    `,
    providers: [ WikiService ]
})
export class A05Component  { 
    // https://en.wikipedia.org/w/api.php?search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK
    
    public search: FormControl = new FormControl("WIKI", [Validators.required]);
    public wikiData: {title: string, desc: string, url: string}[];

    constructor(private service: WikiService) {}

    public getWiki(): void {
        this.service.getData(this.search.value)
            .subscribe(
                (data: {title: string, desc: string, url: string}[]) => {
                    this.wikiData = data;
                },
                (error: string) => {
                    console.log(error);
                }
            )
    }
}