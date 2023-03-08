import React from "react";
export default function Info(props) {
  return (
    <div className="col-6">
      <ul>
        <li id="humidity">Humidity: {props.humidity}% </li>
        <li id="wind">Wind: {props.wind} km/h</li>
      </ul>
    </div>
  );
}
