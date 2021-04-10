import React from 'react';
import { /* useSelector, */ useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { login} from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {
    const dispatch = useDispatch();

    const [fieldsLogin, handledLoginInputChange] = useForm(
        {
            nombre: ''
        }
    )
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
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Ingresa tu nombre"
                                name='nombre' value={nombre} onChange={handledLoginInputChange}
                            />
                        </div>                        
                        <div className="form-group">
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