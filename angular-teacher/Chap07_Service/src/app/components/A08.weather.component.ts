
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, switchMap, map } from 'rxjs/operators';


@Component({
    selector: 'a08Component',
    template: `
    <div class="card-body">
        <div class="card-heading">
            <h3>8. Observable Weather</h3>
        </div>

        <div class="card-body">
            <input type="text" class="form-control" 
                placeholder="Enter stock" [formControl]="search"><br>
            Temperature: {{temperature}}
        </div>
    </div>
    `,
})
export class A08Component  { 
    private baseWeatherURL : string = 'http://api.openweathermap.org/data/2.5/weather?q=';
    private urlSuffix : string = '&units=metric&appid=ca3f6d6ca3973a518834983d0b318f73';
    
    public search: FormControl = new FormControl();
    public temperature: string;

    constructor(public http: HttpClient) {}


    ngOnInit(): void {
        this.search.valueChanges
            .pipe(
                debounceTime(1000),
                switchMap( (data:string) => {
                    return this.http.get(this.baseWeatherURL + data + this.urlSuffix)
                })
            )

            .pipe(
                map( (data: any) => data['main'] ),
                map( (data: any) => {
                    let result = `Temp: ${data.temp}, Humidity:${data.humidity}`
                    return result;
                })
            )

            .subscribe(
                (data: string) => {
                    // console.log(data);
                    this.temperature = data;
                },
                (error: any) => {
                    console.log(error);
                }
            )
    }
    
}