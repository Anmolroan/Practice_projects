import React from 'react'
import {Link} from 'react-router-dom';
import SortByStar from '../Sorting/SortByStar';
function Navbar() {
  return (
    <div>
        <Link to='form'>Form</Link>
        <Link to=''>Home</Link>
       <SortByStar/>
    </div>
  )
}

export default Navbar