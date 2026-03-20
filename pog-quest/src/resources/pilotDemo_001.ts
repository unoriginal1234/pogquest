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
    const gold = Math.floor((strength*4 + defense*3));
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

function createDemoStory() {
    return new Story(
        "Descend the Hellscraper",
        "Demo Story",
        [ new Floor("Lobby", "You burst through the spinning doors, and into the lobby...", [
            new Chapter("The Security Desk", ["The ogre behind the desk looks up from his newspaper..", "\"Hey, who are you?\"", "You grip your fist full of pogs. Ready for anything."], 
                new Baddie("Security Ogre", 
                    [createButtPog(1), 
                        createButtPog(2), 
                        createPogByInput({name: "Loong Jacket", strength: 1, defense: 4})], 
                        20, 1)),
            new Chapter("Information Kiosk", ["A demon sneers.", "\"Hey you're not supposed to be here\".", "Time to mix pogs with the Demon."], 
                new Baddie("Demon with a Phone", 
                    [createButtPog(1), 
                        createButtPog(2), 
                        createPogByInput({name: "Jagged Lil", strength: 4, defense: 1}), 
                        createPogByInput({name: "Phone", strength: 1, defense: 2})], 
                        20, 1)),
            new Chapter("A man smokes behind the stairs", ["\"Hey, dude, wanna check out my Pogs?\".", "\"I got something you're gonna like.\"", "\"Watchu lookin' for?.\""], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Participation Trophy", "1 Participation Award", 25), 
                    new Item("Participation Trophy", "1 Participation Award", 25)], 
                    [createRandomPog(), 
                        createRandomPogByInput(3), 
                        createRandomPogByInput(4),
                        createRandomPogByInput(5)], 
                    [new Slammer("Hot Pocket", "Flips up 4 pogs.", 1, 40, demoSlammerAbility2),
                        new Slammer("Premier Beefer", "Flips up 3 pogs, grants 1 Beefer for 1 turn.", 1, 30, beeferSlammerAbilityByInput(1, 1), 'beefer'),
                        new Slammer("Shell Shield", "Flips up 3 pogs, grants 1 Turtler for 1 turn.", 1, 25, turtlerSlammerAbility(1, 1), 'turtler')
                    ],)),
            new Chapter("Empty Board Room", ["A Wizard's casting chill spells.", "\"Come sit by the fire.\"", "You sit by the fire."], 
                new Adventure("Wizard's Fire", "\"We should hang out some time.\"", "campfire")),
            new Chapter("Bogart's Bathroom", ["It reeks.", "The Bogart leaps at you.", "You're gonna need all the pogs you got."], 
                new Baddie("Bogart 2", 
                    [createButtPog(1), 
                        createButtPog(2), 
                        createPogByInput({name: "Jagged Lil", strength: 4, defense: 1}), 
                        createPogByInput({name: "Phone", strength: 1, defense: 2}), 
                        createPogByInput({name: "Loong Jacket", strength: 1, defense: 4}), 
                        createPogByInput({name: "Short Skirt", strength: 4, defense: 1})], 
                    40, 2)),
            new Chapter("Scrug", ["\"You're not authoriiiiized!\"", "Scrug's got a big stack of pogs.", "Time to smash Pogs with Scrug."], 
                new Baddie("Scrug, the Devil's lil Guy", 
                    [createButtPog(5), 
                        createRandomPogByInput(3),
                        createPogByInput({name: "Jagged Lil", strength: 4, defense: 1}), 
                        createPogByInput({name: "Short Skirt", strength: 4, defense: 1}), 
                        createPogByInput({name: "Waterfalls", strength: 3, defense: 2}), 
                        createPogByInput({name: "Razorblade Suitcase", strength: 6, defense: 8})], 
                    40, 2)),
            new Chapter("A chill gnome", ["\"You like pogs?\"", "\"I got pogs.\"", "\"Don't touch my hat\"."], 
                new Shop("Gnome shop", "\"I like the big ones.\"", 
                    [new Item("Participation Trophy", "1 Participation Award", 35)], 
                    [
                        createRandomPogByInput(3), 
                        createRandomPogByInput(4), 
                        createRandomPogByInput(5), 
                        createRandomPogByInput(6)], 
                    [
                        new Slammer("Ripper", "Flips up 5 pogs.", 1, 25, demoSlammerAbilityByN(3)),
                        new Slammer("Beefer Ripper", "1 Beefer for 1 turn.", 1, 30, beeferSlammerAbilityByInput(1, 1), 'beefer'),
                    ])),
            new Chapter("A Gronk Emerges", ["He's coming right at you!", "He jumps on your head.", "You run!"], 
                new Adventure("Gronk on the dome", "Gronk licks your face.", "chase")),
            new Chapter("Skeleton Accountant", ["Have you filed?", "He runs pens on his ribs.", "Time to file some pogs."], 
                new Baddie("Skeleton Accountant", 
                    [createButtPog(1), 
                        createButtPog(2), 
                        createPogByInput({name: "Welcome", strength: 6, defense: 9}),
                        createPogByInput({name: "To", strength: 2, defense: 10}),
                        createPogByInput({name: "Paradise", strength: 8, defense: 2}),
                        createRandomPog(),
                        createButtPog(8)], 
                        60, 3)),
                new Chapter("Scum Fucker", ["A little demon in the corner fucking scum", "Ew, he just pooped a little bit.", "The hallway reeks."], 
                    new Baddie("Skeleton Accountant", 
                        [createButtPog(1), 
                            createButtPog(2), 
                            createButtPog(3),
                            createButtPog(4),
                            createButtPog(2),
                            createButtPog(2),
                            createButtPog(2),], 
                            60, 3)),
            new Chapter("The Broom Closet", ["A glimmer of light bounces off the mop water.", "A will-o-the-wisp dances.", "\"Like what I got?\""], 
                new Shop("Will-o-the-Wisp Shop", "I got bills to pay.", 
                    [new Item("Participation Trophy", "1 Participation Award", 45)], 
                    [createRandomPogByInput(9), 
                        createRandomPogByInput(8), 
                        createRandomPogByInput(7), 
                        createRandomPogByInput(6), 
                        createRandomPogByInput(5)], 
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
                    createButtPog(1),
                    createButtPog(2),
                    createButtPog(3),
                    createButtPog(4),
                    createButtPog(5),
                    createButtPog(6),
                    createButtPog(7),
                    createButtPog(8),
                    createButtPog(9),
                ], 100, 4, "Final Super Power"))),

        new Floor("Deep Below the Lobby", "A pulse fills your ears as you exit the elevator.", [
            new Chapter("Criminee Bajins", ["\"Let's see how our pogs stack up?\"", "You turn and run, but he's on you..", "Gotta pog the pog."], 
                new Baddie("Criminee Bajins", 
                    [createButtPog(1), createButtPog(2),
                        createPogByInput({name: "Big Honker", strength: 10, defense: 10}),
                        createPogByInput({name: "Tale of Jonny Pizza", strength: 5, defense: 3}),
                        createPogByInput({name: "Welcome to Space", strength: 2, defense: 5}),
                        createPogByInput({name: "Gumby", strength: 3, defense: 3}),
                        createPogByInput({name: "Super Mario Bros", strength: 4, defense: 4}),
                        createPogByInput({name: "The Legend of Zelda", strength: 5, defense: 5}),
                        createPogByInput({name: "Pac-Man", strength: 6, defense: 6}),
                        createPogByInput({name: "Donkey Kong", strength: 7, defense: 7}),
                        createPogByInput({name: "Mario Kart", strength: 8, defense: 8}),
                        createPogByInput({name: "Biiig Defense", strength: 2, defense: 10}), 
                        createButtPog(10)], 90, 5)),
            new Chapter("Criminee Bajins", ["\"Let's see how our pogs stack up?\"", "You turn and run, but he's on you..", "Gotta pog the pog."], 
                new Baddie("Criminee Bajins", 
                    [createButtPog(1), createButtPog(2),
                        new Pog("Big Honker", 10, 10, 250, 1),
                        createPogByInput({name: "Tale of Jonny Pizza", strength: 5, defense: 3}),
                        createPogByInput({name: "Welcome to Space", strength: 2, defense: 5}),
                        createPogByInput({name: "Gumby", strength: 3, defense: 3}),
                        createPogByInput({name: "Super Mario Bros", strength: 4, defense: 4}),
                        createPogByInput({name: "The Legend of Zelda", strength: 5, defense: 5}),
                        createPogByInput({name: "Pac-Man", strength: 6, defense: 6}),
                        createPogByInput({name: "Donkey Kong", strength: 7, defense: 7}),
                        createPogByInput({name: "Mario Kart", strength: 8, defense: 8}),
                        createPogByInput({name: "Biiig Defense", strength: 2, defense: 10}), 
                        createButtPog(10)], 90, 5)),
                new Chapter("Empty Board Room", ["A Wizard's casting chill spells.", "\"Come sit by the fire.\"", "You sit by the fire."], 
                    new Adventure("Wizard's Fire", "\"We should hang out some time.\"", "campfire")),
                
                        new Chapter("Death's Griffon", ["\"You mortals all have the same weakness.\"", "Pogs glide from the Griffon's feathers in spiraling formation. ", "The Griffon refuses to break eye contact."], 
                new Shop("Death's Griffon Shop", "\"You want a soda?\"", 
                    [new Item("Participation Trophy", "1 Participation Award", 55)], 
                    [   
                        createRandomPog(),
                        createRandomPog(),
                        createRandomPog(),
                        createRandomPog(),
                    ], 
                    [new Slammer("8 Ball", "Flips up 8 pogs.", 1, 75, demoSlammerAbilityByN(6)),
                        new Slammer("Turt Gurgins", "Flips up 4 pogs, grants 2 turtler for 3 turns.", 1, 20, masterDemoSlammer({flips: 4, boonMaker: [{name: 'turtler', value: 2}], duration: 3}), 'turtler'),
                    ])),
            new Chapter("Creglor", ["A small cube.", "The cube's eyes spring to life.", "It's looking right at you!"], 
                new Adventure("Creglor's Trade", "\"I love some of your stuff, not all...\".", "trade")),
            new Chapter("Troll Controller's Office", ["Has complete records of the building's offshore accounts.", "\"I will punish you!\".", "Bam. Pogs on the table."], 
                new Baddie("Troll Controller", 
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
                    100, 7),),
            new Chapter("A glow attracts you", ["The forge beckons.", "Slammers pulse in your fanny pack", "Make youself something powerful."], 
                new Adventure("Forge", "This is a description of the forge adventure.", "forge")),    
        ], new FinalChapter("CEO's Private Living Quarteres", ["The Devil CEO turns from drinking a child's blood..", "\"Looks like I'll have to deal with you myself.\"", "Hope you got the right pogs..."], 
            new SuperBaddie("Devil CEO", [
                createPogByInput({name: "Big Honker", strength: 10, defense: 10}),
                createPogByInput({name: "Pog Mania", strength: 15, defense: 10}),
                createPogByInput({name: "Biiig Defense", strength: 2, defense: 10}),
                createButtPog(1),
                createButtPog(2),
                createButtPog(3),
                createButtPog(4),
                createButtPog(5),
                createButtPog(6),
                createButtPog(7),
                createButtPog(8),
                createButtPog(9),
                createButtPog(1),
                createButtPog(2),
                createButtPog(3),
                createButtPog(4),
                createButtPog(5),
                createButtPog(6),
                createButtPog(7),
                createButtPog(8),
                createButtPog(9),], 100, 8, "Final Super Power"))),

        new Floor("The Top Floor of the Center of the Earth", "The Devil stands looking at a volcano.", [
            new Chapter("\"I've been expecting you.\"", ["He straightens his tie.", "\"Oh no, it is not our time yet.\"", "The room pulses with the power of the erupting volcano ."], 
                new Baddie("HR Lava Bear", [createButtPog(1), createButtPog(2), createButtPog(3)], 100, 1)),
            new Chapter("Death's Griffon", ["\"You have come too far.\"", "Pogs glide from the Griffon's feathers in spiraling formation. ", "You ready your pogs."], 
                new Shop("Death's Griffon Shop", "\"You want a soda?\"", 
                    [new Item("Participation Trophy", "1 Participation Award", 55)], 
                    [createRandomPog(), 
                        createRandomPog(), 
                        createRandomPog(), 
                        createRandomPog(), 
                        createRandomPog(), 
                        createRandomPog(), 
                    ],  
                    [new Slammer("8 Ball", "Flips up 8 pogs.", 1, 75, demoSlammerAbilityByN(6)),
                        new Slammer("Lil Grumper", "Flips up 51 Turtler for 3 turns.", 1, 100, masterDemoSlammer({flips: 7, boonMaker: [{name: 'turtler', value: 3}], duration: 3}), 'turtler'),
                        new Slammer("Beef Turtler", "Flips up 3 pogs, grants 3 Beefer and 3 Turtler for 2 turns.", 1, 69, beefTurtSlammer(3, 3), 'beeferturtler'),
                    ])),
            new Chapter("Empty Board Room", ["A Wizard's casting chill spells.", "\"Come sit by the fire.\"", "You sit by the fire."], 
                new Adventure("Wizard's Fire", "\"We should hang out some time.\"", "campfire")),
                    new Chapter("A junior sales Witch", 
                ["\"Who are you???\"", 
                    "\"What you got?\"", 
                    "\"I like your shiiiiney little pogs.\""], 
                new Adventure("Witch Trade", "I know exactly what I'm looking for.", "trade")),
            new Chapter("Bogart's Bathroom", ["It reeks.", "The Bogart leaps at you.", "You're gonna need all the pogs you got."], 
                new Baddie("Bogart 2", 
                    [createButtPog(1), createButtPog(2), createButtPog(4), createButtPog(5), createButtPog(6), createButtPog(3)], 100, 2)),
            new Chapter("Scrug", ["\"You're not authoriiiiized!\"", "Scrug's got a big stack of pogs.", "Time to smash Pogs with Scrug."], 
                new Baddie("Scrug, the Devil's lil Guy", 
                    [createButtPog(2), createButtPog(4), createButtPog(2), createButtPog(4), createButtPog(2), createButtPog(4), createButtPog(3)], 
                    100, 2)),
            new Chapter("A glow attracts you", ["The forge beckons.", "Slammers pulse in your fanny pack", "Make youself something powerful."], 
                new Adventure("Forge", "This is a description of the forge adventure.", "forge")),
        ], new FinalChapter("Final Baddie", ["You've made it to the final floor.", "The final baddie is here.", "You're ready to fight."], 
            new SuperBaddie("Final Baddie", [createButtPog(1), createButtPog(2), createButtPog(3)], 100, 1, "Final Super Power")))
    ], 
    
);
}


export default createDemoStory;