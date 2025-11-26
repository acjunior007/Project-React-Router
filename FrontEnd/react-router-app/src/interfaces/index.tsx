
export interface IUser {
    email: string;
}

export interface AuthContextType {
    user: IUser | null;
    login: (email: string, password: string) => boolean;
    logout: () => void;
}