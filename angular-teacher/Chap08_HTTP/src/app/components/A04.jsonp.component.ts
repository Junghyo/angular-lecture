import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
    selector: 'a04Component',
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
            <button class="btn btn-primary" (click)="getData()">Search</button>
        </div>
        <div class="card-body" *ngFor="let item of wikiData">
            <b><a [href]="item.url" target="_blank">{{item.title}}</a></b><br>
            {{item.desc}}
        </div>
    </div>
    `,
    providers: []
})
export class A04Component  { 
    // https://en.wikipedia.org/w/api.php?search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK
    
    // module에 HttpClientJsonpModule을 별도로 올려야 한다

    public search: FormControl = new FormControl("WIKI", [Validators.required]);

    // view에서 사용할 변수
    public wikiData: {title: string, desc: string, url: string}[];



    constructor(private http: HttpClient){}

    public getData(): void {
        console.log(this.search.status);

        if(this.search.status === "VALID"){
            // 주소
            let url: string = "https://en.wikipedia.org/w/api.php";

            // 매개변수 세팅
            // ?search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK
            let params = new HttpParams()
            .set("search", this.search.value)
            .set("action", "opensearch")
            .set("format", "json")
            .set("callback", "JSONP_CALLBACK")

            let address = url + "?" + params.toString()
            console.log(address);
            this.http.jsonp(address, "")
            
            .pipe(
                map( (data: string[]) => {
                    let item: {title: string, desc: string, url: string}[] = [];

                    for(let i = 0; i < data[1].length; i++){
                        item.push(
                            {title: data[1][i], desc: data[2][i], url: data[3][i]}
                        )
                    }

                    return item;
                })
            )

            .subscribe(
                (data: {title: string, desc: string, url: string}[] ) => {
                    // console.log(data);
                    this.wikiData = data;
                },
                (error: HttpErrorResponse) => {
                    console.log(error.statusText);
                }
            )
        }
    }

}

// CREATE DATABASE test default CHARACTER SET UTF8;