import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { isLogin } from '../actions/authActions';
import { LoginScreen } from '../componentes/auth/LoginScreen';
import { PublicacionesScreen } from '../componentes/publicaciones/PublicacionesScreen';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const {uid} = useSelector( state => state.authReducer );

    /* Revisar si ya se encuentra logeado para redireccionar a la vista de publicaciones */
    useEffect(() => {
        dispatch(isLogin())
    }, [dispatch])


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isUserLoggedIn={!!uid}/>
                    <PrivateRoute exact path="/" component={PublicacionesScreen} isUserLoggedIn={!!uid}/>                   
                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}
