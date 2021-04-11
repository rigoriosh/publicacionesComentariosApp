import { render, screen } from "@testing-library/react"
import { Comentario } from "../../../componentes/publicaciones/Comentario"
import { getTimeFixes } from "../../../helpers/time"


describe('pruebas componente <Comentario/>', () => {
    
    test('Debe mostrar info de un comentario', () => {

        const comentarioTest = {
            id_comentario: Number(new Date()),
            nombreUsuario: 'rigorios',
            foto: null,
            fecha: Number(new Date()),
            comentario: 'newcoment'
        }
        
        render(<Comentario comentario = {comentarioTest}/>)

        const nombreUsuario = screen.getByText(comentarioTest.nombreUsuario);        
        expect(nombreUsuario).toBeInTheDocument();

        const comentario = screen.getByText(comentarioTest.comentario);        
        expect(comentario).toBeInTheDocument();

        const timeFixes = getTimeFixes(comentarioTest.fecha)
        const {time, textTime} = timeFixes;
        const fecha = screen.getByText(`Hace ${time} ${textTime}`);
        expect(fecha).toBeInTheDocument();

        

    })
    

})
