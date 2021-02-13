import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';
import '../05-useLayoutEffect/layout.css';

export const Memorize = () => {
    const {state, increment} = useCounter(1);
    const [show, setShow] = useState(false);
    return (
        <>

            <h1><Small value={state}/></h1>
            <hr/>
            <button className="btn btn-info" onClick={()=>increment()}>Aumentar</button>

            <button className="btn btn-success" onClick={()=>{ setShow(!show)}} > Hide / Show {JSON.stringify(show)}</button>
            
        </>
    )
}
