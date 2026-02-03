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
        <div className="shop-container">
            <div className="shop-header">
                <h1>Shop</h1>
                <div className="gold-display">
                    <span className="gold-icon">🪙</span>
                    <span className="gold-amount">{gold}</span>
                </div>
            </div>

            <section className="shop-section">
                <h2>Items</h2>
                <div className="shop-grid">
                    {inventory.length === 0 ? (
                        <p className="empty-message">No items available</p>
                    ) : (
                        inventory.map((item: ItemClass) => (
                            <div key={item.getId()} className="shop-card">
                                <ItemComponent 
                                    item={item} 
                                    onClick={() => handleItemClick(item.getId())} 
                                    isSelected={selectedItem === item.getId()} 
                                />
                                <div className="price-tag">
                                    <span className="price-icon">🪙</span>
                                    <span>{item.getValue()}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            <section className="shop-section">
                <h2>Pogs</h2>
                <div className="shop-grid">
                    {pogs.length === 0 ? (
                        <p className="empty-message">No pogs available</p>
                    ) : (
                        pogs.map((pog: PogClass) => (
                            <div key={pog.getId()} className="shop-card">
                                <PogComponent 
                                    pog={pog} 
                                    onClick={() => handlePogClick(pog.getId())} 
                                    isSelected={selectedPog === pog.getId()} 
                                />
                                <div className="price-tag">
                                    <span className="price-icon">🪙</span>
                                    <span>{pog.getGold()}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            <section className="shop-section">
                <h2>Slammers</h2>
                <div className="shop-grid">
                    {slammers.length === 0 ? (
                        <p className="empty-message">No slammers available</p>
                    ) : (
                        slammers.map((slammer: SlammerClass) => (
                            <div key={slammer.getId()} className="shop-card">
                                <SlammerComponent 
                                    slammer={slammer} 
                                    onClick={() => handleSlammerClick(slammer.getId())} 
                                    isSelected={selectedSlammer === slammer.getId()} 
                                />
                                <div className="price-tag">
                                    <span className="price-icon">🪙</span>
                                    <span>{slammer.getGold()}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
}