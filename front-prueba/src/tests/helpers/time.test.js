

import { getTimeFixes } from "../../helpers/time";

describe('Pruebas en time.js', () => {

    test('should getTimeFixes, retornar un objeto con 2 propiedades (time: int y textTime: string)', () => {        
        


        const resp = getTimeFixes(new Date())
                
        expect(resp).toEqual(
           {
                time: expect.any(Number),
                textTime: expect.any(String)
            }
        )
                
        
    })

    
})



