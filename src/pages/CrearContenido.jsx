import { useContext, useEffect, useState } from "react";
import ButtonCuerpo from "../components/ButtonCuerpo";
import { CarullaContext } from "../context/CarullaContext";


export const CrearContenido = () => {
  const { setContenidoBack, getContenido } = useContext(CarullaContext);
  const [textoBusqueda1, setTextoBusqueda1] = useState("");
  const [textoBusqueda2, setTextoBusqueda2] = useState("");
  const [textoBusqueda3, setTextoBusqueda3] = useState("");
  const [textoBusqueda4, setTextoBusqueda4] = useState("");
  const [textoBusqueda5, setTextoBusqueda5] = useState("");
  const [textoBusqueda6, setTextoBusqueda6] = useState("");
  const [datoEncontrado, setdatoEncontrado] = useState(null);

  useEffect(() => {

    getContenido(textoBusqueda1).then((infEncontrada) => {
      if (infEncontrada && infEncontrada.length) {
        setdatoEncontrado(infEncontrada[0].pk_id_peliculas);
        setTextoBusqueda2(infEncontrada[0].titulo_pelicula);
        setTextoBusqueda3(infEncontrada[0].ano_pelicula);
        setTextoBusqueda5(infEncontrada[0].director_pelicula);
      } else {
        setdatoEncontrado(null);
        setTextoBusqueda2("")
        setTextoBusqueda3("")
        setTextoBusqueda5("")
      }
    }).catch((error) => {
      console.error(error);
      setdatoEncontrado(null);
      setTextoBusqueda2("")
      setTextoBusqueda3("")
      setTextoBusqueda5("")
    });

  }, [textoBusqueda1]);

  return (
    <>
      <div>
        <div>
          <h1>Crear Contenido</h1>
        </div>
        <div className="botones_inicio_contenido">
          <div className="botones_contenido">
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
        <select  onChange={(ev) => {
            setTextoBusqueda4(ev.target.value);
          }}>
            <option value={1}>pelicula</option>
            <option value={2}>seria</option>
            <option value={3}>juego</option>
        </select>
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
          value={textoBusqueda6}
          onChange={(ev) => {
            setTextoBusqueda6(ev.target.value);
          }}
          placeholder="Filtar por Nombre de pelicula"
        />
        <button onClick={() => {
          setContenidoBack({
            "pk_id_peliculas": textoBusqueda1,
            "titulo_pelicula": textoBusqueda2,
            "ano_pelicula": textoBusqueda3,
            "fk_id_tipo_contenido": textoBusqueda4,
            "director_pelicula": textoBusqueda5,
            "valor_pelicula": textoBusqueda6
          }, datoEncontrado)
        }}>Crear aleatorio</button>
      </div>
    </>
  );
};
