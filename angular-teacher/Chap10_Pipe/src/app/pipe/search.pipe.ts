// search.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
    transform(data: Array<any>, field: string, value: string='', ignore: boolean = false): Array<any> {
        
        if(!field){
            let fields = Object.keys(data[0]);
            console.log(fields);
            field = fields[0];
        }

        let result: Array<any> = [];

        if(ignore){
            data.forEach( (item: any, index) => {
                let str = item[field].toString();
                if(str.indexOf(value.toString()) != -1){
                    result.push(item);
                }
            })
        }else{
            data.forEach( (item: any, index) => {
                // console.log(item[field]);
                let str = item[field].toString().toUpperCase();
                if(str.indexOf(value.toString().toUpperCase()) != -1){
                    result.push(item);
                }
            })
        }

        return result;
        
    }
}




@Pipe({name: 'keyName'})
export class KeyNamePipe implements PipeTransform {
    transform(data: Array<any>): Array<string> {
        
        // TypeCheck
        let keys = Object.keys(data[0]);
        return keys;
    }
}