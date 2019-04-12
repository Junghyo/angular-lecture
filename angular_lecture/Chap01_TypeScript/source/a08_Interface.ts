export default interface InterScore {
    // 접근제한자는 기술 안됨. 기본적으로 public만 가능
    name: string;

    getTotal(): number;
    getAvg(x: number): number;
    display(): string;
}