import React from 'react';
import style from '../styles/poster.module.css'

function Poster(props){
    return(
        <div className={style.poster}>
                <img src={props.pelicula.poster} alt={props.pelicula.title}/>
        </div>
    ); 
};

export default Poster