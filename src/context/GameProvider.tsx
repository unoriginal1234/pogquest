import { useReducer } from 'react';
import { GameContext } from './GameContext';
import type { GameAction, GameState } from './GameContext';

const initialState: GameState = {
  game: null,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return { game: action.game };
    case 'SET_GAME':
      return { game: action.game };
    case 'END_GAME':
      return { game: null };
    default:
      return state;
  }
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}