import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhoto() {
    const {currentVan} = useOutletContext()
    return (
      <div>
        <img className='w-72' src={currentVan.imageUrl} alt="" />       
      </div>
    )
}
