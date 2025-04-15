import React from 'react';
import { Route, Routes } from 'react-router';
import { Auth } from '../pages/auth/auth';
import { Home } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard';
import { PanelUser } from '../pages/panelUser';
import { ProtectedRoute } from './routes.protected';
import { ProductSearch } from '../pages/productSearch/productSearch';

export const RoutesApp: React.FC = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search-products' element={<ProductSearch/>}/>
            <Route path='/auth' element={<Auth/>} />
            <Route path='/dashboard' element={
                <ProtectedRoute>
                    <Dashboard/>
                </ProtectedRoute>
                }/>
            <Route path='/paneluser' element={
                <ProtectedRoute>
                    <PanelUser/>
                </ProtectedRoute>
            }/>

        </Routes>
    )
}