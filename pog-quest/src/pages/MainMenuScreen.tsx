import { Link } from "react-router-dom";

function MainMenuScreen() {

    return (
        <div>
            <header>
                <h1>Pog Quest</h1>
                <p className="subtitle pog-glow-blue">A Roguelike Adventure</p>
            </header>
            
                <Link to="/character-select"><button>Start Game</button></Link>
                <button>Continue</button>
                <Link to="/settings"><button>Settings</button></Link>
                <button>Quit</button>
            
        </div>
    );
}

export default MainMenuScreen;