import React, { useEffect } from 'react'
import "../server"
import Colors from '../helper/color'

export default function Vans() {
    const [vans, setVans] = React.useState([])
    useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
        
    }, [])
    const vansElement = vans.map(values=>(
        <div key={values.id} className='py-12 px-20'>
            <img className='w-80 h-80 rounded-lg' src={values.imageUrl} alt="" />
            <div>
                <h3 className='text-2xl font-bold py-4'>{values.name}</h3>
                <p className='py-6'>${values.price}<span>/day</span></p>
            </div>
            <i className={`py-3 px-8 rounded-lg text-white ${Colors(values.type)}`}>{values.type}</i>
        </div>
    ))
  return (
    <div>
    <h1 className='text-4xl font-bold text-center py-4'>Explore our van options</h1>
    <div className='grid grid-cols-2 justify-around'>
     {vansElement}
    </div>
    </div>
  )
}
