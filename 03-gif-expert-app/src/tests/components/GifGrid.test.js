import React from 'react';
import shallow from "enzyme/build/shallow"
import GifGrid from "../../Components/GifGrid"
import { useFetchGifs } from '../../Hooks/useFetchGifs';

jest.mock('../../Hooks/useFetchGifs')

describe('<GifGrid />', () => {
    
    const category = 'homero';

    test('should return a snapshot', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when the images load', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'www.google.com',
            title: 'cualquier cosa'
        },
        {
            id: '123',
            url: 'www.yahoo.com',
            title: 'cualquier cosa 2'
        }
        ];
        useFetchGifs.mockReturnValue({
            data:gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);     
    })
    
    
})
