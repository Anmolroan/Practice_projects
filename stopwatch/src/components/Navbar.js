import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
    <Link to="/">Stopwatch</Link>
    <Link to="/timer">Timer</Link>
    </div>
  )
}

export default Navbar