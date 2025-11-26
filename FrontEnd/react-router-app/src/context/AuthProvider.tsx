import { createContext, useContext, useState } from "react";
import type { AuthContextType, IUser } from "../interfaces";


// Create context with proper typing and default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children } : { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser | null>(null);

    function login(email: string, password: string) {
        // Implement login logic here
        if (email && password) {
            setUser({ email });
            return true
        }
        return false;
    }

    function logout() {
        // Implement logout logic here
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook for using auth context
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

