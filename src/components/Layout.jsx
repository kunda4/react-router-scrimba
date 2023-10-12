import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <div className='bg-[#FFF7ED] px-8'>
        <Header/>
        <main className='px-8'>
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}
