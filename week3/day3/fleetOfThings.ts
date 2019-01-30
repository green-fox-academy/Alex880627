import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */


let toGetMilk = new Thing('Get milk');
let removeObsticles = new Thing('Remove the obstacles');
let standTheFuckUp = new Thing('Stand up');
let eatThisLunch = new Thing('Eat lunch');

fleet.add(removeObsticles);
fleet.add(toGetMilk);
fleet.add(standTheFuckUp);
fleet.add(eatThisLunch);

standTheFuckUp.complete();
eatThisLunch.complete();

console.log(fleet.print());



