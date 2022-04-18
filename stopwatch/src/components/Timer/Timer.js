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
setValue3((s)=>{
  if(s>0){
    return s-1
  }else if(s===0){
    setValue2((m)=>{
      if(m>0){
        setValue3(60);
        return m-1;
      }else if(m===0){
        setValue((h)=>{
          if(h>0){
            setValue2(60);
            return h-1;
          }else if(h===0){
            return 0
          }
        })
        return 0;
      }
    })
    return 0;
  }
})
 
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
      <input ref={inputHour}   onChange={(e)=>{
        setValue(e.target.value)}} type="Number"/>
      <input ref={inputMin}   onChange={(e)=>{
        setValue2(e.target.value);
       console.log(inputSec.current.value)
        }}  type="Number"/>
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