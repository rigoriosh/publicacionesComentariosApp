//import Swal from 'sweetalert2';
//import { fetchSinToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
//import { eventResent } from './events';

export const startLogin = (email, password) => {
    return async(dispatch) => {        
        /* const res = await fetchSinToken('auth',{email, password}, 'POST')
        const body = await res.json()        
        const {token, uid, name, ok} = body;
        if (ok) {
            setTokenLocalStorage(token);
            dispatch(login({uid, name}))
        }else{
            Swal.fire('Error', body.msg, 'error');
        } */
    }
}

export const startRegister = (name, email, password) => {
    return async(dispatch) => {
        /* const res = await fetchSinToken('auth/new',{name, email, password}, 'POST')
        const body = await res.json()
        //console.log(body);
        const {token, uid, user, ok} = body;        
        if (ok) {
            setTokenLocalStorage(token);
            dispatch(login({uid, name: user.name}))
        }else{
            Swal.fire('Error', body.msg, 'error');
        } */
    }
}

export const startCheking = () => {
    return async(dispatch) => {
        /* const res = await fetchWithToken('auth/renew');
        const body = await res.json()
        //console.log(body);
        const {ok, token, uid, name} = body;        
        if (ok) {
            setTokenLocalStorage(token);
            dispatch(login({uid, name}))
        }else{
            //Swal.fire('Error', body.msg, 'error');
            dispatch(checkingFinish());
        } */
    }
}

export const login = (user) => {
    console.log(user)
    setLoginLocalStorach(user)
    return {
        type: types.authLogin,
        payload: user
    }
}


const setLoginLocalStorach = (user) => {
    localStorage.setItem('user', JSON.stringify(user))  // simulacion de base de dato
}

export const isLogin = () => {
    let user = localStorage.getItem('user'); // simulacion de base de dato
    let payload;
    if(!user){
        payload = { checking: true, uid: null, nombre: null }
    }else{
        payload = {...JSON.parse(user), checking: false}
    }

    return {
        type: types.authLogin,
        payload
    }
}



const checkingFinish = () => ({type: types.authCheckingFinish})

const setTokenLocalStorage = (token) => {
    localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());//guarda la hora en que se creo el token
}

export const startLogout = () => {    
    return async (dispatch) => {
        localStorage.clear();
        dispatch(logout());
        //dispatch(eventResent())
    }
}

const logout = () => ({type: types.authLogout});