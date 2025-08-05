/*This should showcase all the Fish that are in ACNH and can be sorted alphabetically*/


import {useEffect} from 'react'

function Fish() {
    const apiKey = import.meta.env.VITE_API_KEY; /*we do this portion so we don't expose our apiKey, this is strictly for Vite */

    useEffect(() => {
        fetch('https://api.nookipedia.com/nh/fish', {
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
        .then(fish => console.log(`There's Fish data present here.`, fish))
        .catch(err => console.error(`Error`, err.message));
    }, []);

    return(
        <div>
            <h4>FISH</h4>
        </div>
    );

}

export default Fish