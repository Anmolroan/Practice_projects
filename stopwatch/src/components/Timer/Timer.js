import React from 'react'
import {useState,useRef,useEffect} from 'react'
import Time from './Timer.styles';
function Timer() {
    // const [minute,setMinutes]= useState(0);
    // const [seconds,setSeconds]= useState(0);
    // const [hour,setHour]=useState(0);
    const [value,setValue]= useState("")
    const [value2,setValue2]= useState("")
    const [value3,setValue3]= useState("")
    const [set,reSet]=useState(true);
    const inputSec =useRef(null);
    const inputMin =useRef(null);
    const inputHour =useRef(null);
 
  return (
   
    <div>
    
    {
      set ?  <div>
     
      
<span>{inputHour.current!==null?inputHour.current.value :"00"}</span>
<span>{inputMin.current!==null?inputMin.current.value :"00"}</span>
<span>{inputSec.current!==null?inputSec.current.value :"00"}</span>

    </div>
    :  <div>
      <input ref={inputHour}  value={value} onChange={(e)=>{setValue(e.target.value)}} name="hour"/>
      <input ref={inputMin}  value={value2} onChange={(e)=>{setValue2(e.target.value)}}  name="min"/>
      <input ref={inputSec} value={value3} onChange={(e)=>{setValue3(e.target.value)}} />
    </div>
    }
    
 
  
    <button  onClick ={()=>reSet(true)}> start </button>
<button  onClick ={()=>reSet(false)}>Reset</button>
   
   
    
    </div>
  
  )
}

export default Timer