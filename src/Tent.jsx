import campsite from './assets/campsite.jpg'


function Tent() {

    /*const apiKey = "4887c202-881d-407a-b782-0e1cc34622a2";
    const url = `https://api.nookipedia.com/villagers?=${apiKey}`;*/

    fetch(`https://api.nookipedia.com/villagers/${"4887c202-881d-407a-b782-0e1cc34622a2"}`)
        .then(response => response.json())
        .then(data => console.log(data));


    /*return(

        <div className="tent">
           <img className="tent-image" src={campsite} alt="picture of tent"></img>
           <h2>Tent</h2>
           <p>I might put the information about the villager here</p>

        </div>





    ); */

}

export default Tent

/*fetch("https://api.nookipedia.com/villagers")
    .then((res) => res.json())
    .then((data) => console.log(data));*/