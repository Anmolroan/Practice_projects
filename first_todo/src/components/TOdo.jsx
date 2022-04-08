import React from 'react'
import TodoList from "./TodoList"
export default function TOdo() {
    const [text,setText] = React.useState("");
    const [list ,setList] =React.useState([]);
    const handleAdd =(e)=>{
        setText(e.target.value);
       
    }
    const handleEnter=() => {
        setList([...list,text]);
       
    }
  return (
    <div>
        <input type="text" placeholder = "Do you want to" value={text} onChange={handleAdd}/>
        <button onClick={handleEnter}>Add Todo</button>
        <TodoList list={list}/>
    </div>
  )
}
