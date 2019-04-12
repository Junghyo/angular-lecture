// A01_Hello.service.ts

export class HelloService {

    private name: string = "접근불가";

    public age: number = 10;
    public user: any = {
        tel: '010-1234-5678',
        add: 'seoul'
    }
    
    public getGreet(name: string): string {
        return "Hello " + name;
    }

}