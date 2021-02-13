import React from 'react'
import './cards.css';
export const Card = ({valor}) => {
    
    const {title,publisher,description,industryIdentifiers} =  valor.volumeInfo;

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <small className="isbn"> ISBN: {industryIdentifiers.map(x => x.identifier+" " )}</small>
                    <h6 className="card-subtitle mb-2 text-muted"> PUBLISHER: {publisher}</h6>
                    <div className="alert alert-info ">{ description || 'Sin descripcion'}</div>
                </div>
            </div> 
            <br/>
            
        </>
    )
}
