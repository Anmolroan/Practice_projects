import React from 'react'
import "./Square.css"
function Square({state,changeState}) {
 
    const [value,setValue] =React.useState(null);
    
    const changeValue =()=>{
        changeState();
        if(state){
            setValue("O")
        
        }else {
            setValue("X");
         
        }
        console.log(state)
    }
   
  return (
    <div>
    
    <div className="squares" onClick={changeValue} >{value}</div>
       
    </div>
  )
}

export default Square