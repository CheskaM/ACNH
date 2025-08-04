import campsite from './assets/campsite.jpg'


function Tent() {


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