import React from 'react';
import Item from '../classes/Item';

interface ItemComponentProps {
    item: Item;
    isSelected?: boolean;
    onClick?: () => void;
}

const ItemComponent: React.FC<ItemComponentProps> = ({item, isSelected, onClick}) => {
    return (
        <div 
            className={`item-component ${isSelected ? 'selected' : ''}`} 
            onClick={onClick}
        >
            <h3>{item.getName()}</h3>
            <span className="item-icon" aria-hidden="true" />
        </div>
    );
};

export default ItemComponent;