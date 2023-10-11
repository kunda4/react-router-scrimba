import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-[#FFF7ED]">
    <Link to ="/">#VANLIFE</Link>
      <nav className=" flex gap-4">
        <Link to ="/host">Host</Link>
        <Link to ="/about">About</Link>
        <Link to ="/vans">Vans</Link>
      </nav>
    </header>
  )
}
