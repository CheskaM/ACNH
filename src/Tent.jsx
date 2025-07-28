import campsite from './assets/campsite.jpg'


function Tent() {

    return(

        <div className="tent">
           <img className="tent-image" src={campsite} alt="picture of tent"></img>
           <h2>Tent</h2>
           <p>I might put the information about the villager here</p>
        </div>
    );

}

export default Tent