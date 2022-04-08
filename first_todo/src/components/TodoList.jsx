import React from 'react'
import Todoitem from "./TodoItem"
function TodoList({list}) {
    console.log(list);
  return (
    <div>
    {list.map(function(item){
       return <Todoitem item={item}/>
    })}
        
    </div>
  )
}

export default TodoList