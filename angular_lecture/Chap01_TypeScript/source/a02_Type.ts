// a02_Type.ts

namespace Type {
    // clg
    console.log("\n---------- var: type check ----------");

    var name: any = "yoda";
    var name: any = "seo";
    console.log(`Name: ${name}, Type: ${typeof name}`);

    name = 10;
    console.log(`Name: ${name}, Type: ${typeof name}`);

    console.log("\n---------- var: scope check 1 ----------");


    // javascript에서 if, for, switch 문은 {} scope가 존재하지 않음.
    var str: any = "GLOBAL";
    if(true) {
       var str: any = "If Scope Str"
    }
    console.log(str);

    for(var i = 0; i < 10; i++) { }
    // i가 10으로 찍힘.
    console.log(i);

    // ES2015
    console.log("\n---------- let: scope check 2 ----------");
    
    let age: any = "kim"; 
    // let age: any = "park";  중복 선언 불가

    // if, for, switch 등의 {} 안에 선언된 변수는 Scope를 갖는다.
    let str1 = "GLOBAL";
    if(true) {
        let str1 = "If Scope st1";
        console.log(str1);

    }
    console.log(str1);

    for(let k = 0; k < 10; k++) { }
    // i가 10으로 찍힘.
    // console.log(k);

    console.log("\n---------- Type ----------");

    // string, number, boolean, symbol, undefined
    let name2: string = "yoda";
    // name2 = 10; 숫자를 선언하지 못함 (string 외 불가)
    
    let age2: number = 10;
    // age2 = "yoda";

    let check: boolean = true;
    // check = 1;
    console.log(`name type: ${typeof(name2)}\nage type: ${typeof(age2)}\ncheck type: ${typeof(check)}`);

    console.log("\n---------- Type: any ----------");
    
    // 동적으로 type이 변경됨
    let anytp: any = "yoda";
    console.log(`anytp: ${anytp}, anytp type: ${typeof(anytp)}`);

    anytp = 10;
    console.log(`anytp: ${anytp}, anytp type: ${typeof(anytp)}`);

    anytp = false;
    console.log(`anytp: ${anytp}, anytp type: ${typeof(anytp)}`);

    // 이경우도 any 타입이 된다.
    let anytp1;                 // type도 없고 초기화도 안됨 
    let anytp2 = undefined;     // type 설정이 없고 undefined로 초기화
    let anytp3 = null;          // type 설정이 없고 null로 초기화

    console.log(`anytp1: ${anytp1}, anytp1 type: ${typeof(anytp1)}`);
    console.log(`anytp2: ${anytp2}, anytp2 type: ${typeof(anytp2)}`);
    console.log(`anytp3: ${anytp3}, anytp3 type: ${typeof(anytp3)}`);

    anytp1 = 10;
    console.log(`anytp1: ${anytp1}, anytp1 type: ${typeof(anytp1)}`);
    anytp3 = "yoda";
    console.log(`anytp3: ${anytp3}, anytp3 type: ${typeof(anytp3)}`);


    console.log("\n---------- Type: undefined, null ----------");
    // null과 undefined로 type을 설정하지 않는다. (필요하면 union을 사용)
    let undefinedType: undefined;
    let nullType: null;

    // undefined 또는 null로 type이 설정되면 undefined, null만 대입 가능
    console.log(`undefinedType: ${undefinedType}, undefinedType type: ${typeof(undefinedType)}`);
    // undefinedType = 10; 선언 불가
    

    // union
    console.log("\n---------- Type: union ----------");
    let unionType: string | undefined = undefined;
    console.log(`unionType: ${unionType}, unionType type: ${typeof(unionType)}`);
    unionType = "str";
    console.log(`unionType: ${unionType}, unionType type: ${typeof(unionType)}`);

    let unionType2: string | null = null;
    console.log(`unionType2: ${unionType2}, unionType2 type: ${typeof(unionType2)}`);
    unionType2 = "str";
    console.log(`unionType2: ${unionType2}, unionType2 type: ${typeof(unionType2)}`);
    
    
    console.log("\n---------- value has type ----------");
    // value에도 type이 존재한다.
    let val = "yoda";
    console.log(`val: ${val}, val type: ${typeof(val)}`);
    // val = 10; 변수 선언시에 값을 주면 해당값의 type으로 type이 선언됨. (string)


    // 객체
    console.log("\n---------- 객체(Object) ----------");
    let today = new Date();
    console.log(`today: ${today}, today type: ${typeof(today)}`);
    console.log(`today: ${today.constructor}, today type: ${typeof(Date)}, today instanceof: ${typeof(today instanceof Date)}`);
    console.log(`today: ${today.constructor === Date}`);
}