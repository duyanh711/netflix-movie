import { createContext, useContext, useEffect, useState } from "react"
import { auth, db } from '../firebase'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext()

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState({})

    function SignUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    }

    function SignIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubcribe()
        }
    })


    return (
        <AuthContext.Provider value={{ SignUp, SignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}