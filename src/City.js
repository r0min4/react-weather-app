import React from "react";
export default function City(props) {
  let date= new Date(props.dt*1000);
  return (
    <div>
      <h1 id="city"> {props.city}</h1>
      <ul>
        <li id="date">Last updated: {date.toString()}</li>
        <li id="describe">{props.description}</li>
      </ul>
    </div>
  );
}
