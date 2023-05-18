import React, { Children, createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../Firebase/firebase.confiq';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]= useState(true);
 
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    const handleLogin = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
  
    const handleSignUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
 
    const handleLoginWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    
    const handleUpdatUserProfile = ( user,name, photo)=>{
        setLoading(true)
        return updateProfile(user,{
            displayName:name, photoURL:photo
        })
        .then(()=>{
                setLoading(false)
        })
        .catch(error =>{
          console.log(error);
        })
    }


    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, currentUser =>{
                   setUser(currentUser);
                   setLoading(false);
        })
        return ()=> unsubcribe()
    },[]);

    const handleLogOut = ()=>{
        
        return signOut(auth)
        .then(()=>{

        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const AuthInfo = {
        handleLogin,
        handleSignUp,
        handleLoginWithGoogle,
        handleUpdatUserProfile,
        user,
        loading,
        handleLogOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;