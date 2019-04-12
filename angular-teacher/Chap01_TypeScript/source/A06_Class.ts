// A06_Class.ts

let num: number = 10;
const PI: number = 3.14;
function getName(): string {
    return 'HongGilDong'
}

class Jumsu {
    // 접근제한자 => JavaScript에는 없음
    // default 접근제한자 => public
    // 접근제한자를 생략하면 public이 붙은것과 동일
    readonly name: string;      // getter만 정의한 것과 동일
    private kor: number;
    private _eng: number;
    private total: number;
    private avg: number;

    // kor. 일반적 메소드. 
    public getKor(): number {
        return this.kor
    }
    public setKor(kor: number): void {
        this.kor = kor;
    }

    // Getter, Setter Method
    // 사용은 프로퍼티(멤버변수)처럼 호출해서 사용
    public get eng(): number {
        return this._eng;
    }

    public set eng(eng: number) {       // 반환타입을 적으면 에러
        this._eng = eng;
    }


    constructor(name: string, kor: number, eng: number) {
        this.name = name;
        this.kor = kor;
        this._eng = eng;
        this.total = 0;
        this.avg = 0;
    }

    public getTotal(): number {
        this.total = this.kor + this._eng;
        return this.total;
    }

    public getAvg(x: number): number {
        this.avg = this.total / x;
        return this.avg;
    }

    public display(): string {
        return `${this.name}님의의 총점은 ${this.total}이고 평균은 ${this.avg}`
    }
}

let hong = new Jumsu("Hong", 100, 90);
hong.getTotal();
hong.getAvg(2);
console.log( hong.display() );

// console.log(hong.kor);
console.log(hong.name);

// 일반 메서드
hong.setKor(10);
console.log(hong.getKor());


// Getter, Setter
// 일반 멤버변수처럼 호출해서 사용한다
hong.eng = 30;
console.log(hong.eng);




