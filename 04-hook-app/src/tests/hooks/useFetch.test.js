import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"

describe('Prueba de useFetch', () => {
    
    test.skip('should ', async() => {
        const { result , waitForNextUpdate} = renderHook(() => useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
        
        await waitForNextUpdate();
        
        const { data, loading, error } = result.current;

        expect( data.length ).toBe(1);
        expect( loading ).toBe( false );
        expect( error ).toBe( null );
    })


    test.skip('should return a error and data be null', async() => {
        const { result , waitForNextUpdate} = renderHook(() => useFetch(`https://reqres.in/api21/users?page=2`));
        
        await waitForNextUpdate();
        
        const { data, loading, error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe( false );
        expect( error ).toBe( 'No se cargo la data' );
    })
    
    
})
