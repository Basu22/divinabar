import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Header/Header';
import { Contenido } from './Content/Contenido';
/* import { Footer } from './Footer/Footer'; */
import { Panel } from './Admin/Panel';
import { FormAlta } from './Admin/AltaForm/formAlta';
import { FormMod } from './Admin/ModAlta/FormMod';
import { ListadoProductos } from './Admin/ModAlta/ListadoProductos';




export const App = ()=>{


    
    return(
        <>
        <BrowserRouter>    

        <Header />
            <Routes>
                <Route path='/:idCategoria' element={<Contenido/>} />
                <Route path='/PanelAdmin' element={<Panel/>} />
                <Route path='/altaProductos' element={<FormAlta/>}/>
                <Route path='/modificacionProductos' element={<ListadoProductos/>}/>
                <Route path='/modificacionProductos/:idProducto' element={<FormMod/>}/>
                <Route path='*' element={<Navigate to='/cafeteria' />} />
            </Routes>
            
            {/* <Footer /> */}
        </BrowserRouter>




        </>
    )
}

