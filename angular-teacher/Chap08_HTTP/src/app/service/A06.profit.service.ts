// A06.profit.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ProfitService {

    constructor(private http: HttpClient){}

    public getData(url: string, keyword: string): Observable<any> {

        let params = new HttpParams()
            .set("year", keyword)

        let address = url + "?" + params;

        return this.http.get(address)
            .pipe(
                map( (data: string[]) => data),
                map( (data: string[]) => data['profit']),
                catchError(this.errorFn)
            )
    }

    private errorFn(err: HttpErrorResponse): Observable<never> {
        return throwError("잠시 후 다시 접속해 주시기 바랍니다..")
    }

}