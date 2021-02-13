import React, { useRef } from 'react'

export const FocusScreen = () => {
    
    const intputRef = useRef();

    const handleClick = () => {
        intputRef.current.select();
    }

    return (
        <>
            <div className="mb-3">
                <input 
                    ref = {intputRef}
                    type="text" 
                    className="form-control" 
                    placeholder="Su Nombre"/>
            </div>
            <button className="btn btn-outline-primary" onClick={handleClick}>Focus</button>
        </>
    )
}
