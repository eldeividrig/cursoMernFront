import React from "react";
import { useState, useEffect } from "react";
import { Global } from "../../helpers/Global";

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const url = Global.url + "articulos";
    let peticion = await fetch(url, {
      method: "GET",
    });
    let datos = await peticion.json();
    if (datos.status === "success") {
      setArticulos(datos.articulos);
    }
  };

  return (
    <>
      {articulos.length >= 1 ? (
        articulos.map((articulo) => {
          return (
            <article key={articulo._id} className="articulo-item">
              <div className="mascara">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Cuesta_del_obispo_01.jpg" />
              </div>
              <div className="datos">
                <h3 className="title">{articulo.titulo}</h3>
                <p className="description">{articulo.contenido}</p>

                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
              </div>
            </article>
          );
        })
      ) : (
        <h1>No hay articulos</h1>
      )}
    </>
  );
};
