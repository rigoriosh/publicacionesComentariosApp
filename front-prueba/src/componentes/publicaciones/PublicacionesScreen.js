import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/publicacionesScreen.css';

import { Header } from "../postear/Header.js";
import Publicacion from './Publicacion.js';
import { startLogout } from '../../actions/authActions.js';
import { limpiarPublicacionesLogout, updateDBtest } from '../../actions/publicacionAction.js';

export const PublicacionesScreen = () => {

    const dispatch = useDispatch();
    const {publicaciones} = useSelector( state => state.publicacionReducer );
    const {nombre} = useSelector( state => state.authReducer );

    const logOut = () => {
        dispatch(startLogout());
        dispatch(limpiarPublicacionesLogout())
    }


    useEffect(() => {
        const db = JSON.parse(localStorage.getItem('dbPublicaciones'));
        if (!!db) {
            dispatch(updateDBtest(db))
        }        
    }, [])


    return (
        <div className="App ">
            <div className="container">

                <div className="row justiContFlexEnd">
                    <button className="ps-btn-logOut cursorpointer" onClick={logOut}>{`${nombre}  `}<i className="fas fa-sign-out-alt"></i></button>
                </div>

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
        </div>
    )
}
