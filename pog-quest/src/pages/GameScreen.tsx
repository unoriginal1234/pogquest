import { useState, useRef } from 'react';

import { useGame } from '../context/GameContext';
import GameMenuButtons from '../components/GameMenuButtons';
import GameStoryPanel from '../components/GameStoryPanel';
import EndGameScreen from '../components/EndGameScreen';
import PlayerStats from '../components/PlayerStats';
import PogCollection from '../components/PogCollection';
import SlammersCollection from '../components/SlammersCollection';
import Inventory from '../components/Inventory';    
import { Link } from 'react-router-dom';

export default function GameScreen() {
  const { state } = useGame();
  const [menuScreen, setMenuScreen] = useState<string | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  
  const modalRef = useRef<HTMLDialogElement>(null);

  const game = state.game;
  const player = game?.getPlayer();

  function handleEndGame() {
    setIsGameOver(true);
  }

  function openModal(screen: string) {
    setMenuScreen(screen);
    modalRef.current?.showModal();
  }

  function closeModal() {
    modalRef.current?.close();
    setMenuScreen(null);
  }

  if (!game) {
    return <p>No active game yet.</p>;
  }

  if (isGameOver) {
    return (
      <div className="page-layout">
        <EndGameScreen game={game} />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <h1>Game Screen</h1>
      <GameStoryPanel game={game} onEndGame={handleEndGame} />
      <GameMenuButtons getMenuButtonSelection={openModal} />

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <GameMenuScreen />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <footer className="footer-wrapper">
        <Link to="/"><button>Main Menu</button></Link>
      </footer>
    </div>
  );

  function GameMenuScreen() {
    if (menuScreen === "pog-collection") {
      return <PogCollection player={player!} togglePogCollection={closeModal} />;
    } else if (menuScreen === "inventory") {
      return <Inventory player={player!} toggleInventory={closeModal} />;
    } else if (menuScreen === "stats") {
      return <PlayerStats player={player!} togglePlayerStats={closeModal} />;
    } else if (menuScreen === "slammers") {
      return <SlammersCollection player={player!} toggleSlammersCollection={closeModal} />;
    }

    return null;
  }
}

