import React from 'react';
import {useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import '../../styles/login.css';

import { login} from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    const dispatch = useDispatch();

    const [fieldsLogin, handledLoginInputChange] = useForm({nombre: ''})

    const {nombre} = fieldsLogin;

    const handleLogin = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            Swal.fire('Nota','El campo nombre es requerido','info')
        } else {
            const uidPrueba = Number(new Date());
            dispatch(login({nombre, uid: uidPrueba, checking: false}));
        }
    }

    

    return (
        <div className=" login-container">
            <div className="">
                <div className="">
                    <h3>Bienvenido</h3>
                    <form onSubmit={handleLogin}>
                        <div className="login-form-input">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Ingresa con tu nombre"
                                name='nombre' value={nombre} onChange={handledLoginInputChange}
                            />
                        </div>                        
                        <div className="">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}