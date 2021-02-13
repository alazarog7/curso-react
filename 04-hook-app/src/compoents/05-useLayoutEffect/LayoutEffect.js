import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './layout.css'
export const LayoutEffect = () => {

    const {state, increment } = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const {author,quote} = !!data&&data[0];
    const [box, setbox] = useState({})

    const pTag = useRef();

    useLayoutEffect(() => {
        setbox(pTag.current.getBoundingClientRect());
    }, [quote])

    
    return (
        <div>
            <h1>Breaking Quotes</h1>
            <hr/>
           
            <blockquote className="blockquote text-right">
                <p className="mb-0" ref={pTag}>{quote}</p>
                <footer className="card-blockquote">{author}</footer>
            </blockquote>
            
            <p>{JSON.stringify(box,null,3)}</p>

            <button className="btn btn-primary" onClick={()=>increment()}>
                Siguiente Quote
            </button>
        </div>
    )
}
