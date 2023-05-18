import React, { Children, createContext } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth"
import app from '../Firebase/firebase.confiq';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
 
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    const handleLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
  
    const handleSignUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
 
    const handleLoginWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }
    
    const handleUpdatUserProfile = ( user,name, photo)=>{
        
        return updateProfile(user,{
            displayName:name, photoURL:photo
        })
        .then(()=>{

        })
        .catch(error =>{
          console.log(error);
        })
    }
    const AuthInfo = {
        handleLogin,
        handleSignUp,
        handleLoginWithGoogle,
        handleUpdatUserProfile
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;