import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Weathe() {

    const [filtered,setFiltered]=useState([]);
    const [dis,setDis]=useState('');
    const [weather,setWeather]=useState(null)



const onsea=(event)=>{
    event.target.name=event.target.value;
    setDis(event.target.name)
    
}

const onsearch = (e) => {
    e.preventDefault();
    const apiKey = "736777f2bf3b65e3d9d7047bc3ac07df";

    
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${dis}&appid=${apiKey}`)

      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        console.log("Weather data received:", data);
        setWeather(data);
        setFiltered([...filtered, dis]);
      })
      .catch(error => {
     
        console.error('Error fetching weather data:', error);
      });
  };
  



  return (
    <div>
    <div className='container'>
   
        <form >
                <div className="search"   >
                    
                    
                    <input  className="input-field"  placeholder="Enter Location"  onChange={onsea} />  
                    &nbsp;<span className="search-icon-container">
                    <i className="fa-solid fa-magnifying-glass search-icon"  onClick={onsearch}></i>

                    </span>

                    <div className="recentsearch">
                      {filtered.map((item, index) => (
                         <div className="search-item" key={index}>
                            <i className="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;{item}
                          </div>
                         ))}
                    </div>
                    
                </div>
            </form>

          <img className="weather-image"src='https://i.pinimg.com/originals/9e/76/44/9e76440e228671d77b9afc06887fab3c.png'></img>
                
  {weather && (
    <div className="weather-info">
      <h2>
     {weather.city.name}&nbsp;&nbsp;
      
      </h2>
     
      <span style={{fontSize:"6rem"}}> {(weather.list[0].main.temp - 273.15).toFixed(0)}</span><span style={{fontSize:"3rem"}}>°C</span>
      <div style={{marginLeft:"23rem",fontSize:"1.5rem"}}>

      <div>{weather.list[0].wind.speed * (18 / 5).toFixed(0)}Km/h</div>
      <div>Wind Speed</div>
        </div>
        <div className="humidity">
          <div style={{fontSize:"1.5rem"}} >{(weather.list[0].main.humidity).toFixed(0)}%</div>
          <div >Humidity</div>
        </div>
      
      

    </div>
  )}


           
            </div>
            </div>
      
   
  )
}

export default Weathe
