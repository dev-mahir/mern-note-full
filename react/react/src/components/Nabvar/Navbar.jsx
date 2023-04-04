import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/redux/redux-toolkit/counter">Redux</Link>
      </div>
    </div>
  )
}

export default Navbar