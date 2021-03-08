import { shallow } from "enzyme"
import { ToggleListItem } from "../../../compoents/08-useReducer/ToggleListItem"
import { demoTodos } from "../../fixtures/demoTodo";

describe('TodoListItem', () => {
    
    let wrapper = null;
    const handleToggle = jest.fn();
    const handleDelete = jest.fn();
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<ToggleListItem
                                todo={demoTodos[0]}
                                index={1}
                                handleToggle={handleToggle}
                                handleDelete={handleDelete}
                          />)
    })

    afterEach(()=>{
        wrapper = null
    })

    test('should show component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should call handleDelete function', () => {
       wrapper.find('button').simulate('click');
       expect(handleDelete).toHaveBeenCalled();
    });

    test('should call handleToggle function', () => {
       wrapper.find('p').simulate('click');
       expect(handleToggle).toHaveBeenCalledWith(expect.any(Number));
    });

    test('should return the correct message',()=>{
        expect(wrapper.find('p').text().trim()).toBe(
            '2. jugar'
        )
    });

    test('should have complete class', () => {
        
        demoTodos[0].done = true;
        wrapper = shallow(<ToggleListItem
            todo={demoTodos[0]}
            index={1}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />)
        expect(wrapper.exists('.complete')).toEqual(true);
    })
})
