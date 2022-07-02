import {INC_COUNT,DEC_COUNT} from './actiontypes';
const initialState ={
    counter: 0
}
export const reducer = (state=initialState, {type, payload}) =>{
switch(type){
    case INC_COUNT:
        return {
            ...state,
            counter:state.counter+payload
        }
        case DEC_COUNT:
            return {
                ...state,
                counter:state.counter-payload
            }
            default:
                return state
}
}