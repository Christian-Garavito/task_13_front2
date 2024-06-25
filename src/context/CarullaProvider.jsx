import { useEffect,useState } from "react";
import { CarullaContext } from "./CarullaContext";

export const CarullaProvider = ({children})=>{
    // esto es un estado
    const [allContenido, setAllContenido]=useState([]);
    const [peliculasCarrito, setPeliculasCarrito] = useState([]);


    const getAllContenido = async () =>{
        const baseURL = 'http://127.0.0.1:5000/servicio-1/contenidos'

        const res = await fetch(
            `${baseURL}?pk_id_peliculas=${pk_id_peliculas}&titulo_pelicula=${titulo_pelicula}&ano_pelicula=${ano_pelicula}&fk_id_tipo_contenido=${fk_id_tipo_contenido}&director_pelicula=${director_pelicula}&valor_pelicula=${valor_pelicula}`
        );
        // arduini data=0
        const data = await res.json();
        // usar
         const {Search} =data;
    
        setAllContenido([...Search]);
    }

    const agregarAlCarrito = (pelicula) => {
        setPeliculasCarrito((peliculasEnCarrito) => {
            const temp = [...peliculasEnCarrito, pelicula];

            // setItem: Guardar en el storage del navegador
            window.localStorage.setItem("peliculas_carrito", JSON.stringify(temp))
            return [...peliculasEnCarrito, pelicula];
        })
    }
    
    const eliminarCarrito = (index) => {
        setPeliculasCarrito((peliculasEnCarrito) => {
            const temp = [...peliculasEnCarrito];
            temp.splice(index, 1);
            window.localStorage.setItem("peliculas_carrito", JSON.stringify(temp))
            return temp;
        })
    }


    useEffect(() => {
        // getItem: Leer del storage del navegador
        const valorStorage = window.localStorage.getItem("peliculas_carrito");

        // Verificar si hay algo
        if (valorStorage) {
            // Pasar el valor del storage de string a objeto de js
            setPeliculasCarrito(JSON.parse(valorStorage))
        }
    }, [])

    return(
        <CarullaContext.Provider
        value={{
            allContenido,
            getAllContenido,            
            agregarAlCarrito,
            eliminarCarrito
        }}>
            {children}
        </CarullaContext.Provider>

    );

};