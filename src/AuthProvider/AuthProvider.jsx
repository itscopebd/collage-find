import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/Firebase';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)



const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}

    const userInfo = {
        user,
        createUser,
        loginUser
    }

    


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            
        })
        return unsubscribe()
    },[])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>

    )
};

export default AuthProvider;