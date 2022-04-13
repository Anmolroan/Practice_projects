import React from 'react'
import {NavLink} from 'react-router-dom';
function Navbar() {
  return (
    <div>
        <NavLink to='/form'>Form</NavLink>
        <NavLink to='/home'>Home</NavLink>
        
    </div>
  )
}

export default Navbar