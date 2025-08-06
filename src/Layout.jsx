import Header from "./Components/Header"
import { Navbar } from './Components/Navbar'
import Footer from "./Components/Footer"
import { Outlet } from 'react-router-dom'


export function Layout() {
    return (
        <>
            <Header/>
                <nav>
                    <Navbar/>
                </nav>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </>
    )
}