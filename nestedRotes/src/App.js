import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Women from './components/Women'

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
        <Route path="/women" element={<Women/>}>
            <Route path=":var"></Route>
        </Route>
    </Routes>
    </div>
  )
}

export default App
