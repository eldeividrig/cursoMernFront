import React from 'react'

export const Listado = ({articulos, setArticulos}) => {
  return (
     (
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
      ) 
  )
}
