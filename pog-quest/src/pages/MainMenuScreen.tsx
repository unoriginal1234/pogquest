import { Link } from "react-router-dom";
import { useGame } from '../context/GameContext';

function MainMenuScreen() {

    const { state, dispatch } = useGame();
    const game = state.game;

    console.log("Game", game);

    return (
        <div>
            <header>
                <h1>Pog Quest</h1>
                <p className="subtitle pog-glow-blue">A Roguelike Adventure</p>
            </header>
            
            <div className="button-group">
                {/* could make a warning message if there is a game in progress */}
                <Link to="/character-select"><button>New Game</button></Link>
                {game !== null ? 
                <Link to="/game"><button className="pog-glow-blue" 
                    onClick={() => {
                    dispatch({ type: 'SET_GAME', game: game });
                }}>Continue</button></Link> : 
                <button disabled>Continue</button>}
                <Link to="/settings"><button>Settings</button></Link>
            </div>
            
        </div>
    );
}

export default MainMenuScreen;