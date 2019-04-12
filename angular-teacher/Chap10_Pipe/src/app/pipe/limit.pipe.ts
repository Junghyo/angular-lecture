// limit.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'limit'})
export class LimitPipe implements PipeTransform {
    transform(data: Array<any>, limit: number = data.length): Array<any> {
        if(data instanceof Array){

            // 넘어온 데이터 배열에서 일정 조건이 만족하는 데이터만
            // 저장할 배열
            let result: Array<any> = [];

            for(let i = 0; i < data.length; i++){
                if(i < limit){
                    result.push(data[i])
                }else{
                    break;
                }
            }
            return result;
        }else{
            return data;
        }
    }
}



@Pipe({name: 'aryNum'})
export class ArrayNumPipe implements PipeTransform {
    transform(data: Array<any>): Array<number> {
        if(data instanceof Array){

            let result: number[] = [];
            for(let i = 0; i <= data.length; i++){
                result.push(i);
            }

            return result;
        }
    }
}



