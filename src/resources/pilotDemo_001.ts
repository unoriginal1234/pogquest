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

import demoSlammerAbility2 from "../slammerResources/demoSlammerAbility2";
import demoSlammerAbilityByN from "../slammerResources/demoSlammerAbilityByN";

import beeferSlammerAbilityByInput from "../slammerResources/beeferSlammerAbilityByInput";
import turtlerSlammerAbility from "../slammerResources/turtlerSlammerAbility";
import beefTurtSlammer from "../slammerResources/beefTurtSlammer";

import masterDemoSlammer from "../slammerResources/masterDemoSlammer";


function createButtPog(index: number) {
    return new Pog(`Butt Pog ${index}`, index, index, Math.floor(index * 1.2), index);
}

export function createPogByInput({name, strength, defense}: {name: string, strength: number, defense: number}){
    const gold = Math.floor((3* 2**strength + 2 * 2**defense));
    return new Pog(name, strength, defense, gold, 1);
}

export function createRandomPog() {
    const strength = Math.floor(Math.random() * 10) + 1;
    const defense = Math.floor(Math.random() * 10) + 1;
    return createPogByInput({name: "Random Pog", strength, defense});
}

export function createRandomPogByInput(n: number) {
    const strength = Math.floor(Math.random() * n) + 1;
    const defense = Math.floor(Math.random() * n) + 1;
    return createPogByInput({name: "Random Pog", strength, defense});
}

export function createRandomAttackPog(n: number) {
    const strength = Math.floor(Math.random() * n) + 1;
    const defense = 0;
    return createPogByInput({name: "Attack", strength, defense});
}

export function createRandomDefensePog(n: number) {
    const strength = 0;
    const defense = Math.floor(Math.random() * n) + 1;
    return createPogByInput({name: "Block", strength, defense});
}

export function createAttackPog(strength: number) {
    return createPogByInput({name: "Attack", strength, defense: 0});
}

export function createDefensePog(defense: number) {
    return createPogByInput({name: "Block", strength: 0, defense});
}

