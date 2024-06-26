import React, { useContext, useEffect } from 'react';
import ButtonCuerpo from '../components/ButtonCuerpo';
import { CarullaContext } from "../context/CarullaContext";
import TablaItems from "../components/TablaItems";





export const TablaTipoGeneros = () => {
    const { getAllTablaGeneros, allGenero } = useContext(CarullaContext);

 useEffect(() => {
    const filtros = [];
        
    
    if (filtros.length) {
        getAllTablaGeneros(Object.fromEntries(filtros));
    } else {
        getAllTablaGeneros();
    }
            
},[]);

    return (
        <>
            <div>
                <h1>Tabla Tipo Generos</h1>
            </div>
            <div className='botones_inicio_contenido' >
                <div className='botones_contenido'>
                    <ButtonCuerpo title={"Volver"} href='/inicio-contenido' />
                    <ButtonCuerpo title={"Crear Tipo Genero"} href='/crear-contenido' />
                </div>
            </div>

            <TablaItems
                    itemsMostrar={(allGenero || []).map(
                        ({ pk_genero, nombre_genero, descripcion_genero}) => ({
                            pk_genero,
                            nombre_genero,
                            descripcion_genero,
                        })
                    )}
                    headers={["ID tipo", "Tipo contenido", "Decripcion", "Valor generado"]}
                />
        </>
    );
};