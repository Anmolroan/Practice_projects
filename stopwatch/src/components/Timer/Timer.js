import React from 'react'
import {useState,useRef,useEffect} from 'react'
import Time from './Timer.styles';
function Timer() {
    // const [minute,setMinutes]= useState(0);
    // const [seconds,setSeconds]= useState(0);
    // const [hour,setHour]=useState(0);
    const [value,setValue]= useState(0)
    const [value2,setValue2]= useState(0)
    const [value3,setValue3]= useState(0)
    const [stop,setStop]= useState(false)
    const [set,reSet]=useState(true);
    const inputSec =useRef(null);
    const inputMin =useRef(null);
    const inputHour =useRef(null);
    const [flag,setFlag]=useState(false);
useEffect(()=>{
if(flag){
   const interval=setInterval(()=>{

 
  },1000)
  return ()=>{
    clearInterval(interval)
  }
}
},[flag])
  return (
   
    <div>
    
    {
      set ?  <div>
     
      
<span>{value}</span>
<span>{value2}</span>
<span>{value3}</span>

    </div>
    :  <div>
      <input ref={inputHour}   onChange={(e)=>{setValue(e.target.value)}} type="Number"/>
      <input ref={inputMin}   onChange={(e)=>{setValue2(e.target.value)}}  type="Number"/>
      <input ref={inputSec}  onChange={(e)=>{setValue3(e.target.value)}} type="Number"/>
    </div>
    }
    
 
  
 
   {  !stop ?
     <button  onClick ={()=>{
      reSet(true);
      setFlag(true);
      setStop(true)
      }}> Start </button>
      :<button onClick={()=>{
        setStop(false);
        setFlag(false);
        }}>Stop</button>}
    
<button  onClick ={()=>{
  reSet(false)
 
  }}>Reset</button>
   
   
    
    </div>
  
  )
}

export default Timer