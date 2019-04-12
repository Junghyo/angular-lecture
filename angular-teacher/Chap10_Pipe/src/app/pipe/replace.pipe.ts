// replace.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'replace'})
export class ReplacePipe implements PipeTransform {
    transform(data: string, oldValue: string, newValue: string): string {
        if(typeof data !== "string") return data;
        if(typeof oldValue !== "string" || typeof newValue !== "string") return data;

        return data.replace(oldValue, newValue);



        // let ary = data.split('');
        // let reverse = ary.reverse();
        // return reverse.join('-')


    }
}