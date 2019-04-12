export class HelloService {
    
    private name: string = "접근불가";

    public age: number = 10;

    public user: {[key: string] : string} = {
        tel: '010-4025-5853',
        address: 'Seoul'
    }
    public getGreet(name: string): string {
        return `Hello, ${name}!!`;
    }
}