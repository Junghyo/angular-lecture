// A02_Type.ts

namespace A02Type {
    console.log("------------------ var ----------------");
    var name:any = "NolBu";
    var name:any = "HungBu";
    console.log(`Name: ${name}, typeof: ${typeof name}`);

    name = 10;
    console.log(`Name: ${name}, typeof: ${typeof name}`);
    console.log("");

    var str: any = "GLOBAL";
    if(true){       // if, for, switch 문은 {} scope가 존재하지 않음
        var str:any = "IF Scope Str"
    }
    console.log(str);

    for(var i = 0; i < 10; i++){ }
    console.log(i);
    console.log("");

    // ES2015
    console.log("------------------ let ----------------");
    let name1: any = "HungBu";
    // let name1: any = "HungBu";  // 중복 선언 에러

    let str1 = "Global";
    
    // if, for, switch 등의 {} 안에 선언된 변수는 Scope를 갖는다
    if(true){
        let str1 = "IF Scope str1"
    }
    console.log(str1);

    for(let k = 0; k < 10; k++){ }
    // console.log(k);
    console.log();

    console.log("------------------ Type ----------------");
    // string, number, boolean, symbol, undefined
    let name2: string  = "NolBu";
    // name2 = 10;
    // name2 = true;
    // name2 = new Date();

    let age: number = 10;
    // age = "HungBu";
    // age = true;

    let check: boolean = true;
    // check = 1;
    console.log(`typeof ${typeof(name2)}, ${typeof(age)}, ${typeof(check)}`);
    console.log("");


    console.log("------------------ Type any ----------------");
    let name3: any = "NolBu";
    console.log(`Name3:  ${name3}, ${typeof(name3)}`);

    name3 = 10;
    console.log(`Name3:  ${name3}, ${typeof(name3)}`);

    // 이 경우도 any 타입이 된다
    let name4;                  // 타입도 없고 초기화도 안됨
    let name5 = undefined;      // 타입 설정이 없고 undefined으로 초기화
    let name6 = null;           // 타입 설정이 없고 null으로 초기화

    name6 = 10;
    name6 = "NolBu";
    console.log("");


    // null과 undefined로 타입을 설정하지 않는다 (필요하면 union을 사용)
    let undefinedType: undefined;
    let nullType: null;

    // undefined으로 타입이 설정되면 undefined만 대입 가능
    // undefinedType = 10;
    // undefinedType = null;
    undefinedType = undefined;

    // nullType으로 타입이 설정되면 nullType만 대입 가능
    // nullType = 10;
    // nullType = undefined;
    nullType = null;


    // union
    let name7: string | undefined = undefined;
    console.log(`name7:  ${name7}, ${typeof(name7)}`);

    name7 = "NolBu";
    console.log(`name7:  ${name7}, ${typeof(name7)}`);

    // name7 = 10;

    console.log("");


    // Value에도 Type이 존재한다
    let name8 = "HongGilDong";
    console.log(`name8:  ${name8}, ${typeof(name8)}`);

    // name8 = 10;

    let age8 = 10;
    // age9 = true;

    // 객체
    let today = new Date();
    console.log(`today:  ${today}, ${typeof(today)}`);
    console.log(`today:  ${today.constructor}, ${today instanceof Date}`);
    console.log(`today:  ${today.constructor === Date}`);
}