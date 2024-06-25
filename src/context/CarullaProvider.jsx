import { useEffect, useState } from "react";
import { CarullaContext } from "./CarullaContext";

export const CarullaProvider = ({ children }) => {
  // esto es un estado
  const [allContenido, setAllContenido] = useState([]);

  const getAllContenido = async (filtros) => {
    const baseURL = "http://127.0.0.1:5000/servicio-1/contenidos";

    const strFilters = Object.entries(filtros || {})
      .map(([key, val]) => `${key}=${val}`)
      .join("&");

    // js
    // [].join("@");
    // python
    // "@".join([]);

    const res = await fetch(`${baseURL}?${strFilters}`);
    // arduini data=0
    const data = await res.json();
    // usar
    // const { Search } = data;

    if (data?.status) {
      console.log("Ok", data?.msg);
      setAllContenido([...(data?.obj ?? [])]);
    } else {
      console.log("Error", data?.msg);
    }
  };

  const setContenidoBack = async (
    valoresCambiar = {},
    pk_id_peliculas = undefined
  ) => {
    "http://127.0.0.1:5000/servicio-1/contenidos/1";
    const baseURL = `http://127.0.0.1:5000/servicio-1/contenidos${pk_id_peliculas != null ? `/${pk_id_peliculas}` : ""
      }`;

    // js
    // [].join("@");
    // python
    // "@".join([]);

    const res = await fetch(baseURL, {
      method: pk_id_peliculas != null ? "PUT" : "POST",
      body: JSON.stringify(valoresCambiar),
      headers: {
        "Content-Type": "application/json"
      }
    });
    // arduini data=0
    const data = await res.json();
    // usar
    // const { Search } = data;
    if (!("status" in data)) {
      throw new Error("Error llamando el fetch");
    }

    if (data?.status) {
      console.log("Ok", data?.msg);
    } else {
      console.log("Error", data?.msg);
    }
  };





  return (
    <CarullaContext.Provider
      value={{
        allContenido,
        getAllContenido,
        setContenidoBack,
      }}
    >
      {children}
    </CarullaContext.Provider>
  );
};
