// A03.Proudct.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class A03ProductService {

    constructor(private http: HttpClient) {}

    public getProduct(url: string): Observable<string[]> {
        return this.http.get(url)
        .pipe(
            map( (data: string[]) => data),
            catchError(this.errorFn)
        )
    }

    private errorFn(err: HttpErrorResponse): Observable<never> {
        let status = (err.status) ? `${err.status} - ${err.statusText}` : 'Server Error';
        let errMsg = (err.message) ? err.message : status;
        return throwError(errMsg)
    }
}