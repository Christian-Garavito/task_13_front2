import React, { useContext, useEffect } from 'react';
import ButtonCuerpo from '../components/ButtonCuerpo';





export const TablaTipoContenido = () => {
    return (
        <>
            <div>
                <h1>TablaTipoContenido</h1>
            </div>
            <div className='botones_inicio_contenido' >
                <div className='botones_contenido'>
                    <ButtonCuerpo title={"Volver"} href='/iniciocontenido' />
                    <ButtonCuerpo title={"Crear Tipo Contenido"} href='/crearcontenido' />
                </div>
            </div>
        </>
    );
};