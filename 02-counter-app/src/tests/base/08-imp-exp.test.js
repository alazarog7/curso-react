import { getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en funcion  de heroes', () => {
    
    test('Debe devolver 2 heores dado un propietario Marvel', () => {
        
        const heroesTests = ['Spiderman', 'Wolverine'];

        const ownerTest = 'Marvel';

        const heroes = getHeroesByOwner(ownerTest);

        expect(heroes.length).toEqual(heroesTests.length);
    })

    test('Debe devolver 3 heores dado un propietario DC', () => {
    
        const ownerTest = 'DC';

        const heroes = getHeroesByOwner(ownerTest);

        expect(heroes.length).toEqual(3);
    })

    test('Debe devolver 0 heroes dado un propietario inexistente', () => {
        const ownerTest = 'adada';

        const heroes = getHeroesByOwner(ownerTest);

        expect(heroes.length).toEqual(0);
    })
    
})
