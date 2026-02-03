import { useState } from 'react';

import ShopClass from '../classes/Shop';
import ItemClass from '../classes/Item';
import PogClass from '../classes/Pog';
import SlammerClass from '../classes/Slammer';
import PlayerClass from '../classes/Player';

import ItemComponent from './ItemComponent';
import PogComponent from './Pog';
import SlammerComponent from './SlammerComponent';

export default function ShopComponent({ shop, player }: { shop: ShopClass, player: PlayerClass }) {

    const gold = player.getGold();

    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [selectedPog, setSelectedPog] = useState<string | null>(null);
    const [selectedSlammer, setSelectedSlammer] = useState<string | null>(null);

    const inventory = shop.getInventory();
    const pogs = shop.getPogs();
    const slammers = shop.getSlammers();

    function handleItemClick(id: string) {
        setSelectedItem(id);
        if (selectedPog) {
            setSelectedPog(null);
        }
        if (selectedSlammer) {
            setSelectedSlammer(null);
        }
    }

    function handlePogClick(id: string) {
        setSelectedPog(id);
        if (selectedItem) {
            setSelectedItem(null);
        }
        if (selectedSlammer) {
            setSelectedSlammer(null);
        }
    }
    
    function handleSlammerClick(id: string) {
        setSelectedSlammer(id);
        if (selectedItem) {
            setSelectedItem(null);
        }
        if (selectedPog) {
            setSelectedPog(null);
        }
    }

    

    return (
        <div>
            <h1>Shop</h1>
            <p>Gold: {gold}</p>
            <p>Items</p>
            <div className="button-group">
                {inventory.map((item: ItemClass) => (
                    <><ItemComponent key={item.getId()} item={item} onClick={() => handleItemClick(item.getId())} isSelected={selectedItem === item.getId()} />
                    <p>Cost: {item.getValue()}</p></>
                ))}
            </div>
            <p>Pogs</p>
            <div className="button-group">
                {pogs.map((pog: PogClass) => (
                    <><PogComponent key={pog.getId()} pog={pog} onClick={() => handlePogClick(pog.getId())} isSelected={selectedPog === pog.getId()} />
                    <p>Cost: {pog.getGold()}</p></>
                ))}
            </div>
            <p>Slammers</p>
            <div className="button-group">
                {slammers.map((slammer: SlammerClass) => (
                    <><SlammerComponent key={slammer.getId()} slammer={slammer} onClick={() => handleSlammerClick(slammer.getId())} isSelected={selectedSlammer === slammer.getId()} />
                    <p>Cost: {slammer.getGold()}</p></>
                ))}
            </div>
        </div>
    );
}