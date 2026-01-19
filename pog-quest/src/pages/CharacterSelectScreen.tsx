import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import CharacterSelect from '../classes/controls/CharacterSelect';
import nameGenerator from '../helperFunctions/nameGenerator'; 

import PogCollection from '../components/PogCollection';
import SlammersCollection from '../components/SlammersCollection';
import Inventory from '../components/Inventory';

import MainMenuButton from '../components/MainMenuButton';

import demoStory from '../resources/demoStory';
import Story from '../classes/Story';
import Game from '../classes/Game';
import Player from '../classes/Player';

import { useGame } from '../context/GameContext';

function CharacterSelectScreen() {

    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [player, setPlayer] = useState<Player | null>(null);
    const [isPogCollectionOpen, setIsPogCollectionOpen] = useState(false);
    const [isSlammersCollectionOpen, setIsSlammersCollectionOpen] = useState(false);
    const [isInventoryOpen, setIsInventoryOpen] = useState(false);

    function toggleInventory() {
      setIsInventoryOpen(!isInventoryOpen);
    }

    const { dispatch } = useGame();

    function togglePogCollection() {
      setIsPogCollectionOpen(!isPogCollectionOpen);
    }

    function toggleSlammersCollection() {
      setIsSlammersCollectionOpen(!isSlammersCollectionOpen);
    }

    function startGame(player: Player, story: Story) {
      const newGame = new Game(player, story);
      dispatch({ type: 'START_GAME', game: newGame });
    }

    useEffect(() => {
      console.log(player);
    }, [player]);

    return (
        <div className="page-layout">
          {selectedButton === null ? <header><h1>Character Selection</h1></header> : null}
            <section className="demo-section">
              
              <div className="button-group">
                
                <button onClick={() => {
                  
                setSelectedButton(CharacterSelect.getBully().type);
                setPlayer(new Player(nameGenerator(), CharacterSelect.getBully()));
                  }}>Bully</button>

                <button onClick={() => {
                  
                  setSelectedButton(CharacterSelect.getSkater().type);
                  setPlayer(new Player(nameGenerator(), CharacterSelect.getSkater()));
                  }}>Skater</button>

                <button onClick={() => {
                  
                  setPlayer(new Player(nameGenerator(), CharacterSelect.getFireworker()));
                  setSelectedButton(CharacterSelect.getFireworker().type);
                  }}>Fireworker</button>
              </div>
            </section>   

            <main>
            {selectedButton !== null && (
              <div className="message-box pog-border">
                <section className="pog-glow-yellow">
                  <h2>{selectedButton}</h2>
                  <p>{player?.getArchetype().description}</p>
                </section>

                <OpenCollection />
                
                {player ? <Link to="/game"><button onClick={() => {
                  startGame(player, demoStory);
                }}>Start Game</button></Link> : <button disabled>Start Game</button>}
                <button onClick={() => setSelectedButton(null)}>Close</button>

              </div>
            )}
          </main>
          <footer className="footer-wrapper"><MainMenuButton /></footer>
        </div>
    );

  function OpenCollection() {
    if (isPogCollectionOpen) {
      return <PogCollection player={player} togglePogCollection={togglePogCollection} />;
    } else if (isSlammersCollectionOpen) {
      return <SlammersCollection player={player} toggleSlammersCollection={toggleSlammersCollection} />;
    } else if (isInventoryOpen) {
      return <Inventory player={player!} toggleInventory={toggleInventory} />;
    }

    return <StatusDisplay player={player} 
    togglePogCollection={togglePogCollection} 
    toggleSlammersCollection={toggleSlammersCollection} 
    toggleInventory={toggleInventory} />;
  }
}

function StatusDisplay(
  {player, togglePogCollection, toggleSlammersCollection, toggleInventory}: 
  {player: Player | null, 
    togglePogCollection?: () => void, 
    toggleSlammersCollection?: () => void
    toggleInventory?: () => void
  }
) {

  return (
    <section className="demo-section">
      <section className="demo-section">
              <strong>Starting Stats</strong>
              <div className="status-panel pog-border">
                <div className="status-item">
                  <span className="pog-glow-green">Health:</span>
                  <span className="pog-glow-pink">{player?.getHitpoints()}</span>
                </div>
                <div className="status-item">
                  <span className="pog-glow-green">Pogs:</span>
                  <span className="pog-glow-blue" 
                  onClick={togglePogCollection}>View</span>
                </div>
                <div className="status-item">
                  <span className="pog-glow-green">Slammers:</span>
                  <span className="pog-glow-blue" 
                  onClick={toggleSlammersCollection}>View</span>
                </div>
                <div className="status-item">
                  <span className="pog-glow-green">Inventory:</span>
                  <span className="pog-glow-blue" 
                  onClick={toggleInventory}>View</span>
                </div>
              </div>
            </section>
    </section>
  );
}



export default CharacterSelectScreen;