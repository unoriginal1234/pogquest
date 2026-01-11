import Story from "../classes/Story";
import Chapter from "../classes/Chapter";

const demoStory = new Story(
    "Demo Story",
    "This is a demo story.",
    [new Chapter("Chapter 1", "This is a demo chapter.", 1),
    new Chapter("Chapter 2", "This is a demo chapter.", 2),
    new Chapter("Chapter 3", "This is a demo chapter.", 3)
]
);

export default demoStory;