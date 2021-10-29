import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const allContex = useFirebase()
    return (
        <AuthContext.Provider value ={allContex}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;