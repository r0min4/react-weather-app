import React,{useState, useEffect} from "react";
export default function Temp(props) {
  let [degree , setDegree] = useState(props.temp);
  useEffect(() => {
    setDegree(props.temp);
  }, [props.temp]);
  let icon = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;
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
          <img
            src={icon}
            alt=""
            id="imgicon"
          />
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
