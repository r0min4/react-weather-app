import React from "react";
export default function Temp() {
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
            19
          </span>
          <a href="#" className="units temp" id="centigrad">
            °C
          </a>
          <span className="units">|</span>
          <a href="#" className="units" id="faren">
            °F
          </a>
        </div>
      </div>
    </div>
  );
}
