// a05_ArrowFn.ts

namespace ArrowFn {
    // 함수 리터럴 방식
    let calcTax = function(state: string, amount: number, person: number): number {
        
        if(state === "NY"){
            return amount * 0.06 - person * 600;
        } else if(state === "NJ") {
            return amount * 0.03 - person * 300;
        }

        return -1;
    }

    // Arrow 방식
    // function을 생략하고 매개변수 뒤에 () => {} 형태로 시작
    let calcTax2 = (state: string, amount: number, person: number): number => {
        
        if(state === "NY"){
            return amount * 0.06 - person * 600;
        } else if(state === "NJ") {
            return amount * 0.03 - person * 300;
        }

        return -1;
    }
    console.log(calcTax2('NY', 5000, 2));

    let onAdd = (x:number, y:number) => {
        return x + y;
    }

    // 함수가 return 구문 1줄만 있는 경우
    // return을 생략하고 한 줄에 기술 가능
    let onMin = (x: number, y: number) => x - y;

    // 매개변수가 1개인 경우는 () 생략 가능 (typescript에서는 안됨)
    // let onMulti = x => x * 10;      // javascript의 경우
    let onMulti = (x: number) => x * 10 // typescript의 경우

    // => 뒤가 value인 경우만 return이 자동으로 붙는다.
    // 이 경우는 그대로 출력
    let onDiv = (x: number) => console.log(x);

    // this의 참조가 틀리다.
    class TodayClass {
        private today: Date = new Date();

        public getTime() {
            let _this = this;
            window.setTimeout(function(){
                // this => window;
                console.log(globalThis);
                console.log(_this.today.toLocaleString());
            }, 1000)
        }
    }
    
    // Arrow 변환
    class NowClass {
        private today: Date = new Date();

        public getTime() {
            window.setTimeout(() => {
                // arrow 함수에서는 사용된 객체가 this
                console.log(this);
                console.log(this.today.toLocaleString());
            }, 1000)
        }
    }

    let today = new TodayClass();
    let now = new NowClass();
    
    today.getTime();
    now.getTime();
    
}