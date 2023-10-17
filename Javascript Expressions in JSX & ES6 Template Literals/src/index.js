import React from "react";
import ReactDOM from "react-dom";

const fname = "Aayush";
const lname = "shrestha";
const num = 3;
ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>

    {/* ES6 Template literals */}
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>My lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
