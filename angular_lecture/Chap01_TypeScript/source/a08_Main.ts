import { Score3 } from "./a08_Score";
import { Score4 } from "./a08_Score2";
import {ImplScore} from "./a08_ImplScore";

namespace A08Main {
    let yoda: ImplScore = new Score3("yoda", 90, 100);
    let hong: ImplScore = new Score4("gildong", 100, 50, 70);
    let kim: ImplScore = new Score3("jiseok", 30, 50);

    let scoreArry: Array<ImplScore> = [yoda, hong, kim];

    for(let item of scoreArry) {
        item.getTotal();
        if(item instanceof Score3) {
            item.getAvg(2);
        } else if (item instanceof Score4) {
            item.getAvg(3);
        }
        console.log(item.display());
    }
}