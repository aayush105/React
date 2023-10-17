//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1>Daily Routine</h1>
    <ul>
      <li>Code</li>
      <li>Eat</li>
      <li>Sleep</li>
      <li>Repeat</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
