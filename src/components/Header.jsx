import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Header() {
 
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
  return (
    <header className="flex justify-between p-4 bg-[#FFF7ED]">
    <Link to ="/">#VANLIFE</Link>
      <nav className=" flex gap-4">
        <NavLink 
        style={({isActive})=> isActive ? activeStyles : null}
        to ="/host">       
          Host
          </NavLink>
        <NavLink 
        style={({isActive})=> isActive ? activeStyles : null}
        to ="/about">
          About
          </NavLink>
        <NavLink
        style={({isActive})=> isActive ? activeStyles : null} 
        to ="/vans">
          Vans
        </NavLink>
      </nav>
    </header>
  )
}
