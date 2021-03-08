import React from 'react';
c
import { GifGridItem } from "../../Components/GifGridItem";

describe('Prueba del componente GifGridItem', () => {
    
    const title = 'Titulo de prueba';
    const link = 'http://localhost/imagen.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={link}/>);


    test('should print the template', () => {
        expect(wrapper).toMatchSnapshot();
    }); 

    test('should a has a paragraph with the title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim()).toBe(title);
    })

    test('should has the url and alt same as props', () => {
        const img = wrapper.find('img');
        expect(img.props().src).toBe(link);
        expect(img.props().alt).toBe(title);
    })

    test('should has de animated__fadeIn class', () => {
        const div = wrapper.find('div');
        expect(div.props().className.includes("bounce")).toBe(true);
    })


    
    
    

})
