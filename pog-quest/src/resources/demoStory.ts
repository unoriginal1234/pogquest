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

import demoSlammerAbility2 from "../slammerResources/demoSlammerAbility2";
import demoSlammerAbilityByN from "../slammerResources/demoSlammerAbilityByN";

function createDemoStory() {
    return new Story(
        "Demo Story",
        "This is a demo story.",
        [ new Floor("First Floor", "First Floor Description", [
            new Chapter("The beginning", ["This is a demo description 1.", "This is a demo description 2.", "This is a demo description 3."], 
                new Baddie("Baddie 1", 
                    [new Pog("Butt Pog 1", 1, 1, 1, 1), 
                        new Pog("Butt Pog 2", 1, 1, 1, 1), 
                        new Pog("Butt Pog 3", 1, 1, 1, 1)], 
                        100, 1)),
            new Chapter("The middle", ["This is a demo description 4.", "This is a demo description 5.", "This is a demo description 6."], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Item 1", "This is a demo item.", 1), 
                    new Item("Item 2", "This is a demo item.", 2)], 
                    [new Pog("Big Pog City", 10, 1, 50, 1),
                        new Pog("Big Honker", 10, 10, 250, 1),
                    new Pog("Biiig Defense", 2, 10, 20, 1),], 
                    [new Slammer("Slammer 2", "This is a second level slammer.", 1, demoSlammerAbility2), 
                    new Slammer("Slammer 3", "This is a third level slammer.", 1, demoSlammerAbilityByN(3))])),
            new Chapter("The end", ["This is a demo description 7.", "This is a demo description 8.", "This is a demo description 9."], 
                new Adventure("Adventure 1", "This is a demo description.", "trade")),

            new Chapter("The beginning again", ["This is a demo description 10.", "This is a demo description 11.", "This is a demo description 12."], 
                new Baddie("Baddie 2", 
                    [new Pog("Butt Pog 1", 1, 1, 1, 1), 
                        new Pog("Butt Pog 2", 1, 1, 1, 1), 
                        new Pog("Butt Pog 4", 1, 1, 1, 1),
                        new Pog("Butt Pog 5", 1, 1, 1, 1),
                        new Pog("Butt Pog 6", 1, 1, 1, 1),
                        new Pog("Butt Pog 7", 1, 1, 1, 1),
                        new Pog("Butt Pog 3", 1, 1, 1, 1)], 100, 2)),
            new Chapter("The middle again", ["This is a demo description 13.", "This is a demo description 14.", "This is a demo description 15."], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Item 1", "This is a demo item.", 1)], 
                    [new Pog("Pog 1", 1, 1, 1, 1),
                        new Pog("The funky chicken", 10, 10, 250, 1),
                        new Pog("Banana Sam", 7, 7, 25, 1),
                    ], 
                    [new Slammer("Slammer 4", "This is a level 4 demo slammer.", 1, 
                        demoSlammerAbilityByN(4))])),
            new Chapter("The end again", ["This is a demo description 16.", "This is a demo description 17.", "This is a demo description 18."], 
                new Adventure("Adventure 1", "This is a demo description.", "chase")),
            new Chapter("The beginning again", ["This is a demo description 19.", "This is a demo description 20.", "This is a demo description 21."], 
                new Baddie("Baddie 3", 
                    [new Pog("Butt Pog 1", 1, 1, 1, 1), 
                        new Pog("Butt Pog 2", 1, 1, 1, 1), 
                        new Pog("Butt Pog 3", 1, 1, 1, 1)], 100, 3)),
            new Chapter("The middle again", ["This is a demo description 22.", "This is a demo description 23.", "This is a demo description 24."], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Item 1", "This is a demo item.", 1)], 
            [new Pog("Pog 1", 1, 1, 1, 1)], 
            [new Slammer("Slammer 7", "This is a level 7 demo slammer.", 1, demoSlammerAbilityByN(7))])),
            new Chapter("The end again", ["This is a demo description 25.", "This is a demo description 26.", "This is a demo description 27."], 
                new Adventure("Adventure 1", "This is a demo description.", "chest")),
            ]),
        new Floor("Second Floor", "Second Floor Description", [
            new Chapter("The beginning", ["This is a demo description 28.", "This is a demo description 29.", "This is a demo description 30."], 
                new Baddie("Baddie 4", 
                    [new Pog("Butt Pog 1", 1, 1, 1, 1), 
                        new Pog("Butt Pog 2", 1, 1, 1, 1),
                        new Pog("Big Honker", 10, 10, 250, 1),
                        new Pog("Biiig Defense", 2, 10, 20, 1), 
                        new Pog("Butt Pog 3", 1, 1, 1, 1)], 100, 4)),
            new Chapter("The middle", ["This is a demo description 31.", "This is a demo description 32.", "This is a demo description 33."], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Item 1", "This is a demo item.", 1)], 
                    [new Pog("Pog 1", 1, 1, 1, 1),
                        new Pog("Big Honker", 10, 10, 250, 1),
                        new Pog("Pog Mania", 100, 100, 100, 1),
                        new Pog("Biiig Defense", 2, 10, 20, 1),
                    ], 
                    [new Slammer("Slammer 125", "This is a level 125 demo slammer.", 1, demoSlammerAbilityByN(125))])),
            new Chapter("The end", ["This is a demo description 34.", "This is a demo description 35.", "This is a demo description 36."], 
                new Adventure("Adventure 1", "This is a demo description.", "trade")),
            new Chapter("Just kidding the REAL end", ["This is a demo description 37.", "This is a demo description 38.", "This is a demo description 39."], 
                new Baddie("Baddie 5", 
                    [new Pog("Butt Pog 1", 1, 1, 1, 1), 
                        new Pog("Butt Pog 2", 1, 1, 1, 1),
                        new Pog("Butt Pog 4", 1, 1, 1, 1),
                        new Pog("Butt Pog 5", 1, 1, 1, 1),
                        new Pog("Butt Pog 6", 1, 1, 1, 1),
                        new Pog("Butt Pog 7", 1, 1, 1, 1),
                        new Pog("Butt Pog 8", 1, 1, 1, 1),
                        new Pog("Butt Pog 9", 1, 1, 1, 1),
                        new Pog("Butt Pog 10", 1, 1, 1, 1),
                        new Pog("Butt Pog 11", 1, 1, 1, 1),
                        new Pog("Butt Pog 6", 1, 1, 1, 1),
                        new Pog("Butt Pog 7", 1, 1, 1, 1),
                        new Pog("Butt Pog 8", 1, 1, 1, 1),
                        new Pog("Butt Pog 9", 1, 1, 1, 1),
                        new Pog("Butt Pog 10", 1, 1, 1, 1),
                        new Pog("Butt Pog 11", 1, 1, 1, 1),
                        new Pog("Butt Pog 7", 1, 1, 1, 1),
                        new Pog("Butt Pog 8", 1, 1, 1, 1),
                        new Pog("Butt Pog 9", 1, 1, 1, 1),
                        new Pog("Butt Pog 10", 1, 1, 1, 1),
                        new Pog("Butt Pog 11", 1, 1, 1, 1),
                        new Pog("Butt Pog 6", 1, 1, 1, 1),
                        new Pog("Butt Pog 7", 1, 1, 1, 1),
                        new Pog("Butt Pog 8", 1, 1, 1, 1),
                        new Pog("Butt Pog 9", 1, 1, 1, 1),
                        new Pog("Butt Pog 10", 1, 1, 1, 1),
                        new Pog("Butt Pog 11", 1, 1, 1, 1),
                        new Pog("Butt Pog 3", 1, 1, 1, 1)], 100, 5),)    
        ])
    ]);
}


export default createDemoStory;