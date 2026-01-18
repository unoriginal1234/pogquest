import { useGame } from '../context/GameContext';

export default function GameScreen() {
  const { state } = useGame();
  const game = state.game;

  if (!game) {
    return <p>No active game yet.</p>;
  }

  return (
    <div>
      <h1>Game Screen</h1>
      <p>
        Chapter {game.getChapterNumber()}: {game.getChapterTitle()} —{" "}
        {game.getChapterDescription()}
      </p>
    </div>
  );
}