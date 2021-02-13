import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import './Effect.css';


export const FormWithCustomHook = () => {

    const [passwordValido, setpasswordValido] = useState(undefined);
    const [form, handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const envioFormulario = (e) => {
        e.preventDefault();
        console.log(form);
    }

    
    const { name, email, password, password2 } = form;

    useEffect(() => {

        //console.log("validando");
        //console.log(password, password2);
        if(password == password2 && password!="" && password2 != "" ){
            console.log("ingresados");
            setpasswordValido(true);
        } else {
            setpasswordValido(false);
        }
    

       
        //console.log(passwordValido);
    }, [password,password2])

    return (
        <form  onSubmit={envioFormulario}> 
            <h1>Form With Custom Hook</h1>            
            <hr/>
            <div className="mb-3">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nombre"
                    autoComplete="off"
                    value={name}
                    onChange = {handleInputChange}/>
            </div>

            <div className="mb-3">
                <input 
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    autoComplete="off"
                    value={email}
                    onChange = {handleInputChange}/>
            </div>

            <div className="mb-3">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Paaword"
                    autoComplete="off"
                    value={password}
                    onChange = {handleInputChange}/>
            </div>

            <div className="mb-3">
                <input 
                    type="password"
                    name="password2"
                    className={`form-control ${passwordValido?'is-valid':''}`}
                    placeholder="Paaword"
                    autoComplete="off"
                    value={password2}
                    onChange = {handleInputChange}/>
            </div>

            <button type="submit" className="btn btn-success">Enviar</button>

        </form>
    )
}
