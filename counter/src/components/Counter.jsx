import React from 'react'

function Counter() {
    const [count,setCount]=React.useState(0);
    const handleChange =(v) => {
        setCount(count+v);
    }
    const handleDouble =() => {
        setCount(count*2)
    }
  return (
    <div>
        <h2>Counter</h2>
        <h4>{count}</h4>
        <button onClick={()=>{handleChange(1)}}>+</button>
        
        <button onClick={()=>{handleChange(-1)}}>-</button>
        <button onClick={handleDouble}>Double</button>
    </div>
  )
}

export default Counter