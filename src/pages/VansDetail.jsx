import React from 'react'
import { useParams } from 'react-router-dom'
import Colors from '../helper/color'
export default function VansDetail() {
    const params = useParams()
    const [van, setVan] =React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res=> res.json())
        .then(data=> setVan(data.vans))
    },[params.id])
  return (
    <div className="">
    {van ? (
        <div className="w-2/5 h-2/5 px-4">
            <img className=' py-8  rounded-lg' src={van.imageUrl} />
            <i className={`py-3 px-8 rounded-lg text-white ${Colors(van.type)}`}>{van.type}</i>
            <h2 className='text-2xl font-bold py-4'>{van.name}</h2>
            <p ><span className='font-bold'>${van.price}</span>/day</p>
            <p className='text-xl py-4'>{van.description}</p>
            <button className='bg-[#FF8C38] text-white text-lg py-4 px-72 font-bold'>Rent this van</button>
        </div>
    ) : <h2>Loading...</h2>}
</div>
  )
}
