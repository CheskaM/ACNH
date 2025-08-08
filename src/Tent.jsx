import campsite from './assets/images/campsite.jpg'
import React, { useState, useEffect } from 'react'

function Tent () {

    const apiKey = import.meta.env.VITE_API_KEY; 
    const [imageUrl, setImageUrl] = useState('');
    const [villagerName, setVillagerName] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        async function fetchVillager() {
            try {
                const response = await fetch('https://api.nookipedia.com/villagers', {
                    headers: {
                        'X-API-KEY': apiKey,
                        'Accept-Version': '1.7.0',
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache'
                    }
                });
                
                if(!response.ok) {
                    throw new Error('API key is not working');
                }

                const villagers = await response.json();

                if (Array.isArray(villagers) && villagers.length > 0) {
                    const randomVillager = villagers[Math.floor(Math.random() * villagers.length)];
                    setImageUrl(randomVillager.image_url);
                    setVillagerName(randomVillager.name);
                } else {
                    console.error('Villager API is not working.')
                }

            } catch (err) {
                console.error(`Error`, err.message);
            }
        } 

        if (isOpen) {
            fetchVillager();
        }
        
    }, [isOpen, apiKey]);

    function handleClick(){
        setIsOpen(!isOpen);
    }
    

    return ( 

        /*TENT COVER*/
        <div className={`tent-box ${isOpen ? "active" : ""}`} onClick={handleClick} style={{ cursor: 'pointer'}}>
            <div className='inside-tent'>
                {!isOpen? (
                    <p className='knock-text'>KNOCK KNOCK!!</p>
                ) : (
                    <div className='tent-villager'>
                        {imageUrl ? (
                            <>
                                <img className='random-villager' src={imageUrl} alt="random villager"/>
                                <p className='randomVillager-name'>{villagerName}</p>
                            </>
                        ):(
                            <p>Villager Loading...</p>
                        )}

                    </div>
                )}


                
            </div>
        </div>
    );

}

export default Tent




