import '@testing-library/jest-dom';
import {getSaludo} from '../../base-pruebas/02-template-string';


describe('Grupo de pruebas de base', () => {
    test('Debe retornar Hola Alejandro', () => {
        const nombre = "Alejandro";
    
        const nombreResult = getSaludo(nombre);
    
        expect(nombreResult).toBe("Hola Alejandro");
    }) 
    
    test('Debe retornar Hola Carlos', () => {
    
        const nombreResult = getSaludo();
    
        expect(nombreResult).toBe("Hola Carlos");
    }) 
})


