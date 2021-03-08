import { mount } from "enzyme"
import { LoginScreen } from "../../../compoents/09-useContext/LoginScreen"
import { UserContext } from "../../../compoents/09-useContext/UserContext";

describe('Test LoginScreen', () => {
    const setUser = jest.fn();
    const wrapper = mount(
                            <UserContext.Provider value={{
                                setUser
                            }}>
                                <LoginScreen />
                            </UserContext.Provider>);
    
    test('should render de LoginScreen component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should login with specific credentials', () => {
        
        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            id:1234,
            name:'Alejandro Lazaro Gutierrez'
        });
    })
    
    
})
