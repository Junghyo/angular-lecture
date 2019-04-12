// a03_Type.ts

namespace Type {
    console.log("\n---------- Array ----------");

    // javascript
    let jsArry: any = [10, 11, 100, 'yoda', new Date()];
    console.log(`jsArry: ${jsArry}, jsArry type: ${typeof(jsArry)}`);

    // typescript
    let tsStrArry: string[] = ['one', 'two', 'three'];
    let tsNumArry: Array<number> = [10, 11, 100];

    // tsNumArry.push("yoda"); 불가. number array로 선언되었기 때문
    tsNumArry.push(1000);
    console.log(tsNumArry);
    let num = tsNumArry[1];
    console.log(num);

    // for
    for(let i = 0; i < tsStrArry.length; i++) {
        console.log(`${i} -> ${tsStrArry[i]}`);
    }

    // forEach
    tsStrArry.forEach(function(item, index){
        console.log(`${index} -> ${item}`);
    })

    // es5. for ~ in => index를 돌려준다.
    for(let i in tsStrArry) {
        console.log(`${i} -> ${tsStrArry[i]}`);
    }

    // es2015. for ~ of => value를 돌려준다(index 없음)
    // angular에서 DOM을 반복하여 생성할 목적으로 사용됨. *ngFor
    for(let i of tsStrArry) {
        console.log(`${i}`);
    }

    console.log("\n---------- Object ----------");
    let obj1: {
        name: string,
        age: number,
        address: string[],
        info: {
            tel: string,
            child: number
        },
        getInfo: (one: string) => string
    } = {
        name: "yoda",
        age: 31,
        address: ['Seoul', 'Tokyo'],
        info: {
            tel: '010-4025-5853',
            child: 0
        },
        getInfo: function(x: string) {
            return `${this.name}님의 자식은 ${this.info.child} - ${x} `
        }
    }

    interface ObjType {
        name: string;
        age: number;
        address: string[];
        info: {
            tel: string,
            child: number
        };
        getInfo: (one: string) => string
    }

    let obj2: ObjType = {
        name: "kim",
        age: 21,
        address: ['Busan', 'Osaka'],
        info: {
            tel: '010-1111-5853',
            child: 4
        },
        getInfo: function(x: string) {
            return `${this.name}님의 자식은 ${this.info.child}${x} `
        }
    }

    // 추출
    let name = obj2.name;
    let child = obj2.info.child;
    let obj2Age = 'age';
    let age = obj2['age']; // obj2.age와 같다.
    console.log(name, child, age);
    console.log(obj2.getInfo("명 입니다"));

    // 삽입
    // obj2.num = 100; // 객체에 해당 속성이 없음


    // key value 형태의 Object
    let obj3: { [key: string] : number } = {
        'A': 10,
        'B': 20,
        'C': 30
    }

    // obj3['D'] = 40; 객체에 D 속성이 없음
    // [key: string] : number 추가후 가능
    obj3['D'] = 40;

    let num1 = obj3['B'];
    let num2 = obj3.D;
    console.log(`num1: ${num1}, num2: ${num2}`);


    interface PersonType {
        name: string;
        age: number;
        address: string;
    }

    let obj4: { [key: string]: PersonType } = {
        "park": {name: "park-jisung", age:40, address:'Seoul'},
        "jung": {name: "jung-woosung", age:50, address:'Incheon'}
    } 

    // 추가
    obj4['hong'] = {name: "hong-gildong", age:15, address: 'LA'}

    // 추출
    let obj4Name = obj4['hong'].name;
    let obj4Age = obj4.park.age;
    console.log(`hong's name: ${obj4Name}, park's age: ${obj4Age}`);

    // for in
    for(let i in obj4) {
        let item: PersonType = obj4[i];
        console.log(`${item.name}, ${item.age}, ${item.address}`);
    }

    const VALUE: string = "상수";
    // VALUE = "변경 불가";
    console.log(`VALUE: ${VALUE}`);

}