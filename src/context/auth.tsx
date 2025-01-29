import React, { createContext } from "react";
import { useAuthProvider } from "../hooks/auth.provider.hook";
import { AuthContextType } from "../types/context";

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    getAccessToken: ()=> undefined,
    saveUserData: ()=> {},
    getRefreshToken: ()=> null,
    checkAuth: ()=> { return new Promise<void>(()=>{})},
    deleteUserData: ()=>{},
    getUser: ()=> undefined,
    isLoading: ()=> false,
    logoutUser: ()=>{return new Promise<void>(()=>{})}
});

export const AuthProvider:React.FC<{ children: React.ReactNode }> = ({children})=>{
    const {isAuthenticated, getAccessToken, saveUserData, getRefreshToken, checkAuth, deleteUserData, getUser, logoutUser, isLoading} = useAuthProvider();

    return(
        <AuthContext.Provider 
            value={
                {
                    isAuthenticated,
                    getAccessToken,
                    saveUserData,
                    getRefreshToken,
                    checkAuth,
                    deleteUserData,
                    getUser,
                    logoutUser
                }
            }
        >
            {isLoading ? <h2>Loading...</h2> : children}
        </AuthContext.Provider>
    )
}
