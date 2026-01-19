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
        new Chapter("Chapter 1", "This is a demo chapter.", 1, new Baddie("Baddie 1", [new Pog("Pog 1", 1, 1, 1, 1)], 100, 1)),
        new Chapter("Chapter 2", "This is a demo chapter.", 2, new Shop("Shop 1", "This is a demo shop.", [new Item("Item 1", "This is a demo item.", 1)], [new Pog("Pog 1", 1, 1, 1, 1)], [new Slammer("Slammer 1", "This is a demo slammer.", 1)])),
        new Chapter("Chapter 3", "This is a demo chapter.", 3, new Adventure("Adventure 1", "This is a demo adventure.", "This is a demo effect."))
    ]
);

export default demoStory;