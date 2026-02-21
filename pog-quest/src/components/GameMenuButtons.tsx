import PogsMenuItem from '../icons/PogsMenuItem';
import SlammersMenuItem from '../icons/SlammerMenuItem';
import InventoryMenuItem from '../icons/InventoryMenuItem';
import StatsMenuItem from '../icons/StatsMenuItem';

export default function GameMenuButtons({getMenuButtonSelection}: {getMenuButtonSelection: (selection: string) => void}) {

    return (
        <nav className="game-menu-bar">
            <button
                className="menu-icon-btn"
                onClick={() => getMenuButtonSelection("pog-collection")}
                aria-label="Pogs"
                title="Pogs"
            >
                <PogsMenuItem />
            </button>
            <button
                className="menu-icon-btn"
                onClick={() => getMenuButtonSelection("slammers")}
                aria-label="Slammers"
                title="Slammers"
            >
                <SlammersMenuItem />
            </button>
            <button
                className="menu-icon-btn"
                onClick={() => getMenuButtonSelection("inventory")}
                aria-label="Inventory"
                title="Inventory"
            >
                <InventoryMenuItem />
            </button>
            <button
                className="menu-icon-btn"
                onClick={() => getMenuButtonSelection("stats")}
                aria-label="Stats"
                title="Stats"
            >
                <StatsMenuItem />
            </button>
        </nav>
    );
}
