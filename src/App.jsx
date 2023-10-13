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
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPrice from "./pages/Host/HostVanPrice"
import HostVanPhoto from "./pages/Host/HostVanPhoto"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans" element={<Vans/>}/>
          <Route path="/vans/:id" element={<VansDetail/>}/>
          <Route path="host" element={<HostLAyout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="review" element={<Review/>}/>
            <Route path="vans" element={<HostVans/>}/>
            <Route path="vans/:id" element={<HostVanDetail/>}>
              <Route index element={<HostVanInfo/>}/>
              <Route path="price" element={<HostVanPrice/>}/>
              <Route path="photo" element={<HostVanPhoto/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

