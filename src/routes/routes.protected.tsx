import React from "react";
import { Navigate} from "react-router";
import { useAuth } from "../hooks/auth.js";

export const ProtectedRoute: React.FC<{children: React.ReactNode}> = ({children})=>{
    const auth = useAuth()
    return (auth.isAuthenticated ? children : <Navigate to="/"/>)
}