import React, { useState, useEffect } from "react";
import "./Forecast.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Weatherforecastdata from "./Weatherforecastdata";




export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastdata, setForecastdata] = useState();

  function checkResponse(response) {
    setForecastdata(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.lan , props.lat]);

  if (loaded === true) {
    return (
      <div className="row" >
        {forecastdata.map(function (day, i) {
          if (i < 5) {
            return (<div className="forecastCenter col" key={i}>
              <Weatherforecastdata forecastdata={day} />
            </div>)
          }
          else{
            return null;
          }

        })}

      </div>
    )
  } else {
    let apiKey = "743bee57fddbfaf52447193a87d5dd25"
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(checkResponse);
  }

}
