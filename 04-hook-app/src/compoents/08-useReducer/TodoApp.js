import React, { useEffect, useReducer } from 'react'
import './style.css'
import todoReducer from './TodoReducer';
import { ToggleList } from './ToggleList';
import { TodoAdd } from './TodoAdd';


const init = () => {
    //localStorage.setItem('todos',[{
    //    id: new Date().getTime(),
    //    desc: 'Aprender React',
    //    done: false
    //}]);
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (id) => {
        
        dispatch({
            type:'delete',
            payload:id
        });
    }

    const handleAddTodo = ( newTodo ) => {

        dispatch(  {
            type:'add',
            payload: newTodo
        } );

    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <ToggleList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>
                <div className="col-7">
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>
            </div>    

            
        </div>
    )
}
