import React from 'react'
import {useState ,useRef,useEffect} from 'react'
import StopTime from './Stopwatch.styles'
function StopWatch() {
  const [minute,setMinutes]= useState(0);
  const [miliseconds,setMiliSeconds]= useState(0);
  const [hour,setHour]=useState(0);
  const [seconds,setSeconds]= useState(0);
  const [flag,setFlag]=useState(false);
  useEffect(()=>{
    const interval=setInterval(()=>{
       
      setMiliSeconds((p)=>{
            if(p===100){
              
              setSeconds((m)=>{
                if(m===60){
                  
                  setMinutes((h)=>{
                    if(h===60){
                      setHour((sh)=>{
                        return sh+1;
                      })
                    }
                    return h+1;
                  })
                  setSeconds(0);
                }
                return m+1
              })
              setMiliSeconds(0)
            }else{
              return (p+1);
            }
                
               
           
        })
    },10)
    return ()=>{
        clearInterval(interval)
    }
        },[])
  
  return (
    <div>
    <StopTime>
    <div>
<span>{hour}</span>
<span>{minute}</span>
<span>{seconds}</span>
<span>{miliseconds}</span>
<div>
<button> RESET</button>
<button  onClick ={()=>{
  setMinutes(0);
  setMiliSeconds(0);
  setHour(0);
  setSeconds(0);
}}>Start</button>
</div>
    </div>
    </StopTime>
    </div>
  )
}

export default StopWatch