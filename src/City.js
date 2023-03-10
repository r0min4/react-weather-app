import React from "react";
export default function City(props) {
  let date= new Date(props.dt*1000);
  let dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = dayName[date.getDay()];
  let hour =date.getHours();
  let min = date.getMinutes();
  return (
    <div>
      <h1 id="city"> {props.city}</h1>
      <ul>
        <li id="date">Last updated: {day} {hour}:{min}</li>
        <li id="describe">{props.description}</li>
      </ul>
    </div>
  );
}
