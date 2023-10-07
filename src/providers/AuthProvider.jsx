import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
     return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle =() =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

   //observe auth state change
    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log("observing current user inside useeffect",currentUser)
         setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children : PropTypes.node
}

/***
 * 1. Create Context and export it 
 * 2. set provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component  aas children and use in the middle of the provider
 * ***/ 