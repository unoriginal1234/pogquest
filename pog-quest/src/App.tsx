import { useState, createContext } from 'react';
import CharacterSelectScreen from './pages/CharacterSelectScreen';
// import nameGenerator from './helperFunctions/nameGenerator'; 
import './App.css'
import { Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import User from './classes/User';
import MainMenuScreen from './pages/MainMenuScreen';

const UserContext = createContext<User | null>(null);
// Export UserContext so other components can import it
export { UserContext };

function App() {
 
  // User state management
  const tempUser = new User("temp", "temp", ["temp@temp.com"]);
  const [user, setUser] = useState<User | null>(tempUser);

  return (
    <UserContext.Provider value={user}>  

        <div className="app-container">
        <Routes>
          <Route path="/" element={<MainMenuScreen />} />
          
          <Route path="/settings" element={<Settings/>} />

          <Route path="/character-select" element={<CharacterSelectScreen/>} />
          
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes> 
        </div>
    </UserContext.Provider>
  )
}



export default App
