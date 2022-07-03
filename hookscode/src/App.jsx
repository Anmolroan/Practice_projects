import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HookMouse from './components/useEffect/HookMouse'
import CounterOne from './components/useReducer/CounterOne'
import CounterTwo from './components/useReducer/CounterTwo'
import UseReducer from './components/useReducer/UseReducer'
import AddIcecreams from './components/useReducer/AddIcecreams'
import Main from './components/useCallback/Main'
// import HookCounterone from './components/useEffect/HookCounterone'
// import WithObject from './components/WithObject'
// import WithArr from './components/usestate/WithArr'

function App() {
 

  return (
    <div className="App">
    <h4>Hooks</h4>
   {/* <WithArr/> */}
   {/* <HookCounterone/> */}
   {/* <HookMouse/> */}
   {/* <CounterOne/>
   <CounterTwo/> */}
   {/* <UseReducer/>
   <AddIcecreams/> */}
   <Main/>
    </div>
  )
}

export default App
