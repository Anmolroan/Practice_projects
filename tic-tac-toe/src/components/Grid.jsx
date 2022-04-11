import React from 'react'
import Square from './Square'
import "./Grid.css"
function Grid() {
  const [state,setState] =React.useState(false);
  const [count,setCount] = React.useState(0);
  const handleInc =()=>{
    setCount(count+1);
    return count;
  }
  const changeState = ()=>{
    setState(!state)
  }
  
  
  return (
    <div className="grid">
    {
     
      [1,2,3].map(()=>{
        return [1,2,3].map(()=>{
         
           return ( <Square state={state} changeState={changeState} />
           
           )
        })
    })
    
    }
    </div>
  )
}

export default Grid