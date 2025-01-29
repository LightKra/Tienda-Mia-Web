import { useContext } from "react"
import { AuthContext } from "../context/auth"

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useCat must be used within a CartProvider");
    }
    return context;
}