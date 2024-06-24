// Importar React desde 'react'
import React from 'react';
// Importar Navigate, Route y Routes desde 'react-router-dom' para definir las rutas de la aplicación
import { Navigate, Route, Routes } from 'react-router-dom';
// Importar HomePage, PokemonPage y SearchPage desde './pages' para definir las páginas de la aplicación
import { HomePage, Carrito} from './pages';

// Componente que define las rutas de la aplicación
export const AppRouter = () => {
    return (
        <Routes>
            {/* Ruta base que muestra la barra de navegación en todas las páginas */}
            <Route path='/'>
                {/* Ruta de inicio que muestra la página de inicio */}
                <Route index element={<HomePage />} />
                {/* Ruta para mostrar detalles de un Pokémon por ID */}
                <Route path='carrito' element={<Carrito />} />
            </Route>

            {/* Ruta de redireccionamiento para rutas no encontradas */}
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};


