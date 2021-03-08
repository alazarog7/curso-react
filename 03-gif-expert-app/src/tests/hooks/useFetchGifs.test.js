import { useFetchGifs } from "../../Hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';
describe('UseFetchGifs testing', () => {
    test('should return the initial state', async () => {
        const { result, waitForNextUpdate } = renderHook(()=>useFetchGifs('homero'));
        const { data, loading } = result.current;

        await waitForNextUpdate(); //desmonta el hook

        expect(data.length).toBe(0);
        expect(loading).toBeTruthy();
    });

    test('should obtain the data and loading in false state', async() => {
        const { result, waitForNextUpdate } = renderHook(()=>useFetchGifs('homero'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        //console.log(data);
        expect(data.length).toBe(10);
        expect(loading).toBeFalsy();
    })
    
    
})
