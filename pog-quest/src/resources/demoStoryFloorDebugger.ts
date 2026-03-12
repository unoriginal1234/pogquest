import Chapter from "../classes/Chapter";
import Baddie from "../classes/Baddie";
import SuperBaddie from "../classes/SuperBaddie";
import FinalChapter from "../classes/FinalChapter";

import Shop from "../classes/Shop";
import Adventure from "../classes/Adventure";
import Item from "../classes/Item";
import Pog from "../classes/Pog";
import Slammer from "../classes/Slammer";
import Floor from "../classes/Floor";
import Story from "../classes/Story";

import demoSlammerAbilityByN from "../slammerResources/demoSlammerAbilityByN";
import beeferSlammerAbilityByInput from "../slammerResources/beeferSlammerAbilityByInput";
import turtlerSlammerAbility from "../slammerResources/turtlerSlammerAbility";

function createButtPog(index: number) {
    return new Pog(`Butt Pog ${index}`, index, index, Math.floor(index * 1.2), index);
}

function createDemoFloorDebuggerStory() {
    return new Story(
        "Demo Story",
        "This is a demo story.",
        [ new Floor("First Floor", "First Floor Description", [
            new Chapter("First Chapter", ["First chapter description 1.", "First chapter description 2.", "First chapter description 3."], 
                new Baddie("Baddie 1", 
                    [], 
                        100, 1)),
            new Chapter("Second Chapter", ["Second chapter description 1.", "Second chapter description 2.", "Second chapter description 3."], 
                new Adventure("Adventure 1", "This is a demo description.", "chest")),
            ], new FinalChapter("Final Chapter", ["This is the final Baddie of the floor. He's big and has one eye."], new SuperBaddie("Richard Hill Giant", [], 0, 1, "Final Super Power"))),

        new Floor("Second Floor", "Second Floor Description", [
            new Chapter("First Chapter", ["First chapter description 1.", "First chapter description 2.", "First chapter description 3."], 
                new Baddie("Baddie 4", 
                    [createButtPog(1), createButtPog(2),], 100, 1)),
            new Chapter("Second Chapter", ["Second chapter description 1.", "Second chapter description 2.", "Second chapter description 3."], 
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
            new Chapter("Third Chapter", ["Third chapter description 1.", "Third chapter description 2.", "Third chapter description 3."], 
                new Adventure("Adventure 1", "This is a demo description.", "trade")),
        ], new FinalChapter("Final Chapter", ["Final chapter description 1.", "Final chapter description 2.", "Final chapter description 3."], 
            new SuperBaddie("Final Baddie", [], 0, 1, "Final Super Power")))
    ]);
}


export default createDemoFloorDebuggerStory;