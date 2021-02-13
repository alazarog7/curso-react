import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement , reset} = useCounter();
    return (
        <>
         <h1>Counter with hook: {state} </h1>   
         <hr/>
         <button className="btn btn-succes" onClick={()=>increment(3)}>+1</button>
         <button className="btn btn-info" onClick={()=>decrement(3)}>-1</button>
         <button className="btn btn-danger" onClick={reset}>reset</button>
        </>
    )

    // el argumento por defecto de las funciones es event 
}
