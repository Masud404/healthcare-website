import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

// useauth function
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;