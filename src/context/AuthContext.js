import { createContext, useContext, useEffect, useState } from "react"
import { auth } from '../firebase'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'


const AuthContext = createContext()

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState({})

    function SignUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
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