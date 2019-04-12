
export class ScoreVO {
    public name: string;
    public kor: number;
    public eng: number;
    public total: number;
    public avg: number;
    
    // Inject 대상이 될 수 없음(자동 초기화가 안됨)
    constructor(name: string, kor: number, eng: number) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }

    public toString(): string {
        return `[ScoreVO] name=${this.name}, kor=${this.kor}, eng=${this.eng}, 
                total=${this.total}, avg=${this.avg}`
    }
}