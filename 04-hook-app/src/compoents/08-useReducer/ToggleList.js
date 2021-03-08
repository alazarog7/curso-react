import React from 'react'
import { ToggleListItem } from './ToggleListItem'

export const ToggleList = ({
    todos,
    handleDelete,
    handleToggle
}) => {
    return (
          <ul className="list-group">
              {
                  todos.map( (t, index) => <ToggleListItem key={ t.id } todo={t} index={index} handleDelete={handleDelete} handleToggle={handleToggle}/>)
              }
           </ul>  
        
    )
}
