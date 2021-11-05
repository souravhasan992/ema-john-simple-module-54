import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);

    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    //observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user);
            }
        });
        return unsubscribe;
    }, [])

    return {
        user,
        error,
        handleGoogleSignIn,
        logOut
    }
}

export default useFirebase;