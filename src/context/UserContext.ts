import User from '../classes/User';

import { createContext } from 'react';

export const UserContext = createContext<User | null>(null);

