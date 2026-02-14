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

    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    // TO DO: refresh the shop when the player buys an item, pog, or slammer
    const [, setRefresh] = useState(0);

    const gold = player.getGold();
    const inventory = shop.getInventory();
    const pogs = shop.getPogs();
    const slammers = shop.getSlammers();

    function handleItemClick(id: string) {
        setOpenMenuId(openMenuId === id ? null : id);
    }

    function handleBuyItem(item: ItemClass) {
        const cost = item.getValue();
        if (gold >= cost) {
            player.setGold(gold - cost);
            player.addItem(item);
            shop.removeItem(item);
            setOpenMenuId(null);
            setRefresh(r => r + 1);
        }
    }

    function handleBuyPog(pog: PogClass) {
        const cost = pog.getGold();
        if (gold >= cost) {
            player.setGold(gold - cost);
            player.addPog(pog);
            shop.removePog(pog);
            setOpenMenuId(null);
            setRefresh(r => r + 1);
        }
    }

    function handleBuySlammer(slammer: SlammerClass) {
        const cost = slammer.getGold();
        if (gold >= cost) {
            player.setGold(gold - cost);
            player.addSlammer(slammer);
            shop.removeSlammer(slammer);
            setOpenMenuId(null);
            setRefresh(r => r + 1);
        }
    }

    function canAfford(cost: number) {
        return gold >= cost;
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
                            <div key={item.getId()} className="shop-card relative">
                                <ItemComponent 
                                    item={item} 
                                    onClick={() => handleItemClick(item.getId())} 
                                    isSelected={openMenuId === item.getId()} 
                                />
                                <div className="price-tag">
                                    <span className="price-icon">🪙</span>
                                    <span>{item.getValue()}</span>
                                </div>
                                {openMenuId === item.getId() && (
                                    <div 
                                        className="menu menu-sm rounded-box bg-base-200 shadow-lg absolute left-0 mt-2 z-20 p-2"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            className="btn btn-ghost btn-sm justify-start"
                                            onClick={() => handleBuyItem(item)}
                                            disabled={!canAfford(item.getValue())}
                                        >
                                            Buy
                                        </button>
                                    </div>
                                )}
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
                            <div key={pog.getId()} className="shop-card relative">
                                <PogComponent 
                                    pog={pog} 
                                    onClick={() => handleItemClick(pog.getId())} 
                                    isSelected={openMenuId === pog.getId()} 
                                    // need to add isFlippedUp
                                    isFlippedUp={false}
                                />
                                <div className="price-tag">
                                    <span className="price-icon">🪙</span>
                                    <span>{pog.getGold()}</span>
                                </div>
                                {openMenuId === pog.getId() && (
                                    <div 
                                        className="menu menu-sm rounded-box bg-base-200 shadow-lg absolute left-0 mt-2 z-20 p-2"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            className="btn btn-ghost btn-sm justify-start"
                                            onClick={() => handleBuyPog(pog)}
                                            disabled={!canAfford(pog.getGold())}
                                        >
                                            Buy
                                        </button>
                                    </div>
                                )}
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
                            <div key={slammer.getId()} className="shop-card relative">
                                <SlammerComponent 
                                    slammer={slammer} 
                                    onClick={() => handleItemClick(slammer.getId())} 
                                    isSelected={openMenuId === slammer.getId()} 
                                />
                                <div className="price-tag">
                                    <span className="price-icon">🪙</span>
                                    <span>{slammer.getGold()}</span>
                                </div>
                                {openMenuId === slammer.getId() && (
                                    <div 
                                        className="menu menu-sm rounded-box bg-base-200 shadow-lg absolute left-0 mt-2 z-20 p-2"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            className="btn btn-ghost btn-sm justify-start"
                                            onClick={() => handleBuySlammer(slammer)}
                                            disabled={!canAfford(slammer.getGold())}
                                        >
                                            Buy
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
}