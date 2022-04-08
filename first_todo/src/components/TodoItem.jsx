import React from 'react'

function TodoItem({item}) {
  return (
    <div>
        <h3 className="List_items">{item}</h3>
    </div>
  )
}

export default TodoItem