import React from 'react';
import {useAuth} from '../hooks/auth';

export const PanelUser: React.FC = ()=>{
    const {getUser} = useAuth();
    const jsonUser = getUser();
    return(
        <>  
            <h1>PanelUser {jsonUser ? jsonUser.name : ""}</h1>
        </>
    )
}