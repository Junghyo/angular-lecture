// A03_Type.ts

namespace A03Type {
    console.log("------------ Array -------------");

    // JavaScript
    let ary: any = [10, 11, 100, 'NolBu', new Date()];

    // TypeScript
    let strAry: string[] = ['one', 'two', 'three'];
    let numAry: Array<number> = [10, 11, 100];

    // numAry.push("NolBu");
    numAry.push(101);

    let num: number = numAry[1];
    // let str: string = numAry[2];

    // for
    for(let i = 0; i < strAry.length; i++) {
        console.log(`${i} -> ${strAry[i]}`);
    }

    // forEach
    strAry.forEach( function(item, index){
        console.log(`${index} -> ${item}`);
    })

    // es5.     for ~ in => index를 돌려준다
    for(let i in strAry){
        console.log(`${i} -> ${strAry[i]}`);
    }

    // es2015.     for ~ of => value를 돌려준다(index 없음)
    // angular에서 DOM을 반복하여 생성할 목적으로 사용됨 *ngFor
    for(let i of strAry){
        console.log(`${i}`);
    }
    console.log("");


    console.log("------------ Object -------------");
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
        name: "NolBu",
        age: 40,
        address: ['Seoul', 'Busan'],
        info: {
            tel: '010-1234-7895',
            child: 2
        },
        getInfo: function(x: string) {
            return `${this.name}님의 자식은 ${this.info.child} - ${x}`
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
        name: "NolBu",
        age: 40,
        address: ['Seoul', 'Busan'],
        info: {
            tel: '010-1234-7895',
            child: 2
        },
        getInfo: function(x: string) {
            return `${this.name}님의 자식은 ${this.info.child} - ${x}`
        }
    }

    // 추출
    let name = obj2.name;
    let child = obj2.info.child;

    // let objAge: string = 'age';
    let age: number = obj2['age'];

    // 삽입
    // obj2.num = 100;     // type에 해당 속성이 없음


    // key value 형태의 Object
    let obj3: { [key: string]: number} = {
        'A': 10,
        'B': 20,
        'C': 30
    }

    obj3['D'] = 40;

    let num1 = obj3['B']
    let num2 = obj3.D;
    console.log(`num1: ${num1}, num2: ${num2}`);
    console.log('');


    interface PersonType {
        name: string;
        age: number;
        address: string;
    }

    let obj4: { [key: string]: PersonType } = {
        'nolbu': {name: 'NolBu', age: 40, address: 'Seoul'},
        'hungbu': {name: 'HungBu', age: 20, address: 'Seoul'},
    }

    // 추가
    obj4['hong'] = {name: 'Hong', age: 20, address: 'Busan'}

    // 추출
    let hongName = obj4['hong'].name;
    console.log(hongName);

    // for in
    for(let i in obj4){
        let item: PersonType = obj4[i];
        console.log(`${item.name}, 
                    ${item.age}, ${item.address}`);
    }
}