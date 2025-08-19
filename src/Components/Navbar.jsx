import { Link } from "react-router-dom"

export function Navbar() {

    return (
        <>
            <Link to="/">
                <button className="navbar-button">HOME</button>
            </Link>

            <Link to="/Bugs">
               <button className="navbar-button">BUGS</button>
            </Link>

            <Link to="/Fish">
                <button className="navbar-button">FISH</button>
            </Link>

            <Link to="/Villagers">
                <button className="navbar-button">VILLAGERS</button>
            </Link>
        </>
    )
}