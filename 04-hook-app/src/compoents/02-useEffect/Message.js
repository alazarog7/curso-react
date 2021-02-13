import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setcoords] = useState({x:0,y:0});

    const mouseEvent = (e) =>{
        console.log("registrando");
        const coordenadas = {x: e.x, y:e.y};
        setcoords(coordenadas);
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseEvent);
        
        return () => {
            window.removeEventListener('mousemove', mouseEvent)
        }
    }, [])
    return (
        <div>
            <h1>Eres Genial</h1>

            <p>
                {coords.x} , {coords.y}
            </p>
        </div>
    )
}
