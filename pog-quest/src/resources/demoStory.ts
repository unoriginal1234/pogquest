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

function createDemoStory() {
    return new Story(
        "Demo Story",
        "This is a demo story.",
        [ new Floor("First Floor", "Floor Description", [
            new Chapter("The beginning", ["This is a demo chapter 1.", "This is a demo chapter 2.", "This is a demo chapter 3."], new Baddie("Baddie 1", [new Pog("Pog 1", 1, 1, 1, 1)], 100, 1)),
            new Chapter("The middle", ["This is a demo chapter 4.", "This is a demo chapter 5.", "This is a demo chapter 6."], new Shop("Shop 1", "This is a demo shop.", [new Item("Item 1", "This is a demo item.", 1)], [new Pog("Pog 1", 1, 1, 1, 1)], [new Slammer("Slammer 1", "This is a demo slammer.", 1)])),
            new Chapter("The end", ["This is a demo chapter 7.", "This is a demo chapter 8.", "This is a demo chapter 9."], new Adventure("Adventure 1", "This is a demo adventure.", "This is a demo effect.")),
            new Chapter("The beginning again", ["This is a demo chapter 10.", "This is a demo chapter 11.", "This is a demo chapter 12."], new Baddie("Baddie 1", [new Pog("Pog 1", 1, 1, 1, 1)], 100, 1)),
            new Chapter("The middle again", ["This is a demo chapter 13.", "This is a demo chapter 14.", "This is a demo chapter 15."], new Shop("Shop 1", "This is a demo shop.", [new Item("Item 1", "This is a demo item.", 1)], [new Pog("Pog 1", 1, 1, 1, 1)], [new Slammer("Slammer 1", "This is a demo slammer.", 1)])),
            new Chapter("The end again", ["This is a demo chapter 16.", "This is a demo chapter 17.", "This is a demo chapter 18."], new Adventure("Adventure 1", "This is a demo adventure.", "This is a demo effect.")),
            new Chapter("The beginning again", ["This is a de   mo chapter 19.", "This is a demo chapter 20.", "This is a demo chapter 21."], new Baddie("Baddie 1", [new Pog("Pog 1", 1, 1, 1, 1)], 100, 1)),
            new Chapter("The middle again", ["This is a demo chapter 22.", "This is a demo chapter 23.", "This is a demo chapter 24."], new Shop("Shop 1", "This is a demo shop.", [new Item("Item 1", "This is a demo item.", 1)], [new Pog("Pog 1", 1, 1, 1, 1)], [new Slammer("Slammer 1", "This is a demo slammer.", 1)])),
            new Chapter("The end again", ["This is a demo chapter 25.", "This is a demo chapter 26.", "This is a demo chapter 27."], new Adventure("Adventure 1", "This is a demo adventure.", "This is a demo effect.")),
        ])]
    )
}


export default createDemoStory;