import React,{useState, useEffect} from "react";
import WeatherIcon from "./WeatherIcon";
export default function Temp(props) {
  let [degree , setDegree] = useState(props.temp);
  useEffect(() => {
    setDegree(props.temp);
  }, [props.temp]);
  function toCentigrade(event){
    event.preventDefault();
    setDegree(props.temp);
  }
  function faren(event){
    event.preventDefault();
    setDegree((props.temp*1.8) +32);
  }
  return (
    <div className="col-6">
      <div className="clearfix">
        <div className="float-left all">
          {console.log(`temp: ${props.icon}`)}
          <WeatherIcon icon={props.icon}/>
          <br />
          <span className="temperature" id="temperature">
            {Math.round(degree) }
          </span>
          <a href="localhost" rel="noreferrer" className="units temp" id="centigrad" onClick={toCentigrade}>
            °C
          </a>
          <span className="units">|</span>
          <a href="localhost" rel="noreferrer" className="units" id="faren" onClick={faren}>
            °F
          </a>
        </div>
      </div>
    </div>
  );
}
