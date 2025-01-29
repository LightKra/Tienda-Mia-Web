import React from "react";
import { useState } from "react";
import { login } from "../services/auth.services";
import { useAuth } from "../hooks/auth";


export const Login: React.FC = ()=>{
    const [infoResponse, setinfoResponse] = useState("");
    const {isAuthenticated, saveUserData } = useAuth();

    const handlerSubmit = async (event: React.FormEvent<HTMLFormElement> | undefined)=>{
        if(!event){
            return;
        }
        event.preventDefault();
        const target = event.target as HTMLFormElement;
        try{  
            const formData = new FormData(target);
            const userData = await login(formData);
            if(userData){
                saveUserData(userData[0].user, userData[1].token, userData[2].refreshToken);
            }
        }catch(error){
            if(error instanceof Error){
                console.error(error.message);
                setinfoResponse(error.message);
            }else{
                console.error('Unknown error occurred');
                setinfoResponse('An unknown error occurred');
            }
        }
    }
    
    return(
        <>  
            {infoResponse ? <h3>{infoResponse}</h3> : ""}
            <form onSubmit={handlerSubmit}>

            </form>
        </>
    )
}