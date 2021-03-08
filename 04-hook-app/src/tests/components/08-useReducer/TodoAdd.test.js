import { shallow } from "enzyme"
import { TodoAdd } from '../../../compoents/08-useReducer/TodoAdd';
describe('Prueba en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo = {handleAddTodo} />)

    test('should return the right template', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should not submit when the input is blank', () => {
        wrapper.find('button').simulate('click');
        expect(handleAddTodo).not.toHaveBeenCalled();
    })


    test('should not submit when the input is blank.  2nd Form', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })


    test('should submit', () => {
        wrapper.find('input').simulate('change', { target :{ value: 'correr', name: 'description'}});
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith({
            id:expect.any(Number),
            desc: expect.any(String),
            done: expect.any(Boolean)
        });

        expect(wrapper.find('input').prop('value')).toEqual('');
    })


    
    
})
