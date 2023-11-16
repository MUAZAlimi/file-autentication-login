import {createContext,  useState } from "react";

const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({})
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false)

    return (
        <AuthContext.Provider value={{auth, setAuth, persist, setPersist}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext