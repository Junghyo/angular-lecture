import { Jumsu2 } from "./A08_JumsuTwo";
import { Jumsu3 } from "./A08_JumsuThree";
import { AJumsu } from "./A08_AJumsu";

// A08_Main.ts

namespace A08Main {
    let hong: AJumsu = new Jumsu2("HongGilDong", 90, 80);
    let nolbu: AJumsu = new Jumsu3("NolBu", 100, 90, 80);
    let hungbu: AJumsu = new Jumsu2("HungBu", 90, 80);

    let jumsuAry: Array<AJumsu> = [hong, nolbu, hungbu];

    for(let item of jumsuAry){
        item.getTotal();
        
        if(item instanceof Jumsu2){
            item.getAvg(2);
        }else if(item instanceof Jumsu3){
            item.getAvg(3);
        }
        
        console.log( item.display() );
    }
}