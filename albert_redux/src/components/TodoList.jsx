import React from 'react'
import {useSelector} from 'react-redux'
function TodoList() {
    const todos =useSelector((state)=>state.TodoState.todos)
  return (
    <div>{todos.map((todo)=>{
        return <div key ={todo.id}>{todo.title}</div>
    })}</div>
  )
}

export default TodoList