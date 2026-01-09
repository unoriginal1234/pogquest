import { useState, useEffect } from 'react';
import Player from '../classes/Player';

import CharacterSelect from '../classes/controls/CharacterSelect';
import nameGenerator from '../helperFunctions/nameGenerator'; 

function CharacterSelectScreen() {

    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [player, setPlayer] = useState<Player | null>(null);

    useEffect(() => {
      console.log(player);
    }, [player]);

    return (
        <div>
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
              
            </section>

                     
          </main>
        </div>
    );
}

export default CharacterSelectScreen;