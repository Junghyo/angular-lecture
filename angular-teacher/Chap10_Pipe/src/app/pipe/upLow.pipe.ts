// upLow.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

// {{12345.6789 | currency | 'KRW' : 'code' }}
// currency => name (upLow)

// 12345.6789 => transform 메소드의 첫번째 매개변수에 해당
// 'KRW' => transform 메소드의 두번째 매개변수에 해당
// 'code' => transform 메소드의 세번째 매개변수에 해당
@Pipe({name: 'upLow'})
export class UpLowPipe implements PipeTransform {
    transform(data: string, word: string): string {
        // 사용자의 잘못된 입력에 대한 가드를 구현
        if(typeof data !== 'string') return data;
        if(typeof word !== 'string') return data;

        if(word === 'lower'){
            return data.toLowerCase();
        }else if(word === 'upper'){
            return data.toUpperCase();
        }else{
            return data;
        }
        
    }
}