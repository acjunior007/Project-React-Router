
import { createContext, useContext, useState} from 'react';
    import type { AuthContextType, IUser } from '../interfaces';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children } : { children: React.ReactNode }) {
    const [user, setUser] = useState<IUser | null>(
        JSON.parse(localStorage.getItem("user") || "null")
    ); 

    function login(token: string, email: string, role: string) {
        // Implement login logic here
        if (email) {
            const userData = { token, email, role };
            localStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);
            return true
        }
        return false;
    }

    function logout() {
        // Implement logout logic here
        localStorage.removeItem("user");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}