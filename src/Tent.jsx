import campsite from './assets/images/campsite.jpg'
import { useState, useEffect} from 'react'

function Tent () {
    
    const [villagers, setVillagers] = useState([]); /*array container*/
    const [selectedVillager, setSelectedVillager] = useState(null);

    const apiKey = import.meta.env.VITE_API_KEY; /*we do this portion so we don't expose our apiKey, this is strictly for Vite */

    useEffect(() => {
        fetch('https://api.nookipedia.com/villagers', {
            headers: {
                'X-API-KEY': apiKey,
                'Accept-Version': '1.7.0'
            }
        })
        .then(response => { /* I just like having this to double check myself if my API is working or not - I got this from a video in youtube (in my credits) */
            if(!response.ok) {
                throw new Error('API key is not working');
            }
            return response.json();
        }) 
        .then(villagers => {
            setVillagers(villagers);
        }) /* data storage for villagers (setVillagers) */
        .then(villagers => console.log(`Villager's data is present`, villagers))
        .catch(err => console.error(`Error`, err.message));
    }, []);

    const getRandomVillager = () => {
        if (villagers.length === 0) {
            console.error("Error: No Villager found.");
            return;
        }

        let randomIndex;
        let newVillager;

        do {
            randomIndex = Math.floor(Math.random()*villagers.length);
            newVillager = villagers[randomIndex];
        } while (selectedVillager && newVillager.id === selectedVillager.id);

        setSelectedVillager(newVillager);
    };

    return{
        
    }
}

export default Tent





