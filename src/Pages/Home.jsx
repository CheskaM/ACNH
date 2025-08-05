import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <h1>This is the Home Page</h1>
            <Link to="/">Home</Link>
            <Link to="/Bugs">Bugs</Link>
            <Link to="/Fish">Fish</Link>
            <Link to="/VillagerInfo">Villagers</Link>
        </>
    )
}