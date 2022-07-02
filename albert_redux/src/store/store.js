import { legacy_createStore ,combineReducers,applyMiddleware} from "redux";
import {reducer} from '../features/Todo/reducer';
import {reducer as CounterReducer} from '../features/Counter/reducer';
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    TodoState:reducer,
    CounterState:CounterReducer
})
export  const store =legacy_createStore(rootReducer,applyMiddleware(thunk));