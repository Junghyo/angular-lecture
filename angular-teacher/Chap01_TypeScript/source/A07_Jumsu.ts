// A07_Jumsu

export class JumsuTwo {
    readonly name: string;      // getter만 정의한 것과 동일
    private kor: number;
    private _eng: number;
    protected total: number;
    private avg: number;

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
