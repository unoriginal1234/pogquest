import { useState } from 'react';

export default function togglePogCollection() {
    const [isPogCollectionOpen, setIsPogCollectionOpen] = useState(false);

    function togglePogCollection() {
        setIsPogCollectionOpen(!isPogCollectionOpen);
    }

    return { isPogCollectionOpen, togglePogCollection };
}