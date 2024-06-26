import { useContext, useEffect,useState } from 'react';
import ButtonCuerpo from '../components/ButtonCuerpo';
import { CarullaContext } from "../context/CarullaContext";
import TablaItems from "../components/TablaItems";





export const TablaTipoGeneros = () => {
    const { getAllTablaGeneros, allGenero } = useContext(CarullaContext);
    const [buscarIdGenero, setBuscarIdGenero] = useState("");
    const [buscarNombreGenero, setBuscarNombreGenero] = useState("");
    const [buscarDescripcionGenero, setBuscarDescripcionGenero] = useState("");

    useEffect(() => {
        const filtros = [];
        if (buscarIdGenero) {
            filtros.push(["pk_genero", buscarIdGenero]);
        }
        if (buscarNombreGenero) {
            filtros.push(["nombre_genero", buscarNombreGenero]);
        }
        if (buscarDescripcionGenero) {
            filtros.push(["descripcion_genero", buscarDescripcionGenero]);
        }


        if (filtros.length) {
            getAllTablaGeneros(Object.fromEntries(filtros));
        } else {
            getAllTablaGeneros();
        }

    }, [buscarIdGenero, buscarNombreGenero, buscarDescripcionGenero]);

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
            <div>
                <div>
                    <label htmlFor="">Id Genero:</label>
                    <input
                        type="text"
                        autoComplete="off"
                        value={buscarIdGenero}
                        onChange={(ev) => {
                            setBuscarIdGenero(ev.target.value);
                        }}
                        placeholder="Filtar por ID Genero"
                    />
                </div>
                <div>
                    <label htmlFor="">Nombre Genero:</label>
                    <input
                        type="text"
                        autoComplete="off"
                        value={buscarNombreGenero}
                        onChange={(ev) => {
                            setBuscarNombreGenero(ev.target.value);
                        }}
                        placeholder="Filtar por Nombre de Genero"
                    />
                </div>
                <div>
                    <label htmlFor="">Descripcion Genero:</label>
                    <input
                        type="text"
                        autoComplete="off"
                        value={buscarDescripcionGenero}
                        onChange={(ev) => {
                            setBuscarDescripcionGenero(ev.target.value);
                        }}
                        placeholder="Filtar por Descripcion Genero"
                    />
                </div>
            </div>

            <TablaItems
                itemsMostrar={(allGenero || []).map(
                    ({ pk_genero, nombre_genero, descripcion_genero }) => ({
                        pk_genero,
                        nombre_genero,
                        descripcion_genero,
                    })
                )}
                headers={["ID tipo", "Tipo contenido", "Decripcion"]}
            />
        </>
    );
};