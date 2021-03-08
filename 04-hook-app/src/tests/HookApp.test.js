import React from 'react';
import shallow from "enzyme/build/shallow"
import { HooksApp } from '../HooksApp';
describe('Simple Test', () => {
    test('should return a snapshot', () => {
       const wrapper = shallow(<HooksApp/>);
       expect(wrapper).toMatchSnapshot();
    });
    
})
