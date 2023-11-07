import React from "react";
import style from '../../styles/sipnosis.module.css'

function Sipnosis(props){
    return (
        <div className={style.sipnosis}>
            {props.sipnosis.pelicula.plot}
        </div>
    );
}

export default Sipnosis