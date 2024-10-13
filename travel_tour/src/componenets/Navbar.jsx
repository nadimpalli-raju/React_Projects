import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/Home logo.jpg"
const Navbar = () => {
  return (
    <div className='navbar'>
    <NavLink to={"/"}><img src={logo} alt="" /></NavLink>
    <ul>
        <NavLink to={"/travel"} style={{color: "rgb(108, 108, 108)", textDecoration: "none"}}><li>Travel</li></NavLink>
        <NavLink to={"/pricing"} style={{color: "rgb(108, 108, 108)", textDecoration: "none"}}><li>Pricing</li></NavLink>

    </ul>     
    </div>
  )
}

export default Navbar
