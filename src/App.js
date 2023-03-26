import React,{useState} from "react";
import axios from "axios";
import "./styles.css";
import City from "./City.js";
import Temp from "./Temp.js";
import Info from "./Info.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  let[city , setCity] =useState(""); 
  let[weatherData, setWeatherData] = useState({});

  function result(response){
    setWeatherData({
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      dt: response.data.dt,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat
    });


  }
  function updateCity(event){
    setCity(event.target.value);
  }
  function searchCity(event){
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=743bee57fddbfaf52447193a87d5dd25&units=metric`;
    axios.get(url).then(result); 
  }

  if(weatherData.wind === undefined){
    return (
      <div className="container">
        <div className="weather-app">
        <form className="search-form" id="search-form">
          <div className="row">
            <div className="col-9">
              <input
                onChange = {updateCity}
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                autoComplete="off"
                id="city-input"
                className="form-control shadow-sm"
              />
            </div>

            <div className="col-3">
              <input
                onClick={searchCity}
                id="button"
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm"
              />
            </div>
          </div>
          
        </form>

          <div className="row">
 
          </div>
        </div>

      </div>
    );
  }   
  else{
    return (
      <div className="container">
        <div className="weather-app">
        <form className="search-form" id="search-form">
          <div className="row">
            <div className="col-9">
              <input
                onChange = {updateCity}
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                autoComplete="off"
                id="city-input"
                className="form-control shadow-sm"
              />
            </div>

            <div className="col-3">
              <input
                onClick={searchCity}
                id="button"
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm"
              />
            </div>
          </div>
          
        </form>
        <City city={weatherData.city} description={weatherData.description} dt={weatherData.dt}/>

          <div className="row tempBox">
            <Temp temp={weatherData.temp} icon={weatherData.icon}/>
            <Info humidity={weatherData.humidity} wind={weatherData.wind}/>
          </div>
         <Forecast lon={weatherData.lon} lat={weatherData.lat}/>
          
        </div>
        <Footer />
      </div>
    );
  }
}
