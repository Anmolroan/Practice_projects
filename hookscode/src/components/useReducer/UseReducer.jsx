import React ,{useReducer,useState} from 'react';
const initState ={
    data: [{title:"first",status:false,id:1}],
}

function UseReducer() {
  const [title,setTitle]=useState("")
  const reducer =(state, action) =>{
    switch(action.type){
      case "ADD_TODO":
        return {...state ,data:[...state.data,action.payload]}
        default:
          return state;
    }
  }
    const [todo,dispatch]= useReducer(reducer,initState);
  return (
    <div>
    <input type="text" placeholder="Add todo" onChange={(e)=>setTitle(e.target.value)}></input>
    <button onClick={()=>dispatch({type:"ADD_TODO",payload:{title,status:false,id:Date.now()}})}>Add TOdo</button>
    {todo.data.map((el)=>{
        return <div key={el.id}>{el.title}</div>
    })}
    </div>
  )
}

export default UseReducer