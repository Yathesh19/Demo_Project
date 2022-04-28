//import React from 'react';
import React, { useState } from 'react';
import "./App.css";
import axios from "axios";

const Popup = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addUserData = () => {
    console.log("Name", name);
    console.log("Number", number);
    axios.post("http://localhost:3001/create", {
        name: name,
        number: number,
      })
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.log("fetching guide size error !", error);
      });
    // console.log(name + number);
    //  props.closePopup
  };
  return (
    <div className="popup">
      <div className="popup_inner">
        <h2>{props.title}</h2>
        <button onClick={props.closePopup}> Close </button>
        <div className="info">
          <label>Name:</label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label>Number:</label>
          <input
            type="text"
            onChange={(event) => {
              setNumber(event.target.value);
            }}
          />
          <button onClick={addUserData(props)}>Submit</button>
        </div>
      </div>
    </div>
  );
};
export default Popup;
