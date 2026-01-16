import { createContext } from 'react';
import Game from '../classes/Game';

export const GameContext = createContext<Game | null>(null);

