import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../compoents/08-useReducer/TodoApp'; 
import { act } from '@testing-library/react';
import { demoTodos } from '../../fixtures/demoTodo';
describe('<TodoApp />', () => {
    
    
    Storage.prototype.setItem = jest.fn();

    test('should ', () => {
        const wrapper = shallow(<TodoApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should add a TODO', () => {
        const wrap = mount(<TodoApp/>);
        act(()=>{
            wrap.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrap.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });
        expect(wrap.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        //expect(localStorage.setItem).toHaveBeenCalledWith({});
    });

    test('should ', () => {
        const wrapper = shallow(<TodoApp />);
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('ToggleList').prop('handleDelete')( demoTodos[0].id );
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    })
    
    
    
})
