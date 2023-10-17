//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const fname = "Aayush";
const lname = "Shrestha";
var current_year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {fname + " " + lname}.</p>
    <p>Copyright {current_year} </p>
  </div>,
  document.getElementById("root")
);
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
