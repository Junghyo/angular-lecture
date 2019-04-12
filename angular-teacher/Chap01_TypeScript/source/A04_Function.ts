// A04_Function.ts

namespace A04Function {
    const PI: number = 3.14;
    // PI = 12345;

    // calcTax("NY", 5000, 2);
    // calcTax2("NY", 5000, 2);

    function calcTax(state: string, amount: number, person: number): number {
        if(state === "NY"){
            return amount * 0.06 - person * 600;
        }else if(state === "NJ"){
            return amount * 0.03 - person * 300;
        }
        return -1;
    }

    let result = calcTax("NY", 5000, 2);
    console.log(result);


    // 함수 리터럴 방식
    let calcTax2: (x:string, y:number, z:number)=>number = function(state: string, amount: number, person: number): number {
        if(state === "NY"){
            return amount * 0.06 - person * 600;
        }else if(state === "NJ"){
            return amount * 0.03 - person * 300;
        }
        return -1;
    }

    result = calcTax2("NY", 5000, 2);
    console.log(result);


    // ES2015
    // 매개변수의 기본값 할당 가능. 
    // 기본값이 있는 매개변수는 없는 매개변수보다 뒤에 기술
    function calcTax3(amount: number, person: number = 1, state: string = 'NY'): number {
        if(state === "NY"){
            return amount * 0.06 - person * 600;
        }else if(state === "NJ"){
            return amount * 0.03 - person * 300;
        }
        return -1;
    }

    result = calcTax3(5000, 2);
    console.log(`NY: ${result}`);

    result = calcTax3(5000, 2, 'NJ');
    console.log(`NJ: ${result}`);



    // ES2015
    // 생략 가능한 매개변수 선언 가능 => ? (angular에서 사용)
    // 생략 가능한 매개변수 다른 매개변수보다 뒤에 기술
    function calcTax4(amount: number, person: number = 1, state?: string): number {
        // console.log(state);
        // state = (state === undefined) ? 'NY' : state;
        
        if(state === "NY"){
            return amount * 0.06 - person * 600;
        }else if(state === "NJ"){
            return amount * 0.03 - person * 300;
        }
        return -1;
    }

    // state는 생략 가능 매개변수로 에러 발생 안함
    result = calcTax4(5000, 2);
    console.log(`NY: ${result}`);

    result = calcTax4(5000, 2, 'NJ');
    console.log(`NJ: ${result}`);

}