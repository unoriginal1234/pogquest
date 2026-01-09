import { Link } from "react-router-dom";
import { useState } from 'react';
import MainMenu from '../classes/controls/MainMenu';

function MainMenuScreen() {

    const [selectedButton, setSelectedButton] = useState<string | null>(null);

    return (
        <div>
            <header>
            <h1>Welcome to Pog Quest</h1>
            <p className="subtitle pog-glow-blue">A Roguelike Adventure</p>
          </header>
            <h1></h1>
            <p>lets go</p>
            
            <Link to="/character-select"><button>Start Game</button></Link>
            <button>Continue</button>
            <Link to="/settings"><button>Settings</button></Link>
            <button>Quit</button>

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

        </div>
    );
}

export default MainMenuScreen;