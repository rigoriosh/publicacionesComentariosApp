import React from 'react'
import { Header } from "../Header.js";
import '../../App.css';
import { useSelector } from 'react-redux';
import Publicacion from './Publicacion.js';

export const PublicacionesScreen = () => {
    const {publicaciones} = useSelector( state => state.publicacionReducer );
    //console.log(publicaciones)
    return (
        <div className="App container">
            <Header />
            {
                (publicaciones.length < 1) 
                ? ( <h1>! Todavia sin publicaciones ! </h1> )
                : (
                    
                    publicaciones.map(p => {
                        return <Publicacion key={p.id_publicacion} publicacion={p}/>
                    })
                    
                   
                )
            }
        </div>
    )
}
