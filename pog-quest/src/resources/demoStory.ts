import Story from "../classes/Story";
import Chapter from "../classes/Chapter";
import Baddie from "../classes/Baddie";
import Shop from "../classes/Shop";
import Adventure from "../classes/Adventure";
import Item from "../classes/Item";
import Pog from "../classes/Pog";
import Slammer from "../classes/Slammer";

const demoStory = new Story(
    "Demo Story",
    "This is a demo story.",
    [
        new Chapter("The beginning", "This is a demo chapter.", new Baddie("Baddie 1", [new Pog("Pog 1", 1, 1, 1, 1)], 100, 1)),
        new Chapter("The middle", "This is a demo chapter.", new Shop("Shop 1", "This is a demo shop.", [new Item("Item 1", "This is a demo item.", 1)], [new Pog("Pog 1", 1, 1, 1, 1)], [new Slammer("Slammer 1", "This is a demo slammer.", 1)])),
        new Chapter("The end", "This is a demo chapter.", new Adventure("Adventure 1", "This is a demo adventure.", "This is a demo effect.")),
        new Chapter("Oh wait this is the beginning again", "This is a demo chapter.", new Baddie("Baddie 1", [new Pog("Pog 1", 1, 1, 1, 1)], 100, 1)),
        new Chapter("The middle again", "This is a demo chapter.", new Shop("Shop 1", "This is a demo shop.", [new Item("Item 1", "This is a demo item.", 1)], [new Pog("Pog 1", 1, 1, 1, 1)], [new Slammer("Slammer 1", "This is a demo slammer.", 1)])),
        new Chapter("The end again", "This is a demo chapter.", new Adventure("Adventure 1", "This is a demo adventure.", "This is a demo effect.")),
        new Chapter("Oh wait this is the beginning again", "This is a demo chapter.", new Baddie("Baddie 1", [new Pog("Pog 1", 1, 1, 1, 1)], 100, 1)),
        new Chapter("The middle again", "This is a demo chapter.", new Shop("Shop 1", "This is a demo shop.", [new Item("Item 1", "This is a demo item.", 1)], [new Pog("Pog 1", 1, 1, 1, 1)], [new Slammer("Slammer 1", "This is a demo slammer.", 1)])),
        new Chapter("The end again", "This is a demo chapter.", new Adventure("Adventure 1", "This is a demo adventure.", "This is a demo effect.")),
    ]
);

export default demoStory;