import { legacy_createStore ,combineReducers} from "redux";
import {reducer} from '../features/Todo/reducer';
import {reducer as CounterReducer} from '../features/Counter/reducer';
const rootReducer = combineReducers({
    TodoState:reducer,
    CounterState:CounterReducer
})
export  const store =legacy_createStore(rootReducer);