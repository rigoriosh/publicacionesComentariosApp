import { isLogin, login, startLogout } from "../../actions/authActions";
import { types } from "../../types/types";

describe('Pruebas de las acciones de auth', () => {
    
    test('debe retornar un obj con dos propiedades', () => {
        const userTest = {   
            uid: '111sss2df',
            nombre: 'rigorios'
        } 
        const resp = login(userTest)      
        
        expect(resp).toEqual(
            {
                type: types.authLogin,
                payload: expect.objectContaining(
                    {
                        uid: expect.any(String),
                        nombre: expect.any(String)
                    }
                )
             }
         )
    })

    test('debe retornar un obj', () => {
        const resp = isLogin();
        expect(resp).toEqual(
            {
                type: types.authLogin,
                payload: expect.objectContaining(resp.payload)
             }
         )
    })

    test('debe retornar un obj con solo el type', () => {
        
        const resp = startLogout();
        
        expect(resp).toEqual(
            {
                type: types.authLogout
             }
         )
    })
    
    
    
})
