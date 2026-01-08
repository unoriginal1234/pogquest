import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <header>
            <h1>Welcome to Pog Quest</h1>
            <p className="subtitle pog-glow-blue">A Roguelike Adventure</p>
          </header>
            <h1></h1>
            <p>lets go</p>
            
            <button>Start Game</button>
            <button>Continue</button>
            <Link to="/about"><button>Settings</button></Link>
            <button>Quit</button>
        </div>
    );
}

export default Home;