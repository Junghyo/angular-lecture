import { Injectable } from '@angular/core';

// 주입 가능한 객체
// 사용하는 컴퍼넌트 또는 providers: [HiService]로 정의되는 순간 객체화가 된다
// 컴퍼넌트의 생성자에서 선언된 매개변수가 동일 타입이 있으면 자동 주입
@Injectable()
export class HiService {
    
    private name: string = "접근불가";

    public age: number = 10;

    public user: {[key: string] : string} = {
        tel: '010-4025-5853',
        address: 'Seoul'
    }
    public getGreet(name: string): string {
        return `Hi, ${name}!!`;
    }
}