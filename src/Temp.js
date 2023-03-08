import React,{useState} from "react";
export default function Temp(props) {
  let[degree , setDegree] = useState(props.temp);
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
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt=""
            id="imgicon"
          />
          <br />
          <span className="temperature" id="temperature">
            {Math.round(degree) }
          </span>
          <a href="#" className="units temp" id="centigrad" onClick={toCentigrade}>
            °C
          </a>
          <span className="units">|</span>
          <a href="#" className="units" id="faren" onClick={faren}>
            °F
          </a>
        </div>
      </div>
    </div>
  );
}
