import React,{useState} from "react";
import axios from "axios";
import "./styles.css";
import City from "./City.js";
import Temp from "./Temp.js";
import Info from "./Info.js";
import Footer from "./Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  let[city , setCity] =useState(""); 
  let[humidity , setHumidity] =useState(""); 
  let[wind , setWind] =useState(undefined); 
  let[temp, setTemp] =useState(""); 
  let[description, setDescription] =useState(""); 
  let[dt, setDt] =useState(0);
  let[icon, setIcon] = useState("");

  function result(response){
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setDt(response.data.dt);
    setIcon(response.data.weather[0].icon);
    console.log(response.data.main.temp);
  }
  function updateCity(event){
    setCity(event.target.value);
  }
  function searchCity(event){
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=743bee57fddbfaf52447193a87d5dd25&units=metric`;
    axios.get(url).then(result); 
  }

  if(wind === undefined){
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
        <City city={city} description={description} dt={dt}/>

          <div className="row">
            <Temp temp={temp} icon={icon}/>
            <Info humidity={humidity} wind={wind}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
