import React from 'react';
import style from '../../styles/calificacion.module.css';

function Calificacion(props) {
  return (
    <div className={style.detallesRenglon}>
      <div className={style.calificacion}>
        <label>★</label>
        <p>{props.calificacion.pelicula.rating} | </p>
      </div>
      <div className={style.calificar}>
        <p>
          <label>★</label>
          <a href=""> rate</a> |
        </p>
      </div>
      <div className={style.metascore}>
        <p>
          {props.calificacion.pelicula.metascore >= 0 &&
            props.calificacion.pelicula.metascore < 50 && (
              <label className={style.malo}>
                
                {props.calificacion.pelicula.metascore}
              </label>
            )}
          {props.calificacion.pelicula.metascore >= 50 &&
            props.calificacion.pelicula.metascore < 60 && (
              <label className={style.medio}>
                
                {props.calificacion.pelicula.metascore}
              </label>
            )}
          {props.calificacion.pelicula.metascore >= 60 &&
            props.calificacion.pelicula.metascore < 101 && (
              <label className={style.bueno}>
                
                {props.calificacion.pelicula.metascore}
              </label>
            )}
          metascore
        </p>
      </div>
    </div>
  );
}

export default Calificacion;
