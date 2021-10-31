import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react";
import initializeAuthentication from "../Componennts/Firebase/FirebaseConfig";

initializeAuthentication()
const auth = getAuth();
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})
    // const [isAdmin, setIsadmin] = useState(null)

    // const [adminPass,setAdminPass] = useState("")

    const googleSignin = () => {
       return  signInWithPopup(auth, googleProvider)
           
    }
    const manulaySignin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
           
    }
   
    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
            setIsLoading(false)
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe
    }, [])
    return {
        googleSignin,
        user,
        manulaySignin,
        logout,
        setUser,
        setIsLoading,
        isLoading


    }
}

export default useFirebase