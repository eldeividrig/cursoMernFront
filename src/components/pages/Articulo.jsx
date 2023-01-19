import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Global } from "../../helpers/Global";
import { Peticion } from "../../helpers/Peticion";
import { Listado } from "./Listado";

export const Articulo = () => {
  const [articulo, setArticulo] = useState({});
  const [cargando, setCargando] = useState(true);
  const params = useParams();
  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    const url = Global.url + "articulo/";
    const { datos, cargando } = await Peticion(url + params.id, "GET");
    // let peticion = await fetch(url, {
    //   method: "GET",
    // });
    // let datos = await peticion.json();
    if (datos.status === "success") {
      setArticulo(datos.articulo);
    }
    setCargando(false);
  };

  return (
    <div className="jumbo">
      {cargando ? (
        "Cargando..."
      ) : (
        <>
          <div className="mascara">
            {articulo.imagen != "default.png" && (
              <img src={Global.url + "imagen/" + articulo.imagen} />
            )}
            {articulo.imagen == "default.png" && (
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/e/e4/Cuesta_del_obispo_01.jpg"
                }
              />
            )}
          </div>
          <h1>{articulo.titulo}</h1>
          <span>{articulo.fecha}</span>
          <p>{articulo.contenido}</p>
        </>
      )}
    </div>
  );
};
