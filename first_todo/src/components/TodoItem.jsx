import React from 'react'

function TodoItem({title,id,status,handleDelete}) {
    console.log(title,status,id);
  return (
    <div>
        <h3 className="List_items">{title} <button onClick={()=>handleDelete(id)}>Delete</button></h3>
    </div>
  )
}

export default TodoItem