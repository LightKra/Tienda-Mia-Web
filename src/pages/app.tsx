import React from 'react';
import {Navbar} from '../components/navbar/navbar'
import { RoutesApp } from '../routes/routes';

export const App: React.FC = ()=>{
    return(
        <>  
            <Navbar/>
            <RoutesApp/>
        </>
    )
}