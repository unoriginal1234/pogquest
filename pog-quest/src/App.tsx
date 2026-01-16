import CharacterSelectScreen from './pages/CharacterSelectScreen';
// import nameGenerator from './helperFunctions/nameGenerator'; 
import './App.css'
import { Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import MainMenuScreen from './pages/MainMenuScreen';
import GameScreen from './pages/GameScreen';
import { UserProvider } from './context/UserProvider';
// import Game from './classes/Game';

// const GameContext = createContext<Game | null>(null);

// const [game, setGame] = useState<Game | null>(null);

function App() {
 
  return (
    <UserProvider>  
      {/* <GameContext.Provider value={game}> */}

        <div className="app-container">
        <Routes>
          <Route path="/" element={<MainMenuScreen />} />
          
          <Route path="/settings" element={<Settings/>} />

          <Route path="/character-select" element={<CharacterSelectScreen/>} />
          
          <Route path="/game" element={<GameScreen />}/>

          
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes> 
        </div>
        {/* </GameContext.Provider> */}
    </UserProvider>
  )
}


export default App
