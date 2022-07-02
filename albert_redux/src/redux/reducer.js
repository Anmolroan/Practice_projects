import {ADD_TODO} from "./actionTypes"
const initialState={
    todos: [{
        id:1,
        title:"redux",
        status:false
    }]
}

const reducer =(state=initialState,{type,payload}) =>{
    switch(type){
         case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        default:
            return state;
    }
}
export {reducer};