import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
    <div className='bg-hero  flex flex-col py-44 px-24 bg-cover gap-10'>
        <h1 className='text-white text-5xl font-bold leading-10'>You got the travel plans, we got the travel vans.</h1>
        <p className='text-white text-large font-bold'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link className='bg-[#FF8C38] text-white justify-center text-lg py-4 px-72 font-bold' to="vans">Find your van</Link>
    </div>
    </>
  )
}
