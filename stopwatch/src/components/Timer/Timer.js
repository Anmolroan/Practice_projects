import React from 'react'
import {useState} from 'react'
import Time from './Timer.styles'
function Timer() {
    const [minute,setMinutes]= useState(0);
    const [seconds,setSeconds]= useState(0);
    const [hour,setHour]=useState(0);
  return (
    <div>
    <Time>
    <div>
    <span>{hour}</span>
<span>{minute}</span>
<span>{seconds}</span>
<button> </button>
    </div>
    </Time>
    </div>
  )
}

export default Timer