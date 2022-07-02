import { ADD_TODO } from "./actionTypes";

export const addTodo = (payload) =>{
    return {
        type: ADD_TODO,
        payload: payload
    }
}