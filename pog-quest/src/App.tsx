import { useState, useEffect } from 'react';
import Player from './classes/Player';
import MainMenu from './classes/controls/MainMenu';
import CharacterSelect from './classes/controls/CharacterSelect';
import './App.css'

function App() {
  useEffect(() => {
    const player = new Player('John', CharacterSelect.getSkater());
    console.log(player);
  }, []);

  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  return (
    <div className="app-container">
      <header>
        <h1>Pog Quest</h1>
        <p className="subtitle pog-glow-blue">A Roguelike Adventure</p>
      </header>

      <main>
        {selectedButton !== null && (
          <div className="message-box pog-border">
            <p className="pog-glow-yellow">
              You clicked: <strong>{selectedButton}</strong>
            </p>
            <button onClick={() => setSelectedButton(null)}>Close</button>
          </div>
        )}

        <section className="demo-section">
          <h2>Action Buttons</h2>
          <div className="button-group">
            <button onClick={() => {
              setSelectedButton('start');
              MainMenu.startGame();
            }}>
              Start Game
            </button>
            <button onClick={() => {
              setSelectedButton('continue');
              MainMenu.continueGame();
            }}>
              Continue
            </button>
            <button onClick={() => {
              setSelectedButton('settings');
              MainMenu.settingsGame();
            }}>
              Settings
            </button>
            <button onClick={() => {
              setSelectedButton('quit');
              MainMenu.quitGame();
            }}>
              Quit
            </button>
          </div>
        </section>

        <section className="demo-section">
          <h2>Status Display</h2>
          <div className="status-panel pog-border">
            <div className="status-item">
              <span className="pog-glow-green">Health:</span>
              <span className="pog-glow-pink">100/100</span>
            </div>
            <div className="status-item">
              <span className="pog-glow-green">Level:</span>
              <span className="pog-glow-blue">1</span>
            </div>
            <div className="status-item">
              <span className="pog-glow-green">Pogs:</span>
              <span className="pog-glow-blue">0</span>
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

        <section className="demo-section">
          <h2>Character Selection</h2>
          <div className="button-group">
            <button onClick={() => {
              console.log(CharacterSelect.getBully());
             setSelectedButton(CharacterSelect.getBully().type);
              }}>Bully</button>
            <button onClick={() => {
              console.log(CharacterSelect.getSkater());
              setSelectedButton(CharacterSelect.getSkater().type);
              }}>Skater</button>
            <button onClick={() => {
              console.log(CharacterSelect.getFireworker());
              setSelectedButton(CharacterSelect.getFireworker().type);
              }}>Fireworker</button>
          </div>
        </section>

        <section className="demo-section">
          <h2>Text Effects</h2>
          <p className="pog-glow-pink">Hot Pink Glow Text</p>
          <p className="pog-glow-blue">Electric Blue Glow Text</p>
          <p className="pog-glow-green">Lime Green Glow Text</p>
        </section>

        
      </main>
    </div>
  )
}

export default App
