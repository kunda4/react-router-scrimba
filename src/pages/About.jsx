import abtImg from '../assets/abtPic.png'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
    <div className=" bg-[#FFF7ED] pb-14">
    <img src={abtImg} className="" />
    <div className="">
        <h1 className='text-5xl py-14 px-8 font-bold'>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className='text-large pb-4 px-8'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
        <p className='text-large pb-14 px-8'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
    </div>
    <div className="bg-[#FFCC8D] py-14 px-8 mx-16">
        <h2 className='text-4xl font-bold pb-8'>Your destination is waiting.<br />Your van is ready.</h2>
        <Link className="text-large py-4 px-10 text-white text-xl rounded-md bg-[#161616]" to="/vans">Explore our vans</Link>
    </div>
</div>
<footer className='bg-[#252525] text-[#AAAAAA] py-8 px-96 '>Ⓒ 2022 #VANLIFE</footer>
</>
  )
}
