import { useGame } from '../context/GameContext';
import GameMenuButtons from '../components/GameMenuButtons';
import GameMenuView from '../components/GameMenuView';
import GameStoryPanel from '../components/GameStoryPanel';

export default function GameScreen() {
  const { state } = useGame();
  const game = state.game;

  if (!game) {
    return <p>No active game yet.</p>;
  }

  return (
    <div>
      <h1>Game Screen</h1>
      <div className="game-menu-row">
        <GameMenuButtons />
        <GameMenuView player={game.getPlayer()} />
      </div>
      <GameStoryPanel game={game} />
    </div>
  );
}