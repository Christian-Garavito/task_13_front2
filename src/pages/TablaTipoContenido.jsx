import { useContext, useEffect, useState } from 'react';
import ButtonCuerpo from '../components/ButtonCuerpo';
import { CarullaContext } from "../context/CarullaContext";
import TablaItems from "../components/TablaItems";

export const TablaTipoContenido = () => {
    const { getAllTipo, allTipo } = useContext(CarullaContext);
    const [buscarIdContenido, setBuscarIdContenido] = useState("");
    const [buscarNombrePelicula, setBuscarNombrePelicula] = useState("");
    const [buscarDirectorPelicula, setBuscarDirectorPelicula] = useState("");

 useEffect(() => {
    const filtros = [];
    if (buscarIdContenido) {
        filtros.push(["pk_id_tipo_contenido", buscarIdContenido]);
    }
    if (buscarNombrePelicula) {
        filtros.push(["tipo_contenido", buscarNombrePelicula]);
    }
    if (buscarDirectorPelicula) {
        filtros.push(["valor_generado", buscarDirectorPelicula]);
    }

    if (filtros.length) {
        getAllTipo(Object.fromEntries(filtros));
    } else {
        getAllTipo();
    }
        //textoBusqueda toca agregaerlo cualdo esten los filtos
 }, [buscarIdContenido, buscarNombrePelicula, buscarDirectorPelicula]);

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

                <div>
                    <div>
                        <label htmlFor="">Id Genero</label>
                        <input
                            type="text"
                            autoComplete="off"
                            value={buscarIdContenido}
                            onChange={(ev) => {
                                setBuscarIdContenido(ev.target.value);
                            }}
                            placeholder="Filtar por ID Genero"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Nombre Genero</label>
                        <input
                            type="text"
                            autoComplete="off"
                            value={buscarNombrePelicula}
                            onChange={(ev) => {
                                setBuscarNombrePelicula(ev.target.value);
                            }}
                            placeholder="Filtar por Nombre de Genero"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Valor Generado</label>
                        <input
                            type="text"
                            autoComplete="off"
                            value={buscarDirectorPelicula}
                            onChange={(ev) => {
                                setBuscarDirectorPelicula(ev.target.value);
                            }}
                            placeholder="Filtar por Valor Generado"
                        />
                    </div>
                </div>

                <TablaItems
                    itemsMostrar={(allTipo || []).map(
                        ({ pk_id_tipo_contenido, tipo_contenido, decripcion_contenido, valor_generado }) => ({
                            pk_id_tipo_contenido,
                            tipo_contenido,
                            decripcion_contenido,
                            valor_generado,
                        })
                    )}
                    headers={["ID tipo", "Tipo contenido", "Decripcion", "Valor generado"]}
                />
            </div>
        </>
    );
};