import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

import heroes from '../../data/heroes'

describe('Pruebas con promesas', () => {
    test('debe retornar un heroe de manera asincrona', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then((heroe)=>{
            expect(heroe).toBe(heroes[0]);
            done();
        });
    })
    
    test('debe obtener un error si el heroe no existe', (done) => {
        const id = 100;

        getHeroeByIdAsync(id).catch((error)=> {
            expect(error).toBe('No se pudo encontrar el héroe');

            done();
        })
    })
    
})
