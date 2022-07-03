import React,{useState} from 'react'
import One from './one';
import Three from './Three';
import Two from './Two';

function Main() {
    const [count,setCount]= useState(0);
console.log("main")
const handleUpdate =() => {
    setCount(count+1);
}
  return (
    <div>
        <One/>
        <Two/>
        <Three></Three>
        {count}
        <button onClick={handleUpdate}>main</button>
    </div>
  )
}

export default Main