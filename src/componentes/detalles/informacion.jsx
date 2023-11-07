import React from "react";

import style from "../../styles/informacion.module.css"

function InformacionPelicula(props){
    return(
        <div>
            <div className={style.titulo}>
                <p> {props.informacion.pelicula.title}</p>
            </div>
            <div className={style.detallesRenglon}>
                <p>{props.informacion.pelicula.releaseDate.split('/')[2]} | </p>
                <p>{props.informacion.pelicula.duration} | </p>
                <p>{props.informacion.pelicula.maturity} | </p>
                <p>{props.informacion.pelicula.genres} </p>
            </div>
        </div>
    );
}

export default InformacionPelicula