function createDemoStory() {
    return new Story(
        "Descend the Hellscraper",
        "Demo Story",
        [ new Floor("Lobby", "You burst through the spinning doors, and into the lobby...", [
            new Chapter("The Security Ogre lvl 1", ["The ogre looks up from his newspaper..", "You grip your fist full of pogs. Ready for anything.", "You mix your pogs with the Ogre." ], 
                new Baddie("Security Ogre", 
                    [createPogByInput({name: "Guard Smash", strength: 3, defense: 2}), 
                        createRandomDefensePog(2), 
                        createRandomAttackPog(2),
                        createDefensePog(4),
                    ], 
                        20, 1)),
            new Chapter("Office Demon lvl 1", ["The Demon looks up from behind her computer: \"No, you are not authorized!\"", "You whip out your pogs.", "The information kiosk swells with blood."], 
                new Baddie("Information Demon", 
                    [createPogByInput({name: "Info Smack", strength: 5, defense: 1}), 
                        createRandomDefensePog(4), 
                        createDefensePog(4), 
                        createAttackPog(2)
                    ], 
                        20, 1)),
            new Chapter("A man smokes behind the stairs", ["\"Hey, dude, wanna check out my Pogs?\".", "\"I got something you're gonna like.\"", "\"Watchu lookin' for?.\""], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Participation Trophy", "1 Participation Award", 25)], 
                    [createPogByInput({name: "Smoke Screen", strength: 2, defense: 4}), 
                        createRandomAttackPog(4), 
                        createRandomDefensePog(4),
                        createRandomAttackPog(5)], 
                    [new Slammer("Hot Pocket", "Flips up 4 pogs.", 1, 40, demoSlammerAbility2),
                        new Slammer("Premier Beefer", "Flips up 3 pogs, grants 1 Beefer for 1 turn.", 1, 30, beeferSlammerAbilityByInput(1, 1), 'beefer'),
                        new Slammer("Shell Shield", "Flips up 3 pogs, grants 1 Turtler for 1 turn.", 1, 25, turtlerSlammerAbility(1, 1), 'turtler')
                    ],)),
            new Chapter("Empty Board Room", ["A Wizard's casting chill spells.", "\"Come sit by the fire.\"", "You sit by the fire."], 
                new Adventure("Wizard's Fire", "\"We should hang out some time.\"", "campfire")),
            new Chapter("Bogart lvl 2", ["The Bogart is drooling ferociously", "She pulls you into the bathroom.", "It reeks."], 
                new Baddie("Bogart", 
                    [createAttackPog(3), 
                        createDefensePog(3), 
                        createDefensePog(4),
                        createDefensePog(2),
                        createPogByInput({name: "Drool", strength: 1, defense: 4}), 
                        createPogByInput({name: "Bite", strength: 4, defense: 1})], 
                    30, 2)),
            new Chapter("Scrug lvl 2", ["\"You're not authoriiiiized!\"", "Scrug's got a big stack of pogs.", "Time to smash Pogs with Scrug."], 
                new Baddie("Scrug, the Devil's lil Guy", 
                    [createPogByInput({name: "Whiine", strength: 5, defense: 0}),
                        createDefensePog(3),
                        createDefensePog(4),
                        createAttackPog(4), 
                        createDefensePog(2),
                        createAttackPog(4), 
                        ], 
                    30, 2)),
            new Chapter("A chill gnome", ["\"You like pogs?\"", "\"I got pogs.\"", "\"Don't touch my hat\"."], 
                new Shop("Gnome shop", "\"I like the big ones.\"", 
                    [new Item("Participation Trophy", "1 Participation Award", 35)], 
                    [createPogByInput({name: "Gnome Hat", strength: 2, defense: 5}), 
                        createRandomAttackPog(4), 
                        createRandomDefensePog(5), 
                        createRandomAttackPog(6)], 
                    [new Slammer("Ripper", "Flips up 5 pogs.", 1, 25, demoSlammerAbilityByN(3)),
                        new Slammer("Beef Chips", "1 Beefer for 1 turn.", 1, 30, beeferSlammerAbilityByInput(1, 1), 'beefer'),
                    ])),
            
            new Chapter("Skeleton Accountant lvl 3", ["\"I'm going to need your W-666\"", "Time to file some pogs", "Paperwork swirls in a vortex."], 
                new Baddie("Skeleton Accountant", 
                    [createPogByInput({name: "W-666", strength: 6, defense: 6}), 
                        createDefensePog(3), 
                        createDefensePog(4),
                        createAttackPog(5),
                        createDefensePog(3),
                        createAttackPog(5),], 
                        40, 3)),
            new Chapter("Empty Board Room", ["A Wizard's casting chill spells.", "\"Come sit by the fire.\"", "You sit by the fire."], 
                new Adventure("Wizard's Fire", "\"We should hang out some time.\"", "campfire")),
            new Chapter("Scum Grumper lvl 3", ["Scum Grumper looks at you with one cosmic eye.", "Ew, he's gross.", "The hallway reeks."], 
                new Baddie("Scum Grumper", 
                    [createPogByInput({name: "Eye Scum", strength: 4, defense: 4}), 
                        createDefensePog(4), 
                        createAttackPog(3),
                        createAttackPog(3),
                        createDefensePog(2),
                        createAttackPog(2),], 
                        40, 3)),
            new Chapter("The Broom Closet", ["A glimmer of light bounces off the mop water.", "A will-o-the-wisp dances.", "\"Like what I got?\""], 
                new Shop("Will-o-the-Wisp Shop", "I got bills to pay.", 
                    [new Item("Participation Trophy", "1 Participation Award", 45)], 
                    [createPogByInput({name: "Wisp's Secret", strength: 7, defense: 2}), 
                        createRandomDefensePog(8), 
                        createRandomAttackPog(7), 
                        createRandomAttackPog(6), 
                        createRandomAttackPog(5)], 
            [new Slammer("Slammer Jazzmo", "Flips up 6 pogs.", 1, 60, masterDemoSlammer({flips: 6})),
                new Slammer("Beefaroni", "Flips up 3 pogs, grants 3 Beefer for 2 turns.", 1, 80, beeferSlammerAbilityByInput(3, 2), 'beefer'),
            ])),
            new Chapter("A glow attracts you", ["The forge beckons.", "Slammers pulse in your fanny pack", "Make youself something powerful."], 
                new Adventure("Forge", "This is a description of the forge adventure.", "forge")),
            new Chapter("A lone computer", ["A mouse hovers above an icon.", "The icon is a chest.", "Maybe you should open it."], 
                new Adventure("Computer Chest", "You open this and it's yours.", "chest")),
            ], 
            new FinalChapter("The Elevator King", 
                ["It's time to face the Elevator King.", "\"You cannot descend!\"", "You shove him into the elevator, and hit the DOWN button."], 
                new SuperBaddie("The Elevator King", [
                    createPogByInput({name: "Going Down", strength: 7, defense: 3}),
                    createDefensePog(2),
                    createDefensePog(3),
                    createDefensePog(4),
                    createAttackPog(3),
                    createDefensePog(4),
                    createAttackPog(5),
                    createDefensePog(6),
                    createDefensePog(7),
                    createAttackPog(7),
                    createDefensePog(8),
                ], 60, 4, "Final Super Power"))),

        new Floor("Deep Below the Lobby", "A pulse fills your ears as you exit the elevator.", [
            new Chapter("Criminee Bajins lvl 4", ["\"Let's see how our pogs stack up?\"", "You turn and run, but he's on you..", "Gotta pog the pog."], 
                new Baddie("Criminee Bajins", 
                    [createPogByInput({name: "Banjo Kapow", strength: 6, defense: 2}), 
                        createDefensePog(2),
                        createRandomDefensePog(10),
                        createAttackPog(5),
                        createDefensePog(3),
                        createAttackPog(4),
                        createAttackPog(5),
                        createDefensePog(4),
                        createDefensePog(5),
                        createAttackPog(6),
                        ], 50, 4)),
                new Chapter("Randal Darktooth lvl 5", ["\"Hot diggity dog! I'm Randall Darktooth!!\"", "His sneer burns a hole in your soul.", "The office stinks of blood and rot."], 
                    new Baddie("Randal Darktooth", 
                        [createPogByInput({name: "Toxic Tooth", strength: 8, defense: 1}), 
                            createDefensePog(2),
                            createAttackPog(3),
                            createDefensePog(5),
                            createAttackPog(3),
                            createAttackPog(5),
                            createDefensePog(4),
                            createAttackPog(4),
                            createDefensePog(5),
                            createAttackPog(6),
                            createAttackPog(7),
                            ], 50, 5)),
            new Chapter("Empty Board Room", ["A Wizard's casting chill spells.", "\"Come sit by the fire.\"", "You sit by the fire."], 
                new Adventure("Wizard's Fire", "\"We should hang out some time.\"", "campfire")),
            new Chapter("Beltway Fuzzlebottom lvl 6", ["\"Whip 'em out!\"", "Something's off about this one.", "The lights flicker."], 
                new Baddie("Beltway Fuzzlebottom", 
                    [createPogByInput({name: "Belt Whip", strength: 7, defense: 7}), 
                        createDefensePog(2),
                        createRandomPogByInput(10),
                        createAttackPog(5),
                        createDefensePog(3),
                        createRandomDefensePog(10),
                        createRandomAttackPog(10),
                        createAttackPog(4),
                        createAttackPog(6),
                        createAttackPog(7),
                        ], 60, 6)),
            new Chapter("Death's Griffon", ["\"You mortals all have the same weakness.\"", "Pogs glide from the Griffon's feathers in spiraling formation. ", "The Griffon refuses to break eye contact."], 
                new Shop("Death's Griffon Shop", "\"You want a soda?\"", 
                    [new Item("Participation Trophy", "1 Participation Award", 55)], 
                    [   
                        createRandomAttackPog(8),
                        createRandomDefensePog(8),
                        createRandomAttackPog(8),
                        createRandomDefensePog(8),
                    ], 
                    [new Slammer("8 Ball", "Flips up 8 pogs.", 1, 75, demoSlammerAbilityByN(6)),
                        new Slammer("Turt Gurgins", "Flips up 4 pogs, grants 2 turtler for 3 turns.", 1, 20, masterDemoSlammer({flips: 4, boonMaker: [{name: 'turtler', value: 2}], duration: 3}), 'turtler'),
                    ])),
            new Chapter("A Gronk Emerges", ["He's coming right at you!", "He jumps on your head.", "You run!"], 
                new Adventure("Gronk on the dome", "Gronk licks your face.", "chase")),
            new Chapter("Creglor", ["A small cube.", "The cube's eyes spring to life.", "It's looking right at you!"], 
                new Adventure("Creglor's Trade", "\"I love some of your stuff, not all...\".", "trade")),
            new Chapter("Troll Controller lvl 6", ["Has complete records of the building's offshore accounts.", "\"I will punish you!\".", "Bam. Pogs on the table."], 
                new Baddie("Troll Controller", 
                    [createAttackPog(1), 
                        createDefensePog(12), 
                        createAttackPog(3), 
                        createDefensePog(5), 
                        createAttackPog(6), 
                        createDefensePog(7), 
                        createAttackPog(7), 
                        createDefensePog(7), 
                        createAttackPog(7), 
                        createDefensePog(7), 
                        createAttackPog(7), 
                        createDefensePog(7), 
                    ], 70, 6)),
            new Chapter("Empty Board Room", ["A Wizard's casting chill spells.", "\"Come sit by the fire.\"", "You sit by the fire."], 
                new Adventure("Wizard's Fire", "\"We should hang out some time.\"", "campfire")),
            new Chapter("A Gronk Emerges", ["He's coming right at you!", "He jumps on your head.", "You run!"], 
                new Adventure("Gronk on the dome", "Gronk licks your face.", "chase")),
            new Chapter("A glow attracts you", ["The forge beckons.", "Slammers pulse in your fanny pack", "Make youself something powerful."], 
                new Adventure("Forge", "This is a description of the forge adventure.", "forge")),    
        ], new FinalChapter("CEO's Private Living Quarteres", ["The Devil CEO turns from drinking a child's blood..", "\"Looks like I'll have to deal with you myself.\"", "Hope you got the right pogs..."], 
            new SuperBaddie("Devil CEO", [
                createPogByInput({name: "CEO's Honker", strength: 10, defense: 10}),
                createPogByInput({name: "Boardroom Veto", strength: 15, defense: 10}),
                createPogByInput({name: "Layoff", strength: 2, defense: 10}),
                createAttackPog(1),
                createDefensePog(2),
                createDefensePog(3),
                createAttackPog(4),
                createDefensePog(5),
                createAttackPog(6),
                createDefensePog(7),
                createDefensePog(8),
                createAttackPog(9),
                createDefensePog(1),
                createAttackPog(2),
                createDefensePog(3),
                createAttackPog(4),
                createDefensePog(5),
                createAttackPog(7),
                createDefensePog(8),
                createAttackPog(9),], 100, 9, "Final Super Power"))),

        new Floor("The Top Floor of the Center of the Earth", "The Devil stands looking at a volcano.", [
            new Chapter("\"I've been expecting you.\"", ["He straightens his tie.", "\"Oh no, it is not our time yet.\"", "The room pulses with the power of the erupting volcano ."], 
                new Baddie("HR Lava Goblin", [
                    createButtPog(1), 
                    createButtPog(2), 
                    createButtPog(3),
                    createButtPog(4),
                    createButtPog(5),
                    createButtPog(6),
                    createButtPog(7),
                    createButtPog(8),
                    createButtPog(9),
                    createRandomPogByInput(10),
                    createRandomPogByInput(10),
                    createRandomPogByInput(10),
                    createRandomPogByInput(11),
                    createRandomPogByInput(12),
                ], 80, 7)),
            new Chapter("Death's Griffon", ["\"You have come too far.\"", "Pogs glide from the Griffon's feathers in spiraling formation. ", "You ready your pogs."], 
                new Shop("Death's Griffon Shop", "\"You want a soda?\"", 
                    [new Item("Participation Trophy", "1 Participation Award", 55)], 
                    [createPogByInput({name: "The Griffon's Egg", strength: 10, defense: 10}),
                        createRandomPog(), 
                        createRandomAttackPog(8),
                        createRandomDefensePog(8),
                        createRandomAttackPog(8),
                        createRandomDefensePog(8),
                    ],  
                    [new Slammer("8 Ball", "Flips up 8 pogs.", 1, 75, demoSlammerAbilityByN(6)),
                        new Slammer("Lil Grumper", "Flips up 5, 1 Turtler for 3 turns.", 1, 100, masterDemoSlammer({flips: 7, boonMaker: [{name: 'turtler', value: 3}], duration: 3}), 'turtler'),
                        new Slammer("Beef Turtler", "Flips up 3 pogs, grants 3 Beefer and 3 Turtler for 2 turns.", 1, 69, beefTurtSlammer(3, 3), 'beeferturtler'),
                    ])),
                    new Chapter("\"I've been expecting you.\"", ["He straightens his tie.", "\"Oh no, it is not our time yet.\"", "The room pulses with the power of the erupting volcano ."], 
                        new Baddie("HR Lava Goblin", [
                            createButtPog(1), 
                            createButtPog(2), 
                            createButtPog(3),
                            createButtPog(4),
                            createButtPog(5),
                            createButtPog(6),
                            createButtPog(7),
                            createButtPog(8),
                            createRandomPogByInput(15),
                            createRandomPogByInput(15),
                            createRandomPogByInput(15),
                            createRandomPogByInput(15),
                            createRandomPogByInput(15),
                            createRandomPogByInput(15),
                        ], 80, 7)),

                new Chapter("Flizzlipper lvl 8", ["Reaching into his chest, he pokes his heart.", "\"My bum ticker's about to burst!\"", "Blood covers the floor."], 
                    new Baddie("Fizzlipper", [
                        createButtPog(1), 
                        createButtPog(2), 
                        createButtPog(3),
                        createButtPog(4),
                        createButtPog(5),
                        createButtPog(6),
                        createButtPog(7),
                        createButtPog(8),
                        createButtPog(9),
                        createButtPog(10),
                        createButtPog(11),
                        createRandomPogByInput(15),
                        createRandomPogByInput(15),
                        createRandomPogByInput(15),
                        createRandomPogByInput(15),
                        createRandomPogByInput(15),
                        createRandomPogByInput(15),
                        createRandomPogByInput(15),
                    ], 80, 8)),
            new Chapter("Empty Board Room", ["A Wizard's casting chill spells.", "\"Come sit by the fire.\"", "You sit by the fire."], 
                new Adventure("Wizard's Fire", "\"We should hang out some time.\"", "campfire")),
                    new Chapter("A junior sales Witch", 
                ["\"Who are you???\"", 
                    "\"What you got?\"", 
                    "\"I like your shiiiiney little pogs.\""], 
                new Adventure("Witch Trade", "I know exactly what I'm looking for.", "trade")),
            
            new Chapter("A glow attracts you", ["The forge beckons.", "Slammers pulse in your fanny pack", "Make youself something powerful."], 
                new Adventure("Forge", "This is a description of the forge adventure.", "forge")),
        ], new FinalChapter("Final Baddie", ["You've made it to the final floor.", "The final baddie is here.", "You're ready to fight."], 
            new SuperBaddie("Final Baddie", [
                createRandomPogByInput(15), 
                createRandomPogByInput(15), 
                createRandomPogByInput(15),
                createRandomPogByInput(15),
                createRandomPogByInput(15),
                createRandomPogByInput(15), 
                createRandomPogByInput(15), 
                createRandomPogByInput(15),
                createRandomPogByInput(15),
                createRandomPogByInput(15),
                createRandomPogByInput(20),
                createRandomPogByInput(20),
                createRandomPogByInput(20),
                createRandomPogByInput(20),
                createRandomPogByInput(20),
                createRandomPogByInput(20),
                createRandomPogByInput(20),
                createRandomPogByInput(20),
                ], 100, 9, "Final Super Power")))
    ], 
    
);
}


export default createDemoStory;