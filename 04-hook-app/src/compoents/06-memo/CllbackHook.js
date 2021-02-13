import React, { useCallback, useState } from 'react'
import '../05-useLayoutEffect/layout.css';
import { ShowIncrement } from './ShowIncrement';

export const CllbackHook = () => {

    const [counter, setCounter] = useState(0);
    const incrementar = useCallback(
        (num) => {
            setCounter(c => c + num)
        },
        [setCounter]
    )
    return (
        <>
            <h1>Callback Hooks!!</h1>
            <h3>Counter {counter}</h3>
            <ShowIncrement increment={incrementar}/>
            
        </>
    )   
}
