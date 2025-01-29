import React from "react";
import { useState } from "react";
import { createUser } from "../services/users.services.js";

export const useSignup = ()=>{
    const [infoResponse, setInfoResponse] = useState("");

    const handlerSubmit = async (event: React.FormEvent<HTMLElement>)=>{
        event.preventDefault();
        try{
            const target = event.target as HTMLFormElement;
            const formData = new FormData(target);
            await createUser(formData);
            target.reset();
            setInfoResponse("User created");
        }catch(error){
            if(error instanceof Error){
                setInfoResponse(error.message);
            }else{
                console.error('Unknown error occurred');
            }
        }
    }
    return {infoResponse, setInfoResponse, handlerSubmit}
}