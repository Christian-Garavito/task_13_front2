import React, { useContext, useEffect,useState } from "react";
import ButtonCuerpo from "../components/ButtonCuerpo";
import { CarullaContext } from "../context/CarullaContext";

import TablaItems from "../components/TablaItems";

export const TablaContenido = () => {
  const { getAllContenido, allContenido } = useContext(CarullaContext);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [textoBusqueda1, setTextoBusqueda1] = useState("");

  useEffect(() => {
    const filtros = [];
    if (textoBusqueda) {
      filtros.push(["pk_id_peliculas", textoBusqueda]);
    }
    if (textoBusqueda1) {
      filtros.push(["titulo_pelicula", textoBusqueda1]);
     }

    if (filtros.length) {
      getAllContenido(Object.fromEntries(filtros));
    } else {
      getAllContenido();
    }
    //textoBusqueda toca agregaerlo cualdo esten los filtos
  }, [textoBusqueda,textoBusqueda1]);

  return (
    <>
      <div>
        <h1>Tabla Contenido</h1>
      </div>
      <div className="botones_inicio_contenido">
        <div className="botones_contenido">
          <ButtonCuerpo title={"Volver"} href="/inicio-contenido" />
          <ButtonCuerpo title={"Crear contenido"} href="/crear-contenido" />
        </div>
      </div>
      <div>
        {/** Agregar filtros */}
        <div>
          <div>
            <label htmlFor="">Id pelicula</label>
            <input
              type="text"
              autoComplete="off"
              value={textoBusqueda}
              onChange={(ev) => {
                setTextoBusqueda(ev.target.value);
              }}
              placeholder="Filtar por ID pelicula"
            />
          </div>
          <div>
            <label htmlFor="">Nombre pelicula</label>
            <input
              type="text"
              autoComplete="off"
              value={textoBusqueda1}
              onChange={(ev) => {
                setTextoBusqueda1(ev.target.value);
              }}
              placeholder="Filtar por Nombre de pelicula"
            />
          </div>
          <div>
            <label htmlFor="">Director</label>
            <input type="text" name="" id="" />
          </div>
        </div>
        <TablaItems
          itemsMostrar={(allContenido || []).map(
            ({ pk_id_peliculas, titulo_pelicula, director_pelicula }) => ({
              pk_id_peliculas,
              titulo_pelicula,
              director_pelicula,
            })
          )}
          headers={["ID pelicula", "Nombre pelicula", "Director pelicula"]}
        />
        {/* <CarullaList listaPeliculas={peliculasCarrito} agregar={false} /> */}
      </div>
    </>
  );
};
