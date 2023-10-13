import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'
export default function HostLAyout() {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
  return (
    <>
    <nav className=' flex gap-8'>
        <NavLink 
         style={({isActive})=> isActive ? activeStyles : null}
        to="."
        end>
          Dashboard
          </NavLink>
        <NavLink 
         style={({isActive})=> isActive ? activeStyles : null}
        to="income">
          Income
          </NavLink>
          <NavLink 
         style={({isActive})=> isActive ? activeStyles : null}
        to="vans">
          Vans
          </NavLink>
        <NavLink 
        style={({isActive})=> isActive ? activeStyles : null}
        to="review">
          Review
          </NavLink>
    </nav>
    <Outlet/>
    </>
  )
}
