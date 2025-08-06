import campsite from './assets/images/campsite.jpg'
import React, {useState, useEffect} from 'react'

function Tent() {
    const apiKey = import.meta.env.VITE_API_KEY; /*we do this portion so we don't expose our apiKey, this is strictly for Vite */

    useEffect (() => {
        fetch('https://api.nookipedia.com/villagers', {
            headers: {
                'X-API-KEY': apiKey,
                'Accept-Version': '1.7.0'
            }
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('API key is not working');
            }
            return response.json();
        })
        .then(villagers => console.log(`There's data`, villagers))
        .catch(err => console.error(`Error`, err.message));
    }, []);

    return(
        <>
            <div className="tent-box">
                <img className='tent-img' src={campsite} alt="tent image"></img>
            </div>
        </>
    )
}

export default Tent




    /*return(
        <div className='tent-container'>
            <img id="random-image" src="Random image">Random Image</img>
            <button id="btn">Get another random image</button>
        </div>
    );

    const imgEl = document.getElementById('random-image');
    const btn = document.getElementById('btn');

    const srcArray = [] */


    /*return(

        <div className="tent">
           <img className="tent-image" src={campsite} alt="picture of tent"></img>
           <h2>Tent</h2>
           <p>I might put the information about the villager here</p>

        </div>





    ); */