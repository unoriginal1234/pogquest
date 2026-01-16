import './App.css'
import { Routes, Route } from "react-router-dom";

import CharacterSelectScreen from './pages/CharacterSelectScreen';
import Settings from "./pages/Settings";

import MainMenuScreen from './pages/MainMenuScreen';
import GameScreen from './pages/GameScreen';

import { UserProvider } from './context/UserProvider';
import { GameProvider } from './context/GameProvider';

function App() {
 
  return (
    <UserProvider>  
      <GameProvider>

        <div className="app-container">
          <Routes>
            <Route path="/" element={<MainMenuScreen />} />
            
            <Route path="/settings" element={<Settings/>} />

            <Route path="/character-select" element={<CharacterSelectScreen/>} />
            
            <Route path="/game" element={<GameScreen />}/>
            
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes> 
        </div>
      </GameProvider>
    </UserProvider>
  )
}


export default App
