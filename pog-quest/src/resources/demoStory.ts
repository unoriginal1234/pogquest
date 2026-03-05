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
import beeferSlammerAbilityByInput from "../slammerResources/beeferSlammerAbilityByInput";
import turtlerSlammerAbility from "../slammerResources/turtlerSlammerAbility";

function createButtPog(index: number) {
    return new Pog(`Butt Pog ${index}`, index, index, Math.floor(index * 1.2), index);
}

function createDemoStory() {
    return new Story(
        "Demo Story",
        "This is a demo story.",
        [ new Floor("First Floor", "First Floor Description", [
            new Chapter("The beginning", ["This is a demo description 1.", "This is a demo description 2.", "This is a demo description 3."], 
                new Baddie("Baddie 1", 
                    [createButtPog(1), createButtPog(2), createButtPog(3)], 
                        100, 1)),
            new Chapter("The monster breaths", ["This is a demo description 1.", "This is a demo description 2.", "This is a demo description 3."], 
                new Baddie("Baddie 1", 
                    [createButtPog(1), createButtPog(2), createButtPog(3), createButtPog(1), createButtPog(5)], 
                        100, 1)),
            new Chapter("The middle", ["This is a demo description 4.", "This is a demo description 5.", "This is a demo description 6."], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Participation Trophy", "1 Participation Award", 25), 
                    new Item("Participation Trophy", "1 Participation Award", 25)], 
                    [new Pog("Big Pog City", 10, 1, 50, 1),
                        new Pog("Big Honker", 10, 10, 250, 1),
                    new Pog("Biiig Defense", 2, 10, 20, 1),], 
                    [new Slammer("Slammer 2", "Flips up 4 pogs.", 1, 10, demoSlammerAbility2),
                        new Slammer("Premier BeeferSlammer", "1 Beefer for 1 turn.", 1, 20, beeferSlammerAbilityByInput(1, 1), 'beefer'),
                        new Slammer("Shell Shield 1, 1", "1 Turtler for 1 turn.", 1, 20, turtlerSlammerAbility(1, 1), 'turtler')
                    ],)),
            new Chapter("The end", ["This is a demo description 7.", "This is a demo description 8.", "This is a demo description 9."], 
                new Adventure("Adventure 1", "This is a demo description.", "trade")),
            new Chapter("The end", ["This is a demo description 7.", "This is a demo description 8.", "This is a demo description 9."], 
                new Adventure("Adventure 1", "This is a demo description.", "campfire")),

            new Chapter("The beginning again", ["This is a demo description 10.", "This is a demo description 11.", "This is a demo description 12."], 
                new Baddie("Baddie 2", 
                    [createButtPog(1), createButtPog(2), createButtPog(4), createButtPog(5), createButtPog(6), createButtPog(7), createButtPog(3)], 100, 2)),
            new Chapter("The beginning again", ["This is a demo description 10.", "This is a demo description 11.", "This is a demo description 12."], 
                new Baddie("Baddie 2", 
                    [createButtPog(2), createButtPog(4), createButtPog(4), createButtPog(2), createButtPog(4), createButtPog(2), createButtPog(4), createButtPog(3)], 100, 2)),
            new Chapter("The middle again", ["This is a demo description 13.", "This is a demo description 14.", "This is a demo description 15."], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Participation Trophy", "1 Participation Award", 35)], 
                    [createButtPog(1), createButtPog(2), new Pog("The funky chicken", 10, 10, 250, 1), new Pog("Banana Sam", 7, 7, 25, 1)], 
                    [new Slammer("Slammer 4", "Flips up 6 pogs.", 1, 25, demoSlammerAbilityByN(3)),
                    new Slammer("BeeferSlammer 1, 2", "1 Beefer for 2 turns.", 1, 20, beeferSlammerAbilityByInput(1, 2), 'beefer'),
                    new Slammer("Turtle Power 1, 2", "1 Turtler for 2 turns.", 1, 20, turtlerSlammerAbility(1, 2), 'turtler')
                    ])),
            new Chapter("The end again", ["This is a demo description 16.", "This is a demo description 17.", "This is a demo description 18."], 
                new Adventure("Adventure 1", "This is a demo description.", "chase")),
            new Chapter("The beginning again", ["This is a demo description 19.", "This is a demo description 20.", "This is a demo description 21."], 
                new Baddie("Baddie 3", 
                    [createButtPog(1), createButtPog(2), new Pog("Big Honker", 10, 10, 250, 1), new Pog("Biiig Defense", 2, 10, 20, 1), new Pog("Biiig Defense", 2, 10, 20, 1), new Pog("Big Honker", 10, 10, 250, 1), createButtPog(8)], 100, 3)),
            new Chapter("The middle again", ["This is a demo description 22.", "This is a demo description 23.", "This is a demo description 24."], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Participation Trophy", "1 Participation Award", 45)], 
            [createButtPog(9),
                new Pog("Tale of Jonny Pizza", 5, 3, 35, 1),
                new Pog("Welcome to Space", 2, 5, 12, 1),
                new Pog("Gumby", 3, 3, 10, 1),
                new Pog("Super Mario Bros", 4, 4, 15, 1),
                new Pog("The Legend of Zelda", 5, 5, 20, 1),
                new Pog("Pac-Man", 6, 6, 25, 1),
                new Pog("Donkey Kong", 7, 7, 30, 1),
                new Pog("Mario Kart", 8, 8, 35, 1),
                new Pog("Super Mario Bros 3", 9, 9, 40, 1),
                new Pog("The Legend of Zelda 2", 10, 10, 45, 1),
                new Pog("Pac-Man 2", 11, 11, 50, 1),
                new Pog("Donkey Kong 2", 12, 12, 55, 1),
                new Pog("Mario Kart 2", 13, 13, 60, 1),
                new Pog("Super Mario Bros 3 2", 14, 14, 65, 1),
                new Pog("The Legend of Zelda 3", 15, 15, 70, 1),
                new Pog("Pac-Man 3", 16, 16, 75, 1),
                new Pog("Donkey Kong 3", 17, 17, 80, 1),
            ], 
            [new Slammer("Slammer Jazzmo", "Flips up 7 pogs.", 1, 50, demoSlammerAbilityByN(4)),
            new Slammer("Beef Strutler 2, 2", "2 Beefer for 2 turns.", 1, 20, beeferSlammerAbilityByInput(2, 2), 'beefer'),
            new Slammer("Iron Shell 2, 2", "2 Turtler for 2 turns.", 1, 25, turtlerSlammerAbility(2, 2), 'turtler')
            ])),
            new Chapter("The end again", ["This is a demo description 25.", "This is a demo description 26.", "This is a demo description 27."], 
                new Adventure("Adventure 1", "This is a demo description.", "chest")),
            ]),
        new Floor("Second Floor", "Second Floor Description", [
            new Chapter("The beginning", ["This is a demo description 28.", "This is a demo description 29.", "This is a demo description 30."], 
                new Baddie("Baddie 4", 
                    [createButtPog(1), createButtPog(2),
                        new Pog("Big Honker", 10, 10, 250, 1),
                        new Pog("Tale of Jonny Pizza", 5, 3, 35, 1),
                        new Pog("Welcome to Space", 2, 5, 12, 1),
                        new Pog("Gumby", 3, 3, 10, 1),
                        new Pog("Super Mario Bros", 4, 4, 15, 1),
                        new Pog("The Legend of Zelda", 5, 5, 20, 1),
                        new Pog("Pac-Man", 6, 6, 25, 1),
                        new Pog("Donkey Kong", 7, 7, 30, 1),
                        new Pog("Mario Kart", 8, 8, 35, 1),
                        new Pog("Biiig Defense", 2, 10, 20, 1), 
                        createButtPog(10)], 100, 4)),
            new Chapter("The middle", ["This is a demo description 31.", "This is a demo description 32.", "This is a demo description 33."], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Participation Trophy", "1 Participation Award", 55)], 
                    [createButtPog(11),
                        new Pog("Big Honker", 10, 10, 250, 1),
                        new Pog("Pog Mania", 15, 10, 300, 1),
                        new Pog("Biiig Defense", 2, 10, 20, 1),
                    ], 
                    [new Slammer("8 Ball Slammer", "Flips up 8 pogs.", 1, 75, demoSlammerAbilityByN(6)),
                    new Slammer("Beef Strogonoff 3, 3", "3 Beefer for 3 turns.", 1, 20, beeferSlammerAbilityByInput(3, 3), 'beefer'),
                    new Slammer("Fortress Shell 3, 3", "3 Turtler for 3 turns.", 1, 30, turtlerSlammerAbility(3, 3), 'turtler')
                    ])),
            new Chapter("The end", ["This is a demo description 34.", "This is a demo description 35.", "This is a demo description 36."], 
                new Adventure("Adventure 1", "This is a demo description.", "trade")),
            new Chapter("Just kidding the REAL end", ["This is a demo description 37.", "This is a demo description 38.", "This is a demo description 39."], 
                new Baddie("Baddie 5", 
                    [createButtPog(1), 
                        createButtPog(12), 
                        createButtPog(3), 
                        createButtPog(5), 
                        createButtPog(6), 
                        createButtPog(7), 
                        createButtPog(7), 
                        createButtPog(7), 
                        createButtPog(7),
                        createButtPog(7),
                        createButtPog(7),
                        createButtPog(7),],
                    100, 10),)    
        ])
    ]);
}


export default createDemoStory;