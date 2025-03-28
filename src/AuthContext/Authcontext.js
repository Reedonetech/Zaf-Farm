import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const url = "https://zaf-farm.onrender.com/admin/regsiter-worker";

   
    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem('token');
        return storedToken ? storedToken : null;
    });

    
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token); 
        } else {
            localStorage.removeItem('token'); 
        }
    }, [token]); 

    const contextValue = { url, token };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
