import React, { useState } from 'react';
import { MultipleCustomHook } from '../03-example/MultipleCustomHook';

export const RealExampleRef = () => {

    const [show, setshow] = useState(false)
    return (
        <>
            <h1>Refexample</h1>
            <div style={{padding:"10px 0 10px 0"}}>
                {
                    show && <MultipleCustomHook /> 
                }
            </div>
            <button 
                className={`btn ${show?'btn-danger':'btn-success'}`}
                onClick={()=> {
                    setshow(!show)
                }}>
                {show?'OCULTAR':'MOSTRAR'}
            </button>
            
        </>
    )
}
