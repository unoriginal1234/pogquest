import { Link } from "react-router-dom";
import { useGame } from '../context/GameContext';

function MainMenuScreen() {

    const { state } = useGame();
    const game = state.game;
    const { dispatch } = useGame();

    return (
        <div>
            <header>
                <h1>Pog Quest</h1>
                <p className="subtitle pog-glow-blue">A Roguelike Adventure</p>
            </header>
            
                <Link to="/character-select"><button>Start Game</button></Link>
                {game !== null ? 
                <Link to="/game"><button className="pog-glow-blue" onClick={() => {
                    dispatch({ type: 'SET_GAME', game: null });
                }}>Continue</button></Link> : 
                <button disabled>Continue</button>}
                <Link to="/settings"><button>Settings</button></Link>
                <button>Quit</button>
            
        </div>
    );
}

export default MainMenuScreen;