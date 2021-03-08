import { shallow } from "enzyme";
import {ToggleList} from '../../../compoents/08-useReducer/ToggleList';
import { demoTodos } from "../../fixtures/demoTodo";

describe('Test ToggleList', () => {
    let wrapper;
    const handleDelete = jest.fn(); 
    const handleToggle = jest.fn(); 

    beforeEach(()=>{
        wrapper = shallow(<ToggleList
                                todos = { demoTodos }
                                handleDelete = { handleDelete } 
                                handleToggle = { handleToggle }
                         />)
    });

    afterEach(()=>{
        wrapper = null;
    })

    test('should return the right snapshot', () => {
        expect(wrapper).toMatchSnapshot()  
    })

    test('should have two elements', () => {
        expect(wrapper.find('ToggleListItem').length).toEqual(demoTodos.length);
        expect(wrapper.find('ToggleListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    })
    
    
})
