import React, { useEffect, useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';
import '../05-useLayoutEffect/layout.css';

export const MemoHook = () => {
    const {state, increment} = useCounter(1);
    const [show, setShow] = useState(false);

    const procesoPesado = (iteraciones)=>{
        for(let i = 0; i < iteraciones; i++){
            console.log('ahi vamos');
        }

        return `${iteraciones} veces`;
    }  
    
    const memoProcesado = useMemo(() => procesoPesado( state ), [ state ])

    useEffect(() => {
        procesoPesado( state )
    }, [state])

    return (
        <>

            <h3><small>{state}</small></h3>
            <hr/>

            <p>{memoProcesado}</p>

            <button className="btn btn-info" onClick={()=>increment()}>Aumentar</button>

            <button className="btn btn-success" onClick={()=>{ setShow(!show)}} > Hide / Show {JSON.stringify(show)}</button>
            
        </>
    )
}
