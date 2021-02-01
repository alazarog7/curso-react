import { shallow } from "enzyme"
import CounterApp from "../CounterApp"

describe('Pruebas del CounterApp',() => {

    let wrapper = shallow(<CounterApp/>);

    beforeEach(()=>{
        wrapper = shallow(<CounterApp/>);
    })

    afterEach(()=>{
        wrapper = null;
    })

    test('debe mostrar la plantilla del contandor ', () => {
       
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor de 100 en el contador', ()=>{
        wrapper = shallow(<CounterApp value={100}/>);
        const numeroInicial = wrapper.find('h2').text().trim();
        expect(numeroInicial).toBe("100");
    });
    
    test('debe incrementar con el boton +1',()=>{
        wrapper.find('button').at(0).simulate('click');
        const counter = wrapper.find('h2').text().trim();
        expect(counter).toEqual("1");

    })

    test('debe incrementar con el boton -1',()=>{
        wrapper.find('button').at(2).simulate('click');
        const counter = wrapper.find('h2').text().trim();
        expect(counter).toEqual("-1");
    });

    test('debe incrementar con el boton -1',()=>{
        wrapper.find('button').at(1).simulate('click');
        const counter = wrapper.find('h2').text().trim();
        expect(counter).toEqual("0");
    });
})