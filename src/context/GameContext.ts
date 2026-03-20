import { createContext, useContext } from 'react';
import Game from '../classes/Game';

export type GameState = {
  game: Game | null;
};

export type GameAction =
  | { type: 'START_GAME'; game: Game }
  | { type: 'SET_GAME'; game: Game | null }
  | { type: 'END_GAME' };

export type GameContextValue = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};

export const GameContext = createContext<GameContextValue | null>(null);

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}