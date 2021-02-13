import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Card } from './Card';

export const Resultado = () => {

    
    
    const {data} = useFetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCx5NtalTMq21B_CTyEfKi8sOh6vT9mSzc');

    return (
        <>
            {
                !data?
                (
                    <div className="alert alert-info text-center">Loading ... </div>
                ): 
                (
                    data.items.map(x => <Card key={x.id} valor={x}/>)
                )
            }
            
            
        </>
    )
}
