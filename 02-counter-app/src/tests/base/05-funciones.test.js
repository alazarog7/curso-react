import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas de las funciones', () => {

    test('debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        
        const user = getUser();

        expect(user).toEqual(userTest);

    })

    test('debe retornar Fernando', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'Fernando'
        };

        const user = getUsuarioActivo('Fernando');

        expect(user).toEqual(userTest);
    })
    
    
    
})
