import { getGifs } from "../../Helpers/GetGifs"

describe('GetGifs testing', () => {
    test('should bring 10 elements', async () => {
        const data = await getGifs('bob sponge');
        expect(data.length).toBe(10);
    })


    test('should bring 0 elements', async () => {
        const data = await getGifs('');
        expect(data.length).toBe(0);
    })

    test('should bring 0 elements', async () => {
        const data = await getGifs(undefined);
        expect(data.length).toBe(10);
    })
    
})
