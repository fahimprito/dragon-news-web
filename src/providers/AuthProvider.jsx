import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('current User', currentUser);
            setUser(currentUser);
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        loginUser,
        logOutUser,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
};

export default AuthProvider;