import React,{useState} from 'react'

function Two() {
    console.log('Two');
    const [counter,setCounter]= useState(5);
  return (
    <div>
    one
        <div>{counter}</div>
        <button onClick={()=>setCounter(counter+1)}>update one</button>
    </div>
  )
}

export default React.memo (Two)