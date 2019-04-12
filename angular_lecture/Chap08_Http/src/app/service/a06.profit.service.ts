import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ProfitService {

    constructor(private http: HttpClient) { }

    public getData(url: string, year: string): any {
        let params = new HttpParams()
        .set("year", year)

        let address = url + "?" + params;

        return this.http.get(address)
        .pipe(
            map( (data: string[]) => data['profit']),
            catchError(this.errorFn)
        )
    }

    private errorFn(err: HttpErrorResponse): Observable<never> {
        return throwError(err.statusText + ":" + err.status);
    }
}

