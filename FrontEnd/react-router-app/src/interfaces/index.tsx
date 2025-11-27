
export interface IUser {
    email: string;
    token?: string;
    role?: string;
}

export interface AuthContextType {
    user: IUser | null;
    login: (token: string, email: string, role: string) => boolean;
    logout: () => void;
}