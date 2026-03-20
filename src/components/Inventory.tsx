import { useState } from 'react';

import Player from '../classes/Player';
import Item from '../classes/Item';

import ItemComponent from './ItemComponent';

export default function Inventory({player, toggleInventory}: {player: Player, toggleInventory: () => void}) {
    const inventory = player.getInventory();

    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    function handleItemClick(id: string) {
        setSelectedItem(id);
    }

    const item = player?.getInventory().find(i => i.getId() === selectedItem);

    return (
        <section className="demo-section">
            <h2>Inventory</h2>
            <div className="button-group">
                {inventory.map((item: Item) => (
                    <ItemComponent 
                        key={item.getId()} 
                        item={item} 
                        onClick={() => handleItemClick(item.getId())}
                        isSelected={selectedItem === item.getId()}/>
                ))} 
            </div>
            {selectedItem && <ItemDetails item={item} />}
            <button onClick={toggleInventory}>Back</button>
        </section>
    );
}

function ItemDetails({item}: {item: Item | undefined}) {

    const name = item?.getName();
    const description = item?.getDescription();

    if (!item) {
        return null;
    }

    return (
        <div className="item-details demo-section">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}