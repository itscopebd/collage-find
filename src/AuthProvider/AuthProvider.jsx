import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/Firebase';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const resetUserPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    const gooleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        return signInWithPopup(auth, gooleProvider)
    }


    const userInfo = {
        user,
        createUser,
        loginUser,
        resetUserPassword,
        loginWithGoogle
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)

        })
        return unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>

    )
};

export default AuthProvider;