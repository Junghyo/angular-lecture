// A08_IJumsu.ts

export default interface IJumsu {
    // 접근제한자는 기술 안됨
    name: string;

    getTotal(): number;
    getAvg(x: number): number;
    display(): string;

}
