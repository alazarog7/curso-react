import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHook = () => {

    const {state, increment } = useCounter(1)
    const {loading, data, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const {author,quote} = !!data&&data[0];

    
    return (
        <div>
            <h1>Breaking Quotes</h1>
            <hr/>
            {
                loading ? 
                (
                    <div className="alert alert-info text-center">Loading ... </div>
                ): 
                (
                        <blockquote className="blockquote text-right">
                          <p className="mb-0">{quote}</p>
                          <footer className="card-blockquote">{author}</footer>
                        </blockquote>
                )

            }

            <button className="btn btn-primary" onClick={()=>increment()}>
                Siguiente Quote
            </button>
        </div>
    )
}
