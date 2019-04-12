// invoke.service.ts

import { Injectable } from '@angular/core';

@Injectable()
export class InvokeService {
    public currencies: string[] = ["USD", "EUR", "CNY", "KRW"];
    public rate: { [key: string]: number } = {
        "USD": 1,
        "EUR": 1.35,
        "CNY": 6.98,
        "KRW": 1.123
    }
    public convertRate(amount: number, outCurr: string, inCurr: string): number {
        return amount * this.rate[outCurr] / this.rate[inCurr]
    }
}