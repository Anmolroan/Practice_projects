import React,{useState} from 'react'
import One from './one';
import Three from './Three';
import Two from './Two';

function Main() {
    const [count,setCount]= useState(0);
    const [counter,setCounter]= useState(5);
    const [counter3,setCounter3]= useState(10);
console.log("main")
const handleUpdate =() => {
    setCount(count+1);
}
const handleUpdate2=()=>{

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