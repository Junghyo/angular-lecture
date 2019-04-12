import { Pipe, PipeTransform } from '@angular/core';


// {{123.23 | currency | 'KRW' : 'code'}
// currency => name (upLow)
// 123.23 => transform 메소드의 첫번쨰 매개변수에 해당
// 'KRW' => transform 메소드의 두번쨰 매개변수에 해당
// 'code' => transform 메소드의 세번쨰 매개변수에 해당
@Pipe({name: 'upLow'})
export class UpLowPipe implements PipeTransform {
    public transform(data: string, toCase: string): string {
        // 사용자의 잘못된 입력에 대한 가드를 구현 (예를 들어 숫자로 들어올 경우 error가 발생함)
        if(typeof data !== 'string') return data;
        if(typeof toCase !== 'string') return data;
        if(toCase === 'lower') {
            return data.toLowerCase();
        } else if (toCase === 'upper') {
            return data.toUpperCase();
        } else {
            return data;
        }
    }
}