import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { PropTypes } from 'prop-types';

const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);
    const { data:images, loading} = useFetchGifs(category);
   
    return (
        <>
            <h3 className="animate__zoomInLeft">{category}</h3>
            {loading && <p>Cargando ...</p> }
            <div className="card-grid">
                {
                    images.map( img => <GifGridItem key={img.id} {...img}/> )
                }
            </div>
        </>
    );
};

export default GifGrid;


GifGrid.propTypes={
    category: PropTypes.string.isRequired
}

