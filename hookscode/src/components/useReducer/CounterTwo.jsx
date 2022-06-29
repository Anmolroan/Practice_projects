import React ,{useReducer}from 'react'
const initialState ={
    firstCounter:0
};
function CounterTwo() {
   
  
    const reducer = (state,action) => {
        switch(action.type) {
            case 'increment':
                return {...state,firstCounter:state.firstCounter+action.value}
                case 'decrement':
                    return{...state, firstCounter:state.firstCounter-action.value}
                    case 'reset':
                        return initialState
                        default:
                            return state;
        }
        
    }
    const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
    <div>{count.firstCounter}</div>
        <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo