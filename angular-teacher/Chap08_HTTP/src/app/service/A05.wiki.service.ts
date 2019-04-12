// A05.wiki.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

@Injectable()
export class WikiService {

    constructor(private http: HttpClient){}

    public getData(search: string): Observable<{title: string, desc: string, url: string}[]>{

        if(search){
            // 주소
            let url: string = "https://en.wikipedia.org/w/api.php";

            // 매개변수 세팅
            // ?search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK
            let params = new HttpParams()
            .set("search", search)
            .set("action", "opensearch")
            .set("format", "json")
            .set("callback", "JSONP_CALLBACK")

            let address = url + "?" + params.toString()
            console.log(address);

            return this.http.jsonp(address, "")
                .pipe(
                    map( (data: string[]) => {
                        let item: {title: string, desc: string, url: string}[] = [];

                        for(let i = 0; i < data[1].length; i++){
                            item.push(
                                {title: data[1][i], desc: data[2][i], url: data[3][i]}
                            )
                        }

                        return item;
                    }),
                    catchError(this.errorFn)
                )
        }
    }

    public errorFn(err: HttpErrorResponse): Observable<never> {
        return throwError("에러 발생")
    }

}