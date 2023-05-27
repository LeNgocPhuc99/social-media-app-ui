import React from "react";

interface User {
    id: string
    name: string
    email: string
}

type ContextType = {
    user: User | null
    login: () => void
};

export const AuthContext = React.createContext<ContextType>({
    user: null,
    login: () => { }
});

