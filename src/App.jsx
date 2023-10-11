import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {
  return (
    <BrowserRouter>
      <header className="flex justify-between p-4 bg-[#FFF7ED]">
      <Link to ="/">#VANLIFE</Link>
        <nav className=" flex gap-4">
          <Link to ="/about">About</Link>
          <Link to ="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

