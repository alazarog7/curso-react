import todoReducer from "../../../compoents/08-useReducer/TodoReducer"
import { demoTodos } from "../../fixtures/demoTodo";


describe('todoReducer test', () => {
    test('should return the default state', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toBe(demoTodos);
    })

    test('should use add action', () => {
        const state = todoReducer(demoTodos, {
            type: 'add',
            payload: {
                id: 3,
                desc: 'programar',
                done: true
            }
        });

        expect(state.length).toEqual(3)
        
    })

    test('should delete a todo', () => {
        const state = todoReducer(demoTodos, {
            type: 'delete',
            payload: 1  
        });

        expect(state.length).toEqual(1)
    })

    test('should toggle a todo', () => {
        const state = todoReducer( demoTodos, {
            type: 'toggle',
            payload: 1
        });

        expect(state[0].done).toEqual(true);
    })
    
    
    
})
