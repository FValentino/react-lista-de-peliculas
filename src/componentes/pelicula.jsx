import React from 'react';
import style from '../styles/pelicula.module.css'
import Poster from './poster'
import Detalle from './detalle'
import MOVIE_DATA from '../assets/json/MOVIES_DATA.json'

function pelicula (){
    const peliculas = MOVIE_DATA.map(dato => {
        return (
        <div> 
            <div className={style.contenedor}> 
                <Poster pelicula={dato}/>
                <Detalle pelicula={dato}/>
            </div>
        </div> 
        )
    });

    return peliculas
}

export default pelicula

