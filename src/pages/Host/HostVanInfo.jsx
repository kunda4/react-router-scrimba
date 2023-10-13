import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {
    const {currentVan} = useOutletContext()
  return (
    <div>
            <div className='flex flex-col gap-6 py-4'>
        <p><span className='font-semibold'>Names:</span> {currentVan.name}</p>
        <p> <span className='font-semibold'>Category:</span> {currentVan.type}</p>
        <p><span className='font-semibold'>Descriprion:</span> {currentVan.description}</p>
        <p> <span className='font-semibold'>Visibility:</span> Public</p>
        </div> 
    </div>
  )
}
