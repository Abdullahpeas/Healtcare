import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [error, setError] = useState("")


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])



    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            })
    }



    const handleUserRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)


    }




    const handleUserLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }





    return {
        user,
        signInUsingGoogle,
        logOut,
        handleUserRegister,
        handleUserLogin,
        setName,
        setUserName,
        error,
        setError

    }
}

export default useFirebase;