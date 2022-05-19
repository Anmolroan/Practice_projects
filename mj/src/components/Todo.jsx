import React from 'react'
import{useState} from 'react'
function Todo() {
    const [text,setText]=useState("");
    const [data,setData]=useState([]);
    const handleAdd =()=>{
        setData([...data,text]);
        console.log(data)
    }
  return (
    <div>
        <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
        <button onClick={handleAdd}>add</button>
    
    </div>
  )
}

export default Todo