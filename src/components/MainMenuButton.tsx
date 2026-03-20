import { Link } from "react-router-dom";

export default function MainMenuButton() {

    return (
        <section className="demo-section">
            <Link to="/"><button>Main Menu</button></Link> 
        </section>
    );
}