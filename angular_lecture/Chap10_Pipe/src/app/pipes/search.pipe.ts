import { Pipe, PipeTransform } from '@angular/core';
import { KeyRegistry } from '@angular/core/src/di/reflective_key';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
    transform(
        data: Array<any>,
        field: string, 
        keyword: string = '', 
        ignore: boolean = false): Array<any> {

            if(!field) {
                let fields = Object.keys(data[0]);
                field = fields[0];
            }

            let result: Array<any> = [];

            if(ignore) {
                data.forEach((item, index) => {
                    let str = item[field].toString();
                    if(str.indexOf(keyword.toString()) != -1) {
                        result.push(item);
                    }
                })
            } else {
                data.forEach((item, index) => {
                    let str = item[field].toString().toUpperCase();
                    if(str.indexOf(keyword.toString().toUpperCase()) != -1) {
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