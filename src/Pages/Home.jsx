import { Link } from "react-router-dom"
import Tent from "../Tent"

export function Home() {

    return (
        <>  
            <section id="home-header">
                <h2>Click the tents to meet your Island Villagers!</h2>
            </section>

            <article id="island">
                <div className="tent-container">
                    <div className="tent1"><Tent/></div>
                    <div className="tent2"><Tent/></div>
                    <div className="tent3"><Tent/></div>
                    <div className="tent4"><Tent/></div>
                    <div className="tent5"><Tent/></div>
                    <div className="tent6"><Tent/></div>
                    <div className="tent7"><Tent/></div>
                    <div className="tent8"><Tent/></div>
                    <div className="tent9"><Tent/></div>
                    <div className="tent10"><Tent/></div>
                </div>
            </article>
            
        </>

    )
}