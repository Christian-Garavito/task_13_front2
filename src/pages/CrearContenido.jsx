import React, { useContext, useEffect,useState } from "react";
import ButtonCuerpo from "../components/ButtonCuerpo";
import { CarullaContext } from "../context/CarullaContext";

export const CrearContenido = () => {
  const { setContenidoBack } = useContext(CarullaContext);
  const [textoBusqueda1, setTextoBusqueda1] = useState("");
  const [textoBusqueda2, setTextoBusqueda2] = useState("");
  const [textoBusqueda3, setTextoBusqueda3] = useState("");
  const [textoBusqueda4, setTextoBusqueda4] = useState("");
  const [textoBusqueda5, setTextoBusqueda5] = useState("");
  const [textoBusqueda6, setTextoBusqueda6] = useState("");
  
  return (
    <>
      <div>
        <div>
          <h1>Crear Contenido</h1>
        </div>
        <div className="botones_inicio_contenido">
          <div className="botones_contenido">
            <ButtonCuerpo title={"Volver"} href="/inicio-contenido" />
            <ButtonCuerpo
              title={"Tabla de Contenido"}
              href="/tabla-contenido"
            />
            <ButtonCuerpo
              title={"Tabla Tipo de Cotenido"}
              href="/tabla-tipo-contenido"
            />
            <ButtonCuerpo
              title={"Tabla Tipo de Genero"}
              href="/tabla-tipo-generos"
            />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="">Id pelicula</label>
        <input
              type="text"
              autoComplete="off"
              value={textoBusqueda1}
              onChange={(ev) => {
                setTextoBusqueda1(ev.target.value);
              }}
              placeholder="Filtar por Nombre de pelicula"
            />
        <label htmlFor="">titulo_pelicula</label>
        <input
              type="text"
              autoComplete="off"
              value={textoBusqueda2}
              onChange={(ev) => {
                setTextoBusqueda2(ev.target.value);
              }}
              placeholder="Filtar por Nombre de pelicula"
            />
        <label htmlFor="">ano_pelicula</label>
        <input
              type="text"
              autoComplete="off"
              value={textoBusqueda3}
              onChange={(ev) => {
                setTextoBusqueda3(ev.target.value);
              }}
              placeholder="Filtar por Nombre de pelicula"
            />
        <label htmlFor="">fk_id_tipo_contenido</label>
        <input
              type="text"
              autoComplete="off"
              value={textoBusqueda4}
              onChange={(ev) => {
                setTextoBusqueda4(ev.target.value);
              }}
              placeholder="Filtar por Nombre de pelicula"
            />
        <label htmlFor="">director_pelicula</label>
        <input
              type="text"
              autoComplete="off"
              value={textoBusqueda5}
              onChange={(ev) => {
                setTextoBusqueda5(ev.target.value);
              }}
              placeholder="Filtar por Nombre de pelicula"
            />
        <label htmlFor="">valor_pelicula</label>
        <input
              type="text"
              autoComplete="off"
              value={textoBusqueda5}
              onChange={(ev) => {
                setTextoBusqueda5(ev.target.value);
              }}
              placeholder="Filtar por Nombre de pelicula"
            />
        <button onClick={() => {
          setContenidoBack({
            "ano_pelicula": 2028,
            "director_pelicula": "Jhon Favreau",
            "fk_id_tipo_contenido": 1,
            "pk_id_peliculas": 100,
            "titulo_pelicula": "iron man 4",
            "valor_pelicula": 140000000
          }, 100)
        }}>Crear aleatorio</button>
      </div>
    </>
  );
};
