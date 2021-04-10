import React, { useEffect } from 'react'
import { Header } from "../postear/Header.js";
import '../../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
import Publicacion from './Publicacion.js';
import { startLogout } from '../../actions/authActions.js';
import { updateDBtest } from '../../actions/publicacionAction.js';

export const PublicacionesScreen = () => {
    const dispatch = useDispatch();
    const {publicaciones} = useSelector( state => state.publicacionReducer );
    const {nombre} = useSelector( state => state.authReducer );
    const logOut = () => {
        dispatch(startLogout())
    }
    useEffect(() => {
        const db = JSON.parse(localStorage.getItem('dbPublicaciones'));
        if (db.length > 0) {
            dispatch(updateDBtest(db))
        }
        //console.log(db);
    }, [])
    return (
        <div className="App container">
            <button onClick={logOut}>{`${nombre}  `}<i className="fas fa-sign-out-alt"></i></button>
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
