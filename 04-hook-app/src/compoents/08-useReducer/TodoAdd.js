import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({
    handleAddTodo
}) => {

    const [ {description}, handleInputChange, reset] = useForm({description: ''})

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description !=  ''){
            handleAddTodo({
                id: new Date().getTime(),
                desc: description,
                done: false
            });
        }

        reset();
    }


    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" 
                    name="description"
                    className="form-control"
                    placeholder="Aprender ..."
                    value={ description }
                    onChange={handleInputChange}
                    autoComplete="off"/>
            <div className="d-grid gap-2">
                <button type="submit"
                        className="btn btn-outline-primary mt-1">
                        Agregar
                </button>
            </div>
        </form>
    )
}
