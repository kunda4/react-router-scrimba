import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const hostVansEls = vans.map(van => (
        <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className=""
        >
            <div className="flex gap-6 bg-white px-6 py-6" key={van.id}>
                <img className="w-32 h-32 rounded-md" src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="pt-6">
                    <h3 className="text-2xl font-semibold">{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="text-3xl font-bold">Your listed vans</h1>
            <div className="px-6 py-6">
                {
                    vans.length > 0 ? (
                        <section className="flex flex-col gap-5">
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}