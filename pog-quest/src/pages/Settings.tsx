import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../App';

function Settings() {
    const user = useContext(UserContext);

    return (
        <div>
            <p>These are the settings</p>
            <p>User: {user?.getUsername()}</p>
            <p>Email: {user?.getEmails()[0]}</p>
            <Link to="/"><button>Main Menu</button></Link>

            <TextEffects />
        </div>
    );
}

function TextEffects() {
    return (
      <section className="demo-section">
        <h2>Text Effects</h2>
        <p className="pog-glow-pink">Hot Pink Glow Text</p>
        <p className="pog-glow-blue">Electric Blue Glow Text</p>
        <p className="pog-glow-green">Lime Green Glow Text</p>
      </section>
    )
  }

export default Settings;