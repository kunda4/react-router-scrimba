import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VansDetail from "./pages/Vans/VansDetail"
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Review from "./pages/Host/Review"
import HostLAyout from "./components/HostLAyout"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans" element={<Vans/>}/>
          <Route path="/vans/:id" element={<VansDetail/>}/>
          <Route path="/host" element={<HostLAyout/>}>
            <Route path="/host" element={<Dashboard/>}/>
            <Route path="/host/income" element={<Income/>}/>
            <Route path="/host/review" element={<Review/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

