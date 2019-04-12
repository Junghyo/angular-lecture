import { Injectable } from '@angular/core';

// A01_Hi.service

// 주입 가능한 객체
// 사용하는 컴퍼넌트 또는 모듈의 providers: [ HiService ]로 정의되는 순간 객체화가 된다.
// 추후 컴퍼넌트의 생성자에서 선언된 매개변수가 동일 타입이 있으면 자동 주입
@Injectable()           
export class HiService {

    private name: string = "접근불가";

    public age: number = 10;
    public user: any = {
        tel: '010-1234-5678',
        add: 'seoul'
    }
    
    public getGreet(name: string): string {
        return "Hi " + name;
    }

}