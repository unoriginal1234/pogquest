import PogsMenuItem from '../icons/PogsMenuItem';
import SlammersMenuItem from '../icons/SlammerMenuItem';
import InventoryMenuItem from '../icons/InventoryMenuItem';
import StatsMenuItem from '../icons/StatsMenuItem';

export default function GameMenuButtons({getMenuButtonSelection}: {getMenuButtonSelection: (selection: string) => void}) {

    return (
        <section className="demo-section">
            <h2>Game Menu</h2>
            <div className="button-group">
                <button onClick={() => getMenuButtonSelection("pog-collection")}>
                    <PogsMenuItem />
                    Pogs</button>
                <button onClick={() => getMenuButtonSelection("slammers")}>
                    <SlammersMenuItem />
                    Slammers</button>
                <button onClick={() => getMenuButtonSelection("inventory")}>
                    <InventoryMenuItem />
                    Inventory</button>
                <button onClick={() => getMenuButtonSelection("stats")}>
                    <StatsMenuItem />
                    Stats</button>
                
            </div>
            
        </section>
    );
}
