import { Link } from "react-router-dom";

export default function GameMenuButtons({getMenuButtonSelection}: {getMenuButtonSelection: (selection: string) => void}) {

    return (
        <section className="demo-section">
            <h2>Game Menu</h2>
            <div className="button-group">
                <button onClick={() => getMenuButtonSelection("pog-collection")}>
                    Pogs</button>
                <button onClick={() => getMenuButtonSelection("slammers")}>
                    Slammers</button>
                <button onClick={() => getMenuButtonSelection("inventory")}>
                    Inventory</button>
                <button onClick={() => getMenuButtonSelection("stats")}>
                    Stats</button>
                
            </div>
            <footer className="footer-wrapper">
                <Link to="/"><button>Main Menu</button></Link>
            </footer>
        </section>
    );
}
