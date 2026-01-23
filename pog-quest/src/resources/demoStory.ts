// import Story from "../classes/Story";
import Chapter from "../classes/Chapter";
import Baddie from "../classes/Baddie";
import Shop from "../classes/Shop";
import Adventure from "../classes/Adventure";
import Item from "../classes/Item";
import Pog from "../classes/Pog";
import Slammer from "../classes/Slammer";
import Floor from "../classes/Floor";
import Story from "../classes/Story";
import demoSlammerAbility from "../slammerResources/demoSlammerAbility";

function createDemoStory() {
    return new Story(
        "Demo Story",
        "This is a demo story.",
        [ new Floor("First Floor", "First Floor Description", [
            new Chapter("The beginning", ["This is a demo description 1.", "This is a demo description 2.", "This is a demo description 3."], new Baddie("Baddie 1", [new Pog("Pog 1", 1, 1, 1, 1)], 100, 1)),
            new Chapter("The middle", ["This is a demo description 4.", "This is a demo description 5.", "This is a demo description 6."], new Shop("Shop 1", "This is a demo shop.", [new Item("Item 1", "This is a demo item.", 1)], [new Pog("Pog 1", 1, 1, 1, 1)], [new Slammer("Slammer 1", "This is a demo slammer.", 1, demoSlammerAbility)])),
            new Chapter("The end", ["This is a demo description 7.", "This is a demo description 8.", "This is a demo description 9."], new Adventure("Adventure 1", "This is a demo adventure.", "This is a demo effect.")),
            new Chapter("The beginning again", ["This is a demo description 10.", "This is a demo description 11.", "This is a demo description 12."], new Baddie("Baddie 1", [new Pog("Pog 1", 1, 1, 1, 1)], 100, 1)),
            new Chapter("The middle again", ["This is a demo description 13.", "This is a demo description 14.", "This is a demo description 15."], new Shop("Shop 1", "This is a demo shop.", [new Item("Item 1", "This is a demo item.", 1)], [new Pog("Pog 1", 1, 1, 1, 1)], [new Slammer("Slammer 1", "This is a demo slammer.", 1, demoSlammerAbility)])),
            new Chapter("The end again", ["This is a demo description 16.", "This is a demo description 17.", "This is a demo description 18."], new Adventure("Adventure 1", "This is a demo adventure.", "This is a demo effect.")),
            new Chapter("The beginning again", ["This is a demo description 19.", "This is a demo description 20.", "This is a demo description 21."], new Baddie("Baddie 1", [new Pog("Pog 1", 1, 1, 1, 1)], 100, 1)),
            new Chapter("The middle again", ["This is a demo description 22.", "This is a demo description 23.", "This is a demo description 24."], new Shop("Shop 1", "This is a demo shop.", [new Item("Item 1", "This is a demo item.", 1)], [new Pog("Pog 1", 1, 1, 1, 1)], [new Slammer("Slammer 1", "This is a demo slammer.", 1, demoSlammerAbility)])),
            new Chapter("The end again", ["This is a demo description 25.", "This is a demo description 26.", "This is a demo description 27."], new Adventure("Adventure 1", "This is a demo adventure.", "This is a demo effect.")),
            ]),
        new Floor("Second Floor", "Second Floor Description", [
            new Chapter("The beginning", ["This is a demo description 28.", "This is a demo description 29.", "This is a demo description 30."], new Baddie("Baddie 1", [new Pog("Pog 1", 1, 1, 1, 1)], 100, 1)),
            new Chapter("The middle", ["This is a demo description 31.", "This is a demo description 32.", "This is a demo description 33."], new Shop("Shop 1", "This is a demo shop.", [new Item("Item 1", "This is a demo item.", 1)], [new Pog("Pog 1", 1, 1, 1, 1)], [new Slammer("Slammer 1", "This is a demo slammer.", 1, demoSlammerAbility)])),
            new Chapter("The end", ["This is a demo description 34.", "This is a demo description 35.", "This is a demo description 36."], new Adventure("Adventure 1", "This is a demo adventure.", "This is a demo effect."))
        ])
    ]);
}


export default createDemoStory;