import React from 'react';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Main } from '../components/main/main';

export const App: React.FC = ()=>{
    return(
        <>  
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}