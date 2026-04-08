import Chapter from "../classes/Chapter";
import Baddie from "../classes/Baddie";
import SuperBaddie from "../classes/SuperBaddie";
import FinalChapter from "../classes/FinalChapter";

import Shop from "../classes/Shop";
import Adventure from "../classes/Adventure";
import Item from "../classes/Item";
import CombatPog from "../classes/pogClasses/CombatPog";
import Slammer from "../classes/Slammer";
import Floor from "../classes/Floor";
import Story from "../classes/Story";

import demoSlammerAbilityByN from "../slammerResources/demoSlammerAbilityByN";
import beeferSlammerAbilityByInput from "../slammerResources/beeferSlammerAbilityByInput";
import turtlerSlammerAbility from "../slammerResources/turtlerSlammerAbility";
// import beefTurtSlammer from "../slammerResources/beefTurtSlammer";
import masterDemoSlammer from "../slammerResources/masterDemoSlammer";

import { createActionPogByInput } from "./pilotDemo_001";

function createButtPog(index: number) {
    return new CombatPog(`Butt Pog ${index}`, index, index, Math.floor(index * 1.2));
}

function createLuckyPog(index: number) {
    return new CombatPog(`Lucky`, index, index, Math.floor(index * 1.2), 'lucky');
}

function createRadicalPog(index: number) {
    return new CombatPog(`Rad`, index, index, Math.floor(index * 1.2), 'radical');
}

function createDemoFloorDebuggerStory() {
    return new Story(
        "Demo Story",
        "This is a demo story.",
        [ new Floor("First Floor", "First Floor Description", [
            new Chapter("Second Chapter", ["Second chapter description 1.", "Second chapter description 2.", "Second chapter description 3."], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Participation Trophy", "1 Participation Award", 55)], 
                    [createActionPogByInput({name: "Crunch", gold: 10, action: 'double_attack', description: 'Doubles the next attack.'}),
                        createActionPogByInput({name: "Crunch", gold: 10, action: 'double_attack', description: 'Doubles the next attack.'}),
                        createActionPogByInput({name: "Crunch", gold: 10, action: 'double_attack', description: 'Doubles the next attack.'}),
                        createActionPogByInput({name: "Hide", gold: 10, action: 'double_defense', description: 'Doubles your current defense.'}),
                        createActionPogByInput({name: "Hide", gold: 10, action: 'double_defense', description: 'Doubles your current defense.'}),
                        createLuckyPog(1),
                        createRadicalPog(1),
                        createRadicalPog(1),
                        createRadicalPog(1),
                        ...Array.from({ length: 10 }, (_, i) => createButtPog(i + 1)),
                    ], 
                    [new Slammer("5 Ball Slammer", "Flips up 5 pogs.", 1, 0, masterDemoSlammer({flips: 5, duration: 1})),
                        new Slammer("Beef Ball", "2 Beefer for 1 turn.", 1, 0, masterDemoSlammer({flips: 2, boonMaker: [{name: 'beefer', value: 2}]}), 'beefer'),
                        new Slammer("Turtler Ball", "2 Turtler for 1 turn.", 1, 0, masterDemoSlammer({flips: 2, boonMaker: [{name: 'turtler', value: 2}], duration: 1}), 'turtler'),
                    new Slammer("Beef Turtle", "3 Beefer and 3 Turtler for 3 turns.", 1, 0, masterDemoSlammer({flips: 3, boonMaker: [{name: 'beefer', value: 3}, {name: 'turtler', value: 3}], duration: 3}), 'beeferturtler'),
                    new Slammer("Beef Strogonoff", "3 Beefer for 3 turns.", 1, 0, masterDemoSlammer({flips: 3, boonMaker: [{name: 'beefer', value: 3}], duration: 3}), 'beefer'),
                    new Slammer("Fortress Shell", "3 Turtler for 3 turns.", 1, 0, masterDemoSlammer({flips: 3, boonMaker: [{name: 'turtler', value: 3}], duration: 3}), 'turtler'),
                    new Slammer("Master Demo Slammer", "Flips up 7 pogs and grants 3 Beefer and 3 Turtler for 3 turns.", 1, 0, masterDemoSlammer({flips: 7, boonMaker: [{name: 'beefer', value: 3}, {name: 'turtler', value: 3}], duration: 3}), 'beeferturtler'),

                    ])),
            new Chapter("Lucky Chapter", ["Lucky chapter description 1.", "Lucky chapter description 2.", "Lucky chapter description 3."], 
                new Adventure("Lucky Adventure", "This is a description of the lucky adventure.", "lucky")), 
            new Chapter("First Chapter", ["First chapter description 1.", "First chapter description 2.", "First chapter description 3."], 
                new Baddie("Baddie 1", 
                    [createRadicalPog(1), createRadicalPog(1), createRadicalPog(1)], 
                        100, 1)),
                        new Chapter("Second Chapter", ["Second chapter description 1.", "Second chapter description 2.", "Second chapter description 3."], 
                            new Shop("Shop 1", "This is a demo shop.", 
                                [new Item("Participation Trophy", "1 Participation Award", 55)], 
                                [createButtPog(11),
                                    new CombatPog("Big Honker", 10, 10, 250),
                                    new CombatPog("Pog Mania", 15, 10, 300),
                                    new CombatPog("Biiig Defense", 2, 10, 20),
                                ], 
                                [new Slammer("8 Ball Slammer", "Flips up 8 pogs.", 1, 75, demoSlammerAbilityByN(6)),
                                new Slammer("Beef Strogonoff", "5 Beefer for 2 turns.", 1, 20, beeferSlammerAbilityByInput(5, 2), 'beefer'),
                                new Slammer("Fortress Shell", "7 Turtler for 1 turn.", 1, 30, turtlerSlammerAbility(7, 1), 'turtler')
                                ])),
                
            new Chapter("Second Chapter", ["Second chapter description 1.", "Second chapter description 2.", "Second chapter description 3."], 
                new Adventure("Forge", "This is a description of the forge adventure.", "forge")),
            ], new FinalChapter("Final Chapter", ["This is the final Baddie of the floor. He's big and has one eye."], new SuperBaddie("Richard Hill Giant", [], 0, 5, "Final Super Power"))),

        new Floor("Second Floor", "Second Floor Description", [
            new Chapter("First Chapter", ["First chapter description 1.", "First chapter description 2.", "First chapter description 3."], 
                new Baddie("Baddie 4", 
                    [createButtPog(1), createButtPog(2),], 100, 1)),
            
            new Chapter("Lucky Chapter", ["Lucky chapter description 1.", "Lucky chapter description 2.", "Lucky chapter description 3."], 
                new Adventure("Lucky Adventure", "This is a description of the lucky adventure.", "lucky")), 
                    new Chapter("Third Chapter", ["Third chapter description 1.", "Third chapter description 2.", "Third chapter description 3."], 
                new Adventure("The trader flashes his wares", "This is a description of the trader's whole thing.", "trade")),
        ], new FinalChapter("Final Chapter", ["Final chapter description 1.", "Final chapter description 2.", "Final chapter description 3."], 
            new SuperBaddie("Final Baddie", [], 0, 1, "Final Super Power")))
    ]);
}


export default createDemoFloorDebuggerStory;