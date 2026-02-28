import { useState } from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';

import { UserContext } from '../context/UserContext';
import User from '../classes/User';

function Settings() {
    // TO DO: add a way to change the user's role
    const user = useContext<User | null>(UserContext);

    const [userRole, setUserRole] = useState<"user" | "admin">(user?.getRole() || "user");

    function toggleAdmin() {
        user?.setRole(user?.getRole() === "admin" ? "user" : "admin");
        setUserRole(user?.getRole() || "user");
    }

    return (
        <div className="settings-container">
            <h1>Settings</h1>
            
            <div className="settings-info">
                <p><span className="pog-glow-green">User:</span> <span className="pog-glow-pink">{user?.getUsername()}</span></p>
                <p><span className="pog-glow-green">Email:</span> <span className="pog-glow-blue">{user?.getEmails()[0]}</span></p>
                <p><span className="pog-glow-green">Role:</span> <span className="pog-glow-pink">{userRole}</span></p>
            </div>

            <fieldset className="settings-fieldset">
                <legend className="settings-legend">Admin Mode</legend>
                <label className="settings-toggle-label">
                    <input 
                        type="checkbox" 
                        defaultChecked={user?.getRole() === "admin"} 
                        className="settings-toggle" 
                        onClick={toggleAdmin} 
                    />
                    <span className="settings-toggle-slider"></span>
                    <span>Enable Admin</span>
                </label>
            </fieldset>

            <Link to="/"><button>Main Menu</button></Link>
        </div>
    );
}



export default Settings;