import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const context = useContext(UserContext);

    console.log(context);
    return (
        <>
            <h1>LoginScreen</h1>
            <hr/>

            <button className="btn btn-outline-primary" onClick={
                ()=>{
                    context.setUser({
                        id:1234,
                        name:'Alejandro Lazaro Gutierrez'
                    })
                }
            }> Login </button>
        </>
    )
}
