import React, { useContext, useEffect, useState } from 'react';
import ButtonCuerpo from '../components/ButtonCuerpo';
import { CarullaContext } from "../context/CarullaContext";
import TablaItems from "../components/TablaItems";

export const TablaTipoContenido = () => {
    const { getAllTipo, allTipo } = useContext(CarullaContext);
    useEffect(() => {
        const filtros = [];
        
        if (filtros.length) {
            getAllTipo(Object.fromEntries(filtros));
        } else {
            getAllTipo();
        }
        //textoBusqueda toca agregaerlo cualdo esten los filtos
      }, []);
    
    return (
        <>
            <div>
                <div>
                    <h1>TablaTipoContenido</h1>

                </div>
                <div className='botones_inicio_contenido' >
                    <div className='botones_contenido'>
                        <ButtonCuerpo title={"Volver"} href='/inicio-contenido' />
                        <ButtonCuerpo title={"Crear Tipo Contenido"} href='/crear-contenido' />
                    </div>
                </div>

                <TablaItems
                    itemsMostrar={(allTipo|| []).map(
                        ({ pk_id_tipo_contenido, tipo_contenido, decripcion_contenido, valor_generado }) => ({
                            pk_id_tipo_contenido,
                            tipo_contenido,
                            decripcion_contenido,
                            valor_generado,
                        })
                    )}
                    headers={["ID tipo", "Tipo contenido", "Decripcion", "valor_generado"]}
                />
            </div>
        </>
    );
};