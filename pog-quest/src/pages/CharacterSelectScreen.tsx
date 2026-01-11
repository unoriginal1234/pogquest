import { useState, useEffect } from 'react';
import Player from '../classes/Player';

import CharacterSelect from '../classes/controls/CharacterSelect';
import nameGenerator from '../helperFunctions/nameGenerator'; 
import { Link } from 'react-router-dom';
import PogCollection from '../components/PogCollection';

import demoStory from '../resources/demoStory';
import Story from '../classes/Story';
import Game from '../classes/Game';


function CharacterSelectScreen() {

    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [player, setPlayer] = useState<Player | null>(null);
    const [isPogCollectionOpen, setIsPogCollectionOpen] = useState(false);
    const [game, setGame] = useState<Game | null>(null);

    function togglePogCollection() {
      setIsPogCollectionOpen(!isPogCollectionOpen);
    }

    function startGame(player: Player, story: Story) {
      setGame(new Game(player, story));
    }

    useEffect(() => {
      console.log(player);
    }, [player]);

    useEffect(() => {
      console.log(game);
    }, [game]);

    return (
        <div>
            <section className="demo-section">
              <h1>Character Selection</h1>
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
                {
                  isPogCollectionOpen ? 
                  <PogCollection player={player} togglePogCollection={togglePogCollection} /> : 
                  <StatusDisplay player={player} 
                  togglePogCollection={togglePogCollection} />
                }
                <button onClick={() => setSelectedButton(null)}>Close</button>
                
                {player ? <button onClick={() => {
                  if (player) {
                    startGame(player, demoStory);
                  }
                  else {
                    console.log("No player selected");
                  }
                }}>Start Game</button> : <button disabled>Start Game</button>}
                
              </div>
            )}
          </main>
          
          <section className="demo-section">
            <Link to="/"><button>Main Menu</button></Link> 
            
          </section>
        </div>
    );
}

function StatusDisplay(
  {player, togglePogCollection}: {player: Player | null, togglePogCollection: () => void}
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
                  <span className="pog-glow-green">Level:</span>
                  <span className="pog-glow-blue">{player?.getLevel()}</span>
                </div>
                <div className="status-item">
                  <span className="pog-glow-green">Pogs:</span>
                  <span className="pog-glow-blue" onClick={togglePogCollection}>View</span>
                </div>
                <div className="status-item">
                  <span className="pog-glow-green">Slammers:</span>
                  <span className="pog-glow-blue">0</span>
                </div>
                <div className="status-item">
                  <span className="pog-glow-green">Inventory:</span>
                  <span className="pog-glow-blue">Link</span>
                </div>
              </div>
            </section>
    </section>
  );
}

export default CharacterSelectScreen;