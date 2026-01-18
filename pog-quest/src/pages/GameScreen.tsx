import { useState } from 'react';

import { useGame } from '../context/GameContext';
import GameMenuButtons from '../components/GameMenuButtons';
import GameStoryPanel from '../components/GameStoryPanel';
import PlayerStats from '../components/PlayerStats';
import PogCollection from '../components/PogCollection';


export default function GameScreen() {
  const { state } = useGame();
  const [ menuScreen, setMenuScreen] = useState<string | null>(null);

  const game = state.game;
  const player = game?.getPlayer();

  function togglePogCollection(){
    setMenuScreen(null);
  }

  if (!game) {
    return <p>No active game yet.</p>;
  }

  return (
    <div>
      <h1>Game Screen</h1>
      <GameStoryPanel game={game} />
      <div className="game-menu-row">
        <GameMenuButtons getMenuButtonSelection={getMenuButtonSelection}/>
        {menuScreen !== null ? <GameMenuScreen /> : null}
      </div>
    </div>
  );

  function GameMenuScreen() {

    if (menuScreen === "pog-collection"){
      return <PogCollection player={player!} togglePogCollection={togglePogCollection} />;
    } else if (menuScreen === "inventory"){
      return <Inventory player={player!} />;
    } else if (menuScreen === "stats"){
      return <PlayerStats player={player!} />;
    } else if (menuScreen === "slammers"){
      return <Slammers player={player!} />;
    }
  
    return (
      <div>
        <PlayerStats player={game!.getPlayer()} />
      </div>
    );
  }

  function getMenuButtonSelection(selection: string){
    if (selection === "pog-collection"){
      setMenuScreen("pog-collection");
    } else if (selection === "inventory"){
      setMenuScreen("inventory");
    } else if (selection === "stats"){
      setMenuScreen("stats");
    } else if (selection === "slammers"){
      setMenuScreen("slammers");
    }
  }

}

