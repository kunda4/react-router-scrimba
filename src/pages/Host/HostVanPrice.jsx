import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPrice() {
    const {currentVan} = useOutletContext()
    return (
      <div>
        <p>$<span>{currentVan.price}</span>/day </p>     
      </div>
    )
}
