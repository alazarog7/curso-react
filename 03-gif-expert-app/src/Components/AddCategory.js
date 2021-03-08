import React, { useState } from 'react'
import PropType from 'prop-types';
const AddCategory = ({setcategory})=> {
    
    const [inputValue, setinputValue] = useState("");

    const handleInputChange = (e)=>{
       setinputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.length > 0){
            setcategory([inputValue])
            setinputValue('');
        }
        
    } 

    return (
        <form onSubmit={handleSubmit}>
           <h1>{inputValue}</h1>
           <input 
                type="text" 
                value={inputValue}
                onChange = {handleInputChange} 
           />
        </form>
    )
}

AddCategory.propTypes = {
    setcategory: PropType.func.isRequired 
}


export default AddCategory;