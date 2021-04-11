import { types } from "../types/types";



export const login = (user) => {

    setLoginLocalStorach(user)
    return {
        type: types.authLogin,
        payload: user
    }
}


const setLoginLocalStorach = (user) => {
    localStorage.setItem('user', JSON.stringify(user))  // simulación de base de dato
}

export const isLogin = () => {
    let user = localStorage.getItem('user'); // simulación de base de dato
    let payload;
    if(!user){
        payload = { uid: null, nombre: null }
    }else{
        payload = {...JSON.parse(user)}
    }

    return {
        type: types.authLogin,
        payload
    }
}


export const startLogout = () => {    

    localStorage.removeItem('user');
    return {type: types.authLogout}
}
