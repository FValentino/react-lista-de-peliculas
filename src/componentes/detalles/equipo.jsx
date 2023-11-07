import React from 'react';

import style from "../../styles/equipo.module.css"

function Equipo(props){
    return (
        <div className={style.detallesRenglon}>
            <p>{props.equipo.pelicula.director}| </p>

            {props.equipo.pelicula.mainActors.map(actor => <p>{actor.toString()}, </p>)}
        </div>
    )
}

export default Equipo