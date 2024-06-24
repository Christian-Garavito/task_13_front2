import React, { useContext, useEffect } from 'react';
import ButtonCuerpo from '../components/ButtonCuerpo';





export const InicioContenido = () => {
    return (
        <>
            <div>
                <div>
                    <h1>Inicio Contenido</h1>
                </div>
                <div className='botones_inicio_contenido' >
                    <div className='botones_contenido'>
                        <ButtonCuerpo title={"Volver"} href='/' />
                        <ButtonCuerpo title={"Tabla de Contenido"} href='/tablacontenido' />
                        <ButtonCuerpo title={"Tabla Tipo de Cotenido"} href='/tablatipocontenido' />
                        <ButtonCuerpo title={"Tabla Tipo de Genero"} href='/tablatipogeneros' />
                    </div>
                </div>
            </div>
        </>
    );
};