import { useState } from 'react';
import Game from '../classes/Game';
import { GameContext } from './GameContext';

export function GameProvider({ children }: { children: React.ReactNode }) {
    const [game] = useState<Game | null>(null);

    return (
        <GameContext.Provider value={game}>
            {children}
        </GameContext.Provider>
    );
}