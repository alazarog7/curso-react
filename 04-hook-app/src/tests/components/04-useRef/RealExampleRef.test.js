import React from 'react';
import shallow from "enzyme/build/shallow"
import { RealExampleRef } from '../../../compoents/04-useRef/RealExampleRef';

describe('<RealExampleRef/>', () => {
    test('should show component correctly', () => {
        const wrapper = shallow(<RealExampleRef/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHook').exists()).toBe(false);
    })

    test('should show RealExampleRef', ()=>{
        const wrapper = shallow(<RealExampleRef/>)
        const button = wrapper.find('button');
        button.simulate('click');
        expect(wrapper.find('MultipleCustomHook').exists()).toBe(true);
    })
    
})
