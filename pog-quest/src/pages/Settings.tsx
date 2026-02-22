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
        <div>
            <p>These are the settings</p>
            <p>User: {user?.getUsername()}</p>
            <p>Email: {user?.getEmails()[0]}</p>
            <p>Role: {userRole}</p>
            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
              <legend className="fieldset-legend">Make Admin</legend>
              <label className="label">
                <input type="checkbox" defaultChecked={user?.getRole() === "admin"} className="toggle" onClick={toggleAdmin} />
                Make Admin
              </label>
            </fieldset>
            <Link to="/"><button>Main Menu</button></Link>

           
        </div>
    );
}



export default Settings;