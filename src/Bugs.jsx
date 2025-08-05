import {useEffect} from 'react'

function Bugs() {
    const apiKey = import.meta.env.VITE_API_KEY; /*we do this portion so we don't expose our apiKey, this is strictly for Vite */

    useEffect(() => {
        fetch('https://api.nookipedia.com/nh/bugs', {
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
        .then(bugs => console.log(`There's Bugs data present here.`, bugs))
        .catch(err => console.error(`Error`, err.message));
    }, []);

    return(
        <div>
            <h3>BUGS</h3>
        </div>
    );

}

export default Bugs