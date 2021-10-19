import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
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
        setError,
        isLoading,
        setIsLoading

    }
}

export default useFirebase;