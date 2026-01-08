import { useState, useEffect } from 'react';
import Player from './classes/Player';
import MainMenu from './classes/controls/MainMenu';
import CharacterSelect from './classes/controls/CharacterSelect';
import nameGenerator from './helperFunctions/nameGenerator'; 
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";


function App() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    console.log(player);
  }, [player]);

  return (
    <>  

        <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Settings />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes> 
          

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

            <section className="demo-section">
              <h2>Text Effects</h2>
              <p className="pog-glow-pink">Hot Pink Glow Text</p>
              <p className="pog-glow-blue">Electric Blue Glow Text</p>
              <p className="pog-glow-green">Lime Green Glow Text</p>
            </section>

            
          </main>
        </div>
    </>
  )
}

export default App
