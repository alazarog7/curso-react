import React, { useEffect, useState } from 'react'
import './Effect.css';
import { Message } from './Message';
export const SimpleForm = () => {
    const [form, setform] = useState({
        name:'',
        email:''
    });

    const { name, email } = form;

    const handleInputChange = ({target}) => {
        //console.log(target.value);
        setform({...form, [target.name]: target.value})
    }

    useEffect(()=>{
        console.log("Hey");
    },[email]); //tambien esta pendiente de cambios en metodos
    
    return (
        <>
            <h1>Use Effect</h1>            
            <hr/>
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange = {handleInputChange}/>
            </div>

            <div className="form-group">
                <input 
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="off"
                    value={email}
                    onChange = {handleInputChange}/>
            </div>
            {(name === '123') && <Message/>}
        </>
    )
}
