import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {incCount,decCount} from '../features/Counter/action'
function Counter() {
    const counter = useSelector((state) =>state.CounterState.counter)
    const dispatch =useDispatch();
  return (
    <div>
    <div>Counter:{counter}</div>
    <button onClick={()=>dispatch(incCount(1))}>Add 1</button>
    </div>
  )
}

export default Counter