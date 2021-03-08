import React from 'react';
import shallow from "enzyme/build/shallow"
import GifExpertApp from "../GifExpertApp";


describe('<GiffExpertApp/>', () => {

    const categories = ['Homero', 'OK'];
    test('should return', () => {
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('should return a list of categories', () => {
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        
        expect(wrapper.find('GifGrid').length).toBe(categories.length)


    })
    
    
})
