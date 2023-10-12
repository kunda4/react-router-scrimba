import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
  return (
    <div className='bg-white py-6 px-10 my-8'>
        <div className='flex gap-10'>
        <img className='w-72' src={currentVan.imageUrl} alt="" />

        <div className='pt-10'>
            <p className={`py-3 px-8 rounded-lg text-white ${Colors(currentVan.type)}`}>{currentVan.type}</p>
            <h3>{currentVan.name}</h3>
            <p>$<span>{currentVan.price}</span>/day</p>
        </div>
        </div>
        <div className='flex flex-col gap-6 py-4'>
        <p><span className='font-semibold'>Names:</span> {currentVan.name}</p>
        <p> <span className='font-semibold'>Category:</span> {currentVan.type}</p>
        <p><span className='font-semibold'>Descriprion:</span> {currentVan.description}</p>
        <p> <span className='font-semibold'>Visibility:</span> Public</p>
        </div>


    </div>
  )
}
