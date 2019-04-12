import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'abbr'})
export class AbbrPipe implements PipeTransform {
    transform(data: string, size: number = 20, symbol: string = '...'): string {
        if(typeof data !== 'string') return data;
        if(typeof symbol !== 'string' || typeof size !== 'number') return data;

        if(data.length < size) {
            return data;
        } else {
            return data.substr(0, size-symbol.length)+symbol;
        }
    }
}