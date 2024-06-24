import React, { useContext, useEffect } from 'react';
import ButtonCuerpo from '../components/ButtonCuerpo';





export const TablaTipoGeneros = () => {
    return (
        <>
            <div>
                <h1>Tabla Tipo Generos</h1>
            </div>
            <div className='botones_inicio_contenido' >
                <div className='botones_contenido'>
                    <ButtonCuerpo title={"Volver"} href='/iniciocontenido' />
                    <ButtonCuerpo title={"Crear Tipo Genero"} href='/crearcontenido' />
                </div>
            </div>
        </>
    );
};