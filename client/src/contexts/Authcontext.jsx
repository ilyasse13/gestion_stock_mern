import { useState, useEffect, createContext, useContext } from 'react';

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
});

export const ContextProvider = ({ children }) => {
    // Retrieve user and token from session storage
    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem('user');
        // Check if user is present and if it has expired
        return storedUser ? JSON.parse(storedUser) : {};
    });

    const [token, _setToken] = useState(() => {
        const storedToken = sessionStorage.getItem('ACCESS_TOKEN');
        // Check if the token is still valid (not expired)
        const expirationTime = sessionStorage.getItem('TOKEN_EXPIRATION');
        const isExpired = expirationTime && new Date() > new Date(expirationTime);
        
        // Remove expired token and return null
        if (isExpired) {
            sessionStorage.removeItem('ACCESS_TOKEN');
            sessionStorage.removeItem('TOKEN_EXPIRATION');
            return null;
        }

        return storedToken;
    });

    // Update session storage when user changes
    useEffect(() => {
        sessionStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            sessionStorage.setItem('ACCESS_TOKEN', token);
            // Set token expiration time to 24 hours
            const expirationTime = new Date();
            expirationTime.setHours(expirationTime.getHours() + 24);
            sessionStorage.setItem('TOKEN_EXPIRATION', expirationTime);
        } else {
            sessionStorage.removeItem('ACCESS_TOKEN');
            sessionStorage.removeItem('TOKEN_EXPIRATION');
        }
    };

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
