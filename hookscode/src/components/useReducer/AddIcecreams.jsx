import React,{useReducer} from 'react'
const initState ={
    icecream:0
}
function AddIcecreams() {
    const reducer = (state,action) =>{
        switch(action.type){
            case "ADD":
            return {...state, icecream: state.icecream+action.value};
            case "BUY":
             return {...state, icecream: state.icecream-action.value}   ;
            default:
                return state;

        }
    }
    const [count ,dispatch] = useReducer(reducer,initState)
  return (
    <div>
    {count.icecream}
    <button onClick={() => dispatch({type: "ADD", value: 1})}>Add</button>
    <button onClick={() => dispatch({type: "BUY", value: count.icecream>0?1:0})}>BUY</button>
    </div>
  )
}

export default AddIcecreams