import { useContext , createContext , useEffect,useState} from "react";
import { GoogleAuthProvider , signInWithPopup, onAuthStateChanged,signOut} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth,db } from "./firebase";

export const AuthContext = createContext();

export const AuthContextProvider =({children}) =>{
   const[user,setUser]=useState({});
    const googleSignIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider);
        
    };

    
    const logOut= () =>{
        signOut(auth)
    }

    return  (
        <AuthContext.Provider value={{googleSignIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth =() =>{
    return useContext(AuthContext);
}
