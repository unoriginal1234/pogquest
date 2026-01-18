import { useGame } from '../context/GameContext';
import MainMenuButton from '../components/MainMenuButton';

export default function GameScreen() {
  const { state } = useGame();
  const game = state.game;

  if (!game) {
    return <p>No active game yet.</p>;
  }

  const player = game.getPlayer();
  const story = game.getStory();

  return (
    <div>
      <h1>Game Screen</h1>
      <p className="pog-glow-blue">
        Chapter {game.getChapterNumber()}: {game.getChapterTitle()} —{" "}
        {game.getChapterDescription()}
      </p>
      <p className="pog-glow-pink">Your Name: {player.getName()} the {player.getArchetype().type}</p>
      <p className="pog-glow-blue">Level: {player.getLevel()}</p>
      <p className="pog-glow-pink">Hitpoints: {player.getHitpoints()}</p>
      <p className="pog-glow-green">Pogs: {player.getPogCount()}</p>
      <p className="pog-glow-blue">Story: {story.getTitle()}</p>

      <MainMenuButton />
    </div>
  );
}