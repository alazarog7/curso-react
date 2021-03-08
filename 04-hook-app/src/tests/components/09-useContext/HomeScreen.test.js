import { mount, shallow } from "enzyme"
import { HomeScreen } from "../../../compoents/09-useContext/HomeScreen"
import { UserContext } from "../../../compoents/09-useContext/UserContext";

describe('Tests HomeScreen', () => {
    const user = {
        name: 'Alejandro',
        email: 'a.lazaro.g7@gmail.com'
    }
    
    test('should show the component ', () => {
        const wrapper = mount(
            <UserContext.Provider value={{
                user
            }}>
                <HomeScreen />
            </UserContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    })
    
})
