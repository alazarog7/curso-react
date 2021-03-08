import shallow from "enzyme/build/shallow"
import { React } from 'react';
import { MultipleCustomHook } from '../../../compoents/03-example/MultipleCustomHook';
import { useFetch } from "../../../hooks/useFetch";
jest.mock('../../../hooks/useFetch');

describe('Multiple Custom Hooks Set Tests', () => {
    test('should ', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHook/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('should return the right data ', () => {
        
        useFetch.mockReturnValue({
            data: [
                {
                    author: 'Alejandro',
                    quote: 'El error existe' 
                }
            ],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHook/>)

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('El error existe');
        expect(wrapper.find('footer').text().trim()).toBe('Alejandro');



    })
    
    
})
