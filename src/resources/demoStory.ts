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

function createButtPog(index: number) {
    return new Pog(`Butt Pog ${index}`, index, index, Math.floor(index * 1.2), index);
}

function createDemoStory() {
    return new Story(
        "Descend the Hellscraper",
        "Demo Story",
        [ new Floor("Lobby", "You burst through the spinning doors, and into the lobby...", [
            new Chapter("The Security Desk", ["The ogre behind the desk looks up from his newspaper..", "\"Hey, who are you?\"", "You grip your fist full of pogs. Ready for anything."], 
                new Baddie("Security Ogre", 
                    [createButtPog(1), createButtPog(2), createButtPog(3)], 
                        100, 1)),
            new Chapter("Information Kiosk", ["A demon sneers.", "\"Hey you're not supposed to be here\".", "Time to mix pogs with the Demon."], 
                new Baddie("Demon Informationist", 
                    [createButtPog(1), createButtPog(2), createButtPog(3), createButtPog(1)], 
                        100, 1)),
            new Chapter("A man smokes behind the stairs", ["\"Hey, dude, wanna check out my Pogs?\".", "\"I got something you're gonna like.\"", "\"Watchu lookin' for?.\""], 
                new Shop("Shop 1", "This is a demo shop.", 
                    [new Item("Participation Trophy", "1 Participation Award", 25), 
                    new Item("Participation Trophy", "1 Participation Award", 25)], 
                    [new Pog("Big Pog City", 10, 1, 50, 1),
                        new Pog("Big Honker", 10, 10, 250, 1),
                    new Pog("Biiig Defense", 2, 10, 20, 1),], 
                    [new Slammer("Hot Pocket", "Flips up 4 pogs.", 1, 10, demoSlammerAbility2),
                        new Slammer("Premier Beefer", "1 Beefer for 1 turn.", 1, 20, beeferSlammerAbilityByInput(1, 1), 'beefer'),
                        new Slammer("Shell Shield", "1 Turtler for 1 turn.", 1, 20, turtlerSlammerAbility(1, 1), 'turtler')
                    ],)),
            new Chapter("A junior sales Witch", 
                ["\"Who are you???\"", 
                    "\"What you got?\"", 
                    "\"I like your shiiiiney little pogs.\""], 
                new Adventure("Witch Trade", "I know exactly what I'm looking for.", "trade")),
            new Chapter("Empty Board Room", ["A Wizard's casting chill spells.", "\"Come sit by the fire.\"", "You sit by the fire."], 
                new Adventure("Wizard's Fire", "\"We should hang out some time.\"", "campfire")),
            new Chapter("Bogart's Bathroom", ["It reeks.", "The Bogart leaps at you.", "You're gonna need all the pogs you got."], 
                new Baddie("Bogart 2", 
                    [createButtPog(1), createButtPog(2), createButtPog(4), createButtPog(5), createButtPog(6), createButtPog(3)], 100, 2)),
            new Chapter("Scrug", ["\"You're not authoriiiiized!\"", "Scrug's got a big stack of pogs.", "Time to smash Pogs with Scrug."], 
                new Baddie("Scrug, the Devil's lil Guy", 
                    [createButtPog(2), createButtPog(4), createButtPog(2), createButtPog(4), createButtPog(2), createButtPog(4), createButtPog(3)], 
                    100, 2)),
            new Chapter("A chill gnome", ["\"You like pogs?\"", "\"I got pogs.\"", "\"Don't touch my hat\"."], 
                new Shop("Gnome shop", "\"I like the big ones.\"", 
                    [new Item("Participation Trophy", "1 Participation Award", 35)], 
                    [createButtPog(1), createButtPog(2), new Pog("The funky chicken", 10, 10, 250, 1), new Pog("Banana Sam", 7, 7, 25, 1)], 
                    [new Slammer("Ripper", "Flips up 5 pogs.", 1, 25, demoSlammerAbilityByN(3)),
                    new Slammer("Beefaroni", "3 Beefer for 2 turns.", 1, 20, beeferSlammerAbilityByInput(3, 2), 'beefer'),
                    new Slammer("Shellaplooza", "5 Turtler for 2 turns.", 1, 20, turtlerSlammerAbility(1, 2), 'turtler')
                    ])),
            new Chapter("A Gronk Emerges", ["He's coming right at you!", "He jumps on your head.", "You run!"], 
                new Adventure("Gronk on the dome", "Gronk licks your face.", "chase")),
            new Chapter("Skeleton Accountant", ["Have you filed?", "He runs pens on his ribs.", "Time to file some pogs."], 
                new Baddie("Skeleton Accountant", 
                    [createButtPog(1), 
                        createButtPog(2), 
                        new Pog("Big Honker", 10, 10, 250, 1), 
                        new Pog("Biiig Defense", 2, 10, 20, 1), 
                        new Pog("Big Honker", 10, 10, 250, 1), 
                        createButtPog(8)], 
                        100, 3)),
            new Chapter("The Broom Closet", ["A glimmer of light bounces off the mop water.", "A will-o-the-wisp dances.", "\"Like what I got?\""], 
                new Shop("Will-o-the-Wisp Shop", "I got bills to pay.", 
                    [new Item("Participation Trophy", "1 Participation Award", 45)], 
            [createButtPog(9),
                new Pog("Tale of Jonny Pizza", 5, 3, 20, 1),
                new Pog("Welcome to Space", 2, 5, 12, 1),
                createButtPog(3),
                createButtPog(4),
                createButtPog(5),
                createButtPog(6),
                createButtPog(7),
                createButtPog(8),
                createButtPog(9),                
            ], 
            [new Slammer("Slammer Jazzmo", "Flips up 6 pogs.", 1, 60, demoSlammerAbilityByN(4)),
            new Slammer("Beef Turtler", "3 Beefer and 3 Turtler for 2 turns.", 1, 69, beefTurtSlammer(3, 3), 'beeferturtler'),
            ])),
            new Chapter("A lone computer", ["A mouse hovers above an icon.", "The icon is a chest.", "Maybe you should open it."], 
                new Adventure("Computer Chest", "You open this and it's yours.", "chest")),
            ], 
            new FinalChapter("The Elevator King", 
                ["It's time to face the Elevator King.", "\"You cannot descend!\"", "You shove him into the elevator, and hit the DOWN button."], 
                new SuperBaddie("Final Baddie", [
                    new Pog("Big Honker", 10, 10, 250, 1),
                    new Pog("Pog Mania", 15, 10, 300, 1),
                    new Pog("Biiig Defense", 2, 10, 20, 1),
                    createButtPog(1),
                    createButtPog(2),
                    createButtPog(3),
                    createButtPog(4),
                    createButtPog(5),
                    createButtPog(6),
                    createButtPog(7),
                    createButtPog(8),
                    createButtPog(9),
                ], 250, 6, "Final Super Power"))),

        new Floor("Deep Below the Lobby", "A pulse fills your ears as you exit the elevator.", [
            new Chapter("Criminee Bajins", ["\"Let's see how our pogs stack up?\"", "You turn and run, but he's on you..", "Gotta pog the pog."], 
                new Baddie("Criminee Bajins", 
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
                        createButtPog(10)], 100, 6)),
            new Chapter("Death's Griffon", ["\"You have come too far.\"", "Pogs glide from the Griffon's feathers in spiraling formation. ", "You ready your pogs."], 
                new Shop("Death's Griffon Shop", "\"You want a soda?\"", 
                    [new Item("Participation Trophy", "1 Participation Award", 55)], 
                    [createButtPog(11),
                        new Pog("Big Honker", 10, 10, 250, 1),
                        new Pog("Pog Mania", 15, 10, 300, 1),
                        new Pog("Biiig Defense", 2, 10, 20, 1),
                    ], 
                    [new Slammer("8 Ball", "Flips up 8 pogs.", 1, 75, demoSlammerAbilityByN(6)),
                    new Slammer("Beef Strogonoff", "2 Beefer and 2 Turtler for 3 turns.", 1, 20, beefTurtSlammer(2, 2), 'beeferturtler'),
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
                    100, 7),)    
        ], new FinalChapter("CEO's Private Living Quarteres", ["The Devil CEO turns from drinking a child's blood..", "\"Looks like I'll have to deal with you myself.\"", "Hope you got the right pogs..."], 
            new SuperBaddie("Devil CEO", [new Pog("Big Honker", 10, 10, 250, 1),
                new Pog("Pog Mania", 15, 10, 300, 1),
                new Pog("Biiig Defense", 2, 10, 20, 1),
                createButtPog(1),
                createButtPog(2),
                createButtPog(3),
                createButtPog(4),
                createButtPog(5),
                createButtPog(6),
                createButtPog(7),
                createButtPog(8),
                createButtPog(9),new Pog("Big Honker", 10, 10, 250, 1),
                new Pog("Pog Mania", 15, 10, 300, 1),
                new Pog("Biiig Defense", 2, 10, 20, 1),
                createButtPog(1),
                createButtPog(2),
                createButtPog(3),
                createButtPog(4),
                createButtPog(5),
                createButtPog(6),
                createButtPog(7),
                createButtPog(8),
                createButtPog(9),], 100, 8, "Final Super Power")))
    ]);
}


export default createDemoStory;