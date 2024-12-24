import { createContext, Suspense, useContext, useState } from "react"

interface IContextValue {
    user: string | null,
    signIn: (arg0: string, arg1: () => void) => void,
    signOut: (arg0: () => void) => void
}

const AuthContext = createContext<IContextValue | null>(null)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState<IContextValue['user']>(localStorage.getItem('user'))

    const signIn = (newUser: string, callback: () => void) => {
        setUser(newUser)
        localStorage.setItem('user', newUser)
        callback()
    }

    const signOut = (callback: () => void) => {
        setUser(null)
        localStorage.removeItem('user')
        callback()
    }

    const value = {
        user,
        signIn,
        signOut
    }

    return(
        <AuthContext.Provider value={value}>
            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
        </AuthContext.Provider>
    )
}