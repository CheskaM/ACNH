import { Link } from "react-router-dom"
import Tent from "../Tent"
import { useState, useEffect } from "react"


export function Home() {

    return (
        <>  
            <section id="home-header">
                <h2>Click the tent to meet your Campsite Visitor!</h2>
            </section>

            <article className="tent-container">
                <Tent/>
            </article>
            
            
        </>

    )
}