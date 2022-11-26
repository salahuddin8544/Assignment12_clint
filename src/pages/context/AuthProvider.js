import React,{createContext, useState,useEffect} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,updateProfile} from 'firebase/auth'
import app from './../../firebase/firebase.config';
const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)
    const createUser = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser =(userInfo)=>{
        return  updateProfile(auth.currentUser,userInfo)
      }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
                setLoading(false)
               console.log(currentUser);
               setUser(currentUser)
           })
           return()=>{
               unsubscribe()
           }
    },[])
    const authInfo ={
        user,
        createUser,
        loading,
        login,
        logOut,
        updateUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;