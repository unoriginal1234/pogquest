import { Link } from "react-router-dom";

export default function GameMenuButtons() {
    return (
        <section className="demo-section">
            <h2>Game Menu</h2>
            <div className="button-group">
                <Link to="/"><button>Main Menu</button></Link>
                <button disabled>Pog Collection</button>
                <button disabled>Inventory</button>
            </div>
        </section>
    );
}
