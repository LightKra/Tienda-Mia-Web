import React from "react";
import { useAuth } from "../../hooks/auth";
import { Navigate } from "react-router";
import { AuthRegistration } from "../authRegistration/authRegistration";
import { AuthLogin } from "../authLogin/authLogin";

export const Auth: React.FC = ()=>{
    const {isAuthenticated} = useAuth();
    
    if(isAuthenticated){
        return <Navigate to="/"/>
    }
    
    return(
        <>
           {
            isAuthenticated 
            ? <AuthLogin/>
            : <AuthRegistration/>
           }
        </>
    )
}