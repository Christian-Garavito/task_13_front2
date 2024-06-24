// Importar React desde 'react'
import React from 'react';
// Importar Navigate, Route y Routes desde 'react-router-dom' para definir las rutas de la aplicación
import { Navigate, Route, Routes } from 'react-router-dom';
// Importar HomePage, PokemonPage y SearchPage desde './pages' para definir las páginas de la aplicación
import { HomePage, InicioContenido, TablaContenido, TablaTipoContenido, TablaTipoGeneros, CrearContenido } from './pages';

// Componente que define las rutas de la aplicación
export const AppRouter = () => {
    return (
        <Routes>
       
            <Route path='/'>
                <Route index element={<HomePage />} />
                <Route path='iniciocontenido' element={<InicioContenido />} />
                <Route path='tablacontenido' element={<TablaContenido />} />
                <Route path='tablatipocontenido' element={<TablaTipoContenido />} />
                <Route path='tablatipogeneros' element={<TablaTipoGeneros />} />
                <Route path='crearcontenido' element={<CrearContenido />}/>       
            </Route>

          
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};


