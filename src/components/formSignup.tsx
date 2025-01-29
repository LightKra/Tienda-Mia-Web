import React from 'react';
import { Navigate } from 'react-router';
import { useSignup } from '../hooks/signup';
import { useAuth } from '../hooks/auth.js';

export const Singup: React.FC = ()=>{
    const {infoResponse, handlerSubmit} = useSignup();
    const {isAuthenticated} = useAuth(); 

    if(infoResponse === "User created"){
        return (<Navigate to="/" />);
    }
   
    return(
        <div>
            {infoResponse ? <div>Alerta</div> : ""}
        </div>
    )
}