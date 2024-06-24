import React, { useContext, useEffect } from 'react';
import ButtonCuerpo from '../components/ButtonCuerpo';
import { CarullaList } from '../components/CarullaList';
import { CarullaContext } from '../context/CarullaContext';





export const TablaContenido = () => {
    const { peliculasCarrito } = useContext(CarullaContext);

    return (
        <>
            <div>
                <h1>Tabla Contenido</h1>
            </div>
            <div className='botones_inicio_contenido' >
                <div className='botones_contenido'>
                    <ButtonCuerpo title={"Volver"} href='/iniciocontenido' />
                    <ButtonCuerpo title={"Crear contenido"} href='/crearcontenido' />
                </div>
            </div>
            <dir>
                {/* <CarullaList listaPeliculas={peliculasCarrito} agregar={false} /> */}
            </dir>
        </>
    );
};