//import {} from '@testing-library/';
import {useCounter} from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';
describe('useCounter', () => {
    test('should return default values', () => {
        const {result} = renderHook(() => useCounter());
        // console.log(result.current);
        expect( result.current.state ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');

    })

    test('should return 100', () => {
        const {result} = renderHook(() => useCounter(100));
        // console.log(result.current);
        expect( result.current.state ).toBe(100);
    })

    test('should increment a value', () => {
        const {result} = renderHook(() => useCounter(10));
        // console.log(result.current);
        const { increment } = result.current;
        
        act(()=>{
            increment();
        } );

        const { state } = result.current;
        expect( state ).toBe(11);
    })

    test('should decrement a value', () => {
        const {result} = renderHook(() => useCounter(10));
        // console.log(result.current);
        const { decrement } = result.current;
        
        act(()=>{
            decrement();
        } );

        const { state } = result.current;
        expect( state ).toBe(9);
    })
    
    test('should reset a value', () => {
        const {result} = renderHook(() => useCounter(10));
        // console.log(result.current);
        const { reset } = result.current;
        
        act(()=>{
            reset();
        } );

        const { state } = result.current;
        expect( state ).toBe(10);
    })


    
})
