import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GifExpertApp = ({defaultCategories = [] })=>{


    const [category, setcategory] = useState(defaultCategories);

    const addCategory = (v)=>{
        setcategory([v, ...category ]);
    };

    return (
        <>
            
            <h2>GifExpertApp</h2>
            <hr/>  
            <AddCategory setcategory = {addCategory} />
            <ol>
                    {
                        category.map((c)=><GifGrid key={c} category={c} />)
                    }
            </ol>
        </>
    );
};

export default GifExpertApp;