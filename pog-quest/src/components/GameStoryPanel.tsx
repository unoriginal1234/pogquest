import Game from "../classes/Game";

export default function GameStoryPanel({ game }: { game: Game }) {
    return (
        <section className="demo-section">
            <h2>Story</h2>
            <p className="pog-glow-blue">
                Chapter {game.getChapterNumber()}: {game.getChapterTitle()} —{" "}
                {game.getChapterDescription()}
            </p>
            <p className="pog-glow-blue">Story: {game.getStory().getTitle()}</p>
        </section>
    );
}
