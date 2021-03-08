
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('useForm test', () => {
    
    test('should show the initial values after reset ', () => {
        
        const initialState = {
            name: 'Alejandro',
            email: 'a.lazaro.g7@gmail.com'
        }
        
        const { result } = renderHook(() => useForm(initialState));
        const [ values, handleInputChange, reset ] = result.current;
        
        //console.log(handleInputChange);
        
        act(() =>{

            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Alejandro Lazaro'
                }
            });

            reset();
        });
        expect(JSON.stringify(result.current[0])).toBe(JSON.stringify(initialState));
    })
    
    test('should change the initial values', () => {
        const initialState = {
            name: 'Alejandro',
            email: 'a.lazaro.g7@gmail.com'
        }
        
        const { result } = renderHook(() => useForm(initialState));
        const [ , handleInputChange,  ] = result.current;
        
        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'Alejandro Lazaro'
                }
            })
        })

        const [values,,] = result.current;

        expect(values['name']).toBe('Alejandro Lazaro');


    })
    
    
})
