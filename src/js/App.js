import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Header/Header';
import { Contenido } from './Contenido/Contenido';
import { Footer } from './Footer/Footer';
import { PanelAdmin } from './Admin/panelAdmin';


export const App = ()=>{

    return(
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path='/:idCategoria' element={<Contenido/>} />
                <Route path='/admin' element={<PanelAdmin/>} />
                <Route path='*' element={<Navigate to='/cafeteria' />} />
            </Routes>
            
            <Footer />
        </BrowserRouter>
    )
}

