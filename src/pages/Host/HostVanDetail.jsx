import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'
import Colors from '../../helper/color'

export default function HostVanDetail() {
    const [currentVan, setCurrentVan] = useState(null)
    const params = useParams()
        useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
        .then(res=> res.json())
        .then(data=> setCurrentVan(data.vans))
        
    },[])
    if(!currentVan){
        return <h1>Loading....</h1>
    }
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

  return (
    <section>
        <Link
        to=".."
        relative="path"
        className="back-button"
        >&larr;<span className='pt-4'>Back to all vans</span></Link>
    <div className='bg-white py-6 px-10 my-8'>
        <div className='flex gap-10'>
        <img className='w-72' src={currentVan.imageUrl} alt="" />

        <div className='pt-10'>
            <p className={`py-3 px-8 rounded-lg text-white ${Colors(currentVan.type)}`}>{currentVan.type}</p>
            <h3>{currentVan.name}</h3>
            <p>$<span>{currentVan.price}</span>/day</p>
        </div>
        </div>

    </div>
        <nav className=' flex gap-8 py-6'>
            <NavLink 
            end
             style={({isActive})=> isActive ? activeStyles : null}
            to='.'>
            Details
            </NavLink>
            <NavLink 
             style={({isActive})=> isActive ? activeStyles : null}
            to='price'>
                Price
                </NavLink>
            <NavLink 
             style={({isActive})=> isActive ? activeStyles : null}
            to='photo'>
                Photo
                </NavLink>
        </nav>
        <Outlet context={{currentVan}}/>
    </section>
  )
}
