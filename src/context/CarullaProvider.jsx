import { useEffect,useState } from "react";
import { CarullaContext } from "./CarullaContext";

export const CarullaProvider = ({children})=>{
    // esto es un estado
    const [allCarulla, setAllCarulla] =useState([]);
    const [peliculasCarrito, setPeliculasCarrito] = useState([]);


    const getAllCarulla = async (nombrePelicula,page =1) =>{
        const baseURL = 'http://www.omdbapi.com/?apikey=3923e2e&type=movie'

        const res = await fetch(
            `${baseURL}&page=${page}&s=${nombrePelicula}`
        );
        // arduini data=0
        const data = await res.json();
        // usar
         const {Search} =data;
    
        setAllCarulla([...Search]);
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
            allCarulla,
            getAllCarulla,
            peliculasCarrito,
            agregarAlCarrito,
            eliminarCarrito
        }}>
            {children}
        </CarullaContext.Provider>

    );

};