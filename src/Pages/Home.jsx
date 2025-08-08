import { Link } from "react-router-dom"
import Tent from "../Tent"
import { useState, useEffect } from "react"


export function Home() {

    return (
        <>  
            <section id="home-header">
                <h2>Click the tents to meet your Island Villagers!</h2>
            </section>

            <article id="island">
                <div className="tent-container">
                    <Tent/>
                </div>
            </article>
            
        </>

    )
}