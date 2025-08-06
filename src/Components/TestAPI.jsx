import campsite from './assets/images/campsite.jpg'
import {useEffect} from 'react'

function TestAPI() {
    const apiKey = import.meta.env.VITE_API_KEY; /*we do this portion so we don't expose our apiKey, this is strictly for Vite */

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

}

export default TestAPI