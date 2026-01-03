import { useState } from 'react';
import './App.css'

function App() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  return (
    <div className="app-container">
      <header>
        <h1>Pog Quest</h1>
        <p className="subtitle pog-glow-blue">A 90s-Inspired Roguelike Adventure</p>
      </header>

      <main>
      <section className="demo-section">
        <p>Pog</p>
        <p>Attack: 10</p>
        <p>Defense: 5</p>
        <p>Level: 1</p>
      </section>
        <section className="demo-section">
          <h2>Action Buttons</h2>
          <div className="button-group">
            <button onClick={() => setSelectedButton('start')}>
              Start Game
            </button>
            <button onClick={() => setSelectedButton('continue')}>
              Continue
            </button>
            <button onClick={() => setSelectedButton('settings')}>
              Settings
            </button>
            <button onClick={() => setSelectedButton('quit')}>
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
              <span className="pog-glow-green">Score:</span>
              <span className="pog-glow-blue">0</span>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h2>Game Controls</h2>
          <div className="button-group">
            <button>Move Up</button>
            <button>Move Down</button>
            <button>Move Left</button>
            <button>Move Right</button>
          </div>
        </section>

        <section className="demo-section">
          <h2>Text Effects</h2>
          <p className="pog-glow-pink">Hot Pink Glow Text</p>
          <p className="pog-glow-blue">Electric Blue Glow Text</p>
          <p className="pog-glow-green">Lime Green Glow Text</p>
        </section>

        {selectedButton && (
          <div className="message-box pog-border">
            <p className="pog-glow-yellow">
              You clicked: <strong>{selectedButton}</strong>
            </p>
            <button onClick={() => setSelectedButton(null)}>Close</button>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
