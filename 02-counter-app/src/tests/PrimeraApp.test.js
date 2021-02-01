import React from 'react';
import {getByText, render} from '@testing-library/react';
import PrimeraApp from '../Primeraapp';
import { shallow } from 'enzyme';
describe('Pruebas en PrimeraApp', () => {
    //test('debe mostrar el mensa Hola Alejandro ', () => {
    //    const saludo = "Hola Alejandro";
    //    const wrapper = render(<PrimeraApp nombre="Alejandro"/>);
    //    // const {getByText} = render(<PrimeraApp nombre="Alejandro"/>);
    //    //console.log(wrapper);
    //    expect(wrapper.getByText(saludo)).toBeInTheDocument();
    //})

    test('debe mostrar el mensa Hola Alejandro', () => {
        const wrapper = shallow(<PrimeraApp nombre="alejandro"/>);
    
        expect(wrapper).toMatchSnapshot();
    })

    test('el subtitulo debe estar contenido dentro de un <p></p>',()=>{
        
        const wrapper = shallow(<PrimeraApp nombre="alejandro"/>);
        const subtituloTest = "Esta es mi presentación";

        const subtitulo = wrapper.find('p').text();

        expect(subtitulo).toBe(subtituloTest);
        
    });
    


    
})
