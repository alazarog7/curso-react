import shallow from "enzyme/build/shallow"
import AddCategory from "../../Components/AddCategory"
import '@testing-library/jest-dom';

describe('AddCategory test', () => {
    const setcategory = jest.fn();
    let wrapper = shallow(<AddCategory setcategory={setcategory}/>);
    

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setcategory={setcategory}/>)
    })

    test('should return the reght template', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should return the right input value', () => {
        const input = wrapper.find('input');
        const valor = "ekeko";
        input.simulate('change',{target:{value:valor}});
        expect(wrapper.find('h1').text()).toBe(valor);
    })

    test('should not pot data on submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setcategory).not.toHaveBeenCalled();
    })

    test('should call setcategories and clean input tex', () => {
        const input = wrapper.find('input');
        const valor = "ekeko";
        input.simulate('change',{target:{value:valor}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setcategory).toHaveBeenCalled();
        expect(setcategory).toHaveBeenCalledTimes(1);
        expect(setcategory).toHaveBeenCalledWith(expect.any(Array));

        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    


    

})
