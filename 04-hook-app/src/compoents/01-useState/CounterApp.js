import React, { useState } from 'react'
import './Counter.css'
export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1:10,
        counter2:9
    })

    const {counter1,counter2}= counter;
    return (
        <>
           <h1>
               Counter1 {counter.counter1}
           </h1>
           <h1>
               Counter2 {counter.counter2}
           </h1>
           <hr/>
           <button className="btn btn-primary" onClick={
               ()=> {
                   setCounter({...counter,counter1:counter1+1 })
               }
           }>
               +1
           </button>
        </>
    )
}
