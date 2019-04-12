// a04_Function.ts

namespace A04Function {

    function calcTax(state: string, amount: number, person: number): number {
        
        if(state === "NY"){
            return amount * 0.06 - person * 600;
        } else if(state === "NJ") {
            return amount * 0.03 - person * 300;
        }

        return -1;
    }
    
    let result = calcTax("NY", 5000, 2);
    console.log(result);

    // 함수 리터럴 방식
    let calcTax2: (x: string, y: number, z: number) => number = function(state: string, amount: number, person: number): number {
        
        if(state === "NY"){
            return amount * 0.06 - person * 600;
        } else if(state === "NJ") {
            return amount * 0.03 - person * 300;
        }

        return -1;
    }

    let result2 = calcTax2("NY", 5000, 2);
    console.log(result2);


    // es2015
    // 매개변수의 기본값 할당 가능 (선언할때)
    // 기본값이 있는 매개변수는 없는 매개변수보다 뒤에 선언
    function calcTax3(amount: number, person: number, state: string = 'NY'): number {
        
        if(state === "NY"){
            return amount * 0.06 - person * 600;
        } else if(state === "NJ") {
            return amount * 0.03 - person * 300;
        }

        return -1;
    }

    let result3 = calcTax3(5000, 2);
    let result4 = calcTax3(5000, 2, 'NJ');
    console.log(`NY: ${result3}, NJ: ${result4}`);
    

    
    // es2015
    // 생략 가능한 매개변수 선언 가능 (변수명 뒤에 ?)
    // 생략 가능한 매개변수는 다른 매개변수보다 뒤에 기술
    function calcTax4(amount: number, person: number, state?: string): number {
        console.log(state);
        // state = (state === undefined)? 'NY' : state;
        if(state === "NY"){
            return amount * 0.06 - person * 600;
        } else if(state === "NJ") {
            return amount * 0.03 - person * 300;
        }

        return -1;
    }

    let result5 = calcTax4(5000, 2);
    let result6 = calcTax4(5000, 2, 'NY');
    console.log(`생략: ${result5}, NJ: ${result6}`);
}