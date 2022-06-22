import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <Link to="women">WOMEN</Link>
        <Link to="men">MEN</Link>
        <Link to="beauty">BEAUTY</Link>
        <Link to="kids">KIDS</Link>
        <Link to="home">HOME</Link>
        <Link to="offers">OFFER</Link>
        <Link to="designers">COMMUNITY</Link>
        <Link to="why">MODENESS</Link>
    </div>
  )
}

export default Navbar