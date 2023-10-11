import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function HostLAyout() {
  return (
    <>
    <nav className=' flex gap-8'>
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/review">Review</Link>
    </nav>
    <Outlet/>
    </>
  )
}
