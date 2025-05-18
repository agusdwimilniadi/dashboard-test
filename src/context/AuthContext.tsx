import { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    token: string | null;
    setToken: (token: string | null) => void;
    isLoading: boolean

};
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    token: null,
    setToken: () => { },
    isLoading: true
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setTokenState] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        // example setting token token
        const saved = "exampletoken";
        setTokenState(saved);
        setIsLoading(false);
    }, []);

    const setToken = (value: string | null) => {
        setTokenState(value);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!token, token, setToken, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
