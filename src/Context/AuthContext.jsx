import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken != null) {
          setToken(savedToken);
        }}, [])
  return (
    <AuthContext.Provider value={
        {token, setToken}
    }>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider