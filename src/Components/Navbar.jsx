import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
            <Link to="/">
                <button>HOME</button>
            </Link>

            <Link to="/Bugs">
                <button>BUGS</button>
            </Link>

            <Link to="/Fish">
                <button>FISH</button>
            </Link>

            <Link to="/VillagerInfo">
                <button>VILLAGERS</button>
            </Link>
        </>
    )
}