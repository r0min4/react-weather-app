import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Weatherforecastdata(props) {
    function convertDt(){
        let date = new Date(props.forecastdata.dt * 1000);
        let days = ["Sun" , "Mon" , "Tue", "Wed","Thu", "Fri","Sat"]
        return days[date.getDay()];
    }

    return (
        <div>
            <div>{convertDt()}</div>
            <div><WeatherIcon size={32} icon={props.forecastdata.weather[0].icon} /></div>
            <div>
                <span className="maxtemp">{Math.round(props.forecastdata.temp.max)}°</span>
                <span className="mintemp">{Math.round(props.forecastdata.temp.min)}°</span>
            </div>
        </div>

    )
}