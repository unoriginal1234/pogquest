import { useState } from 'react';

import User from '../classes/User';

import { UserContext } from './UserContext';

const tempUser = new User("temp", "temp", ["temp@temp.com"]);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user] = useState<User | null>(tempUser);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}


