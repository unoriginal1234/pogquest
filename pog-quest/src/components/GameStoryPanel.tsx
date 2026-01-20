import Game from "../classes/Game";

export default function GameStoryPanel({ game }: { game: Game }) {

    const story = game.getStory();
    const currentChapter = story.getCurrentChapter();
    const chapterNumber = currentChapter.getChapterNumber();
    const chapterTitle = currentChapter.getTitle();
    const chapterDescription = currentChapter.getDescription();
    const completionType = currentChapter.getCompletionType();
    const unlockedChapters = story.getUnlockedChapters();
    const unlockedChapterCount = unlockedChapters.length;
    const totalChapterCount = story.getChapterCount();

    return (
        <section className="demo-section pog-border">
            <h2>Story</h2>
            <p className="pog-glow-blue">
                Chapter {chapterNumber}: {chapterTitle} —{" "}
                {chapterDescription}
            </p>
            <p className="pog-glow-blue">Story: {story.getTitle()}</p>
            <p className="pog-glow-blue">Completion Type: {completionType.constructor.name}</p>
            <p className="pog-glow-blue">Unlocked Chapters: {unlockedChapterCount} / {totalChapterCount}</p>
        </section>
    );
}
