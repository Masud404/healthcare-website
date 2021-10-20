import { useEffect, useState } from "react";
import firebaseAuthentication from "../Component/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";



firebaseAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);


    const auth = getAuth();
    // signin google provider
    const signInUsignGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setLoading(false))
    }
    // email and password provider
    const handleNameChange = e => {
        setName(e.target.value)
    }


    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    // display user name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    // registration
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long')
            return;
        }

        // set email and password for login

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('')
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })

    }

    // login
    const handleLogin = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long')
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
        })
        return () => unsubscribed;
    }, [auth]);
    // logout function
    const logout = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false))
    }

    return {
        user,
        logout,
        signInUsignGoogle,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        handleLogin,
        handleNameChange,
        loading
    }
}

export default useFirebase;