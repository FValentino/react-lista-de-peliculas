import React from "react";
import InformacionPelicula from "./detalle/informacion";
import Calificacion from "./detalle/calificacion";
import Equipo from "./detalle/equipo";
import Sipnosis from "./detalle/sipnosis";
import style from "../styles/detalle.module.css"

function Detalle(props){
    return (
        <div className={style.detalles}>
            <InformacionPelicula informacion={props}/>
            <Calificacion calificacion={props}/>
            <Equipo equipo={props}/>
            <Sipnosis sipnosis={props}/>
        </div>
    )
}

export default Detalle