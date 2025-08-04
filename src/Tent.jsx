import campsite from './assets/campsite.jpg'
import {useEffect} from 'react'

function Tent() {
    const apiKey = import.meta.env.VITE_API_KEY; /*we do this portion so we don't expose our apiKey */

    useEffect(() => {
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
        <div>
            <h2>API response</h2>
        </div>
    );


    /*return(

        <div className="tent">
           <img className="tent-image" src={campsite} alt="picture of tent"></img>
           <h2>Tent</h2>
           <p>I might put the information about the villager here</p>

        </div>





    ); */

}

export default Tent