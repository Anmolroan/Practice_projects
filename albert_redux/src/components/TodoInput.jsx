import React from 'react'
import {useDispatch} from 'react-redux';
import {addTodo} from "../features/Todo/action"
function TodoInput() {
    const [title,setTitle]=React.useState("");
    const dispatch=useDispatch();
    const handleAdd=() => {
        const payload={
            title,
            status:false,
            id:Date.now(),
        };
        const action = addTodo(payload)
        dispatch(action)
    }
  return (
    <div>
        <h3>Add Todo</h3>
        <input type="text" placeholder="add something" onChange={(e)=>{setTitle(e.target.value)}}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput