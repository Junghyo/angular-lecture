// a06_Class.ts



export class Score2  {
    // 접근제한자 => Javascript에는 없음
    // default 접근제한자 : public 
    // 접근제한자를 생략하면 public이 붙은 것과 동일

    readonly name: string;      // getter만 정의한 것과 동일. 값을 정의하는 것 불가
    private kor: number;
    private _eng: number;
    protected total: number;
    private avg: number;

    // kor. 일반적 메서드
    public getKor(): number {
        return this.kor
    }
    
    public setKor(kor: number) {
        this.kor = kor;
    }

    // Getter, Setter 메서드
    // 사용은 프로퍼티(멤버변수)처럼 호출해서 사용
    public get eng(): number {
        return this._eng;
    }

    // 반환타입을 절대 적지 않음.
    public set eng(eng: number) {
        this._eng = eng;
    }

    constructor(name: string, kor: number, eng: number) {
        this.name = name;
        this.kor = kor;
        this._eng = eng;
        // total, avg 초기화
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
        return ` 이름: ${this.name}\n 총점: ${this.total}\n 평균: ${this.avg}`
    }
}

