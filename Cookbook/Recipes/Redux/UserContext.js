// import React, { createContext, useState, useContext } from 'react';
import React, { createContext, useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [stayLoggedIn, setStayLoggedIn] = useState(false);

    useEffect(() => {
        loadStayLoggedIn();
    }, []);

    const loadStayLoggedIn = async () => {
        try {
            const value = await SecureStore.getItemAsync('stayLoggedIn');
            const userData = await SecureStore.getItemAsync('userDetails');
            if (value === 'true' && userData) {
                setStayLoggedIn(true);
                setUser(JSON.parse(userData));
            }
        } catch (error) {
            console.error('Error loading settings', error);
        }
    };

    // return (
    //     <UserContext.Provider value={{ user, setUser }}>
    //         {children}
    //     </UserContext.Provider>
    // );

    return (
        <UserContext.Provider value={{ user, setUser, stayLoggedIn, setStayLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);