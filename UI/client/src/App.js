// import { useState } from "react";
// import "./App.css";
// import axios from "axios";
// import React, { Fragment, Component } from "react";
// import ModalPopup from './modal_popup';

// function App() {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const data = [
//     { name: "Anom", number: 9441234567 },
//     { name: "Megha", number: 8431234567 },
//     { name: "Subham", number: 7541234567 },
//   ];

//   const addUserData = () => {
//     axios
//       .post("http://localhost:3001/create", {
//         name: name,
//         number: number,
//       })
//       .then(() => {
//         console.log("Success");
//       })
//       .catch((error) => {
//         console.log("fetching guide size error !", error);
//       });
//     console.log(name + number);
//   };

//   return (
//     <div className="App">
//       {/* <div className="info">
//         <label>Name:</label>
//         <input
//           type="text"
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//         />
//         <label>Number:</label>
//         <input
//           type="text"
//           onChange={(event) => {
//             setNumber(event.target.value);
//           }}
//         />
//         <button onClick={addUserData}>Submit</button>
//       </div> */}
//       <div className="TableView">
//         <table>
//           <tr>
//             <th>Name</th>
//             <th>Number</th>
//           </tr>
//           {data.map((val, key) => {
//             return (
//               <tr key={key}>
//                 <td>{val.name}</td>
//                 <td>{val.number}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//       <div className="button">
//         <button  onClick={addUserData}>Add Data</button>
//       </div>
//     </div>
//   );
// }

import React, { Component } from "react";
import PopUp from "./PopUp";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Please add name & number !",
      showPopup: false,
      btnText: "Add Data",
      ContactData: [
        { name: "Yathesh", number: 9441234567 },
        { name: "Megha", number: 8431234567 },
        { name: "Subham", number: 7541234567 },
      ],
    };
  }

  componentDidMount = () => {
    this.callAPi();
  };

  callAPi = () => {
    axios
      .post("http://localhost:3001/read", {})
      .then((resp) => {
        console.log("Success");
        this.setState({
          ContactData: resp.result,
        });
      })
      .catch((error) => {
        console.log("fetching guide size error !", error);
      });
  };

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  };

  addUserData = () => {
    console.log("helo");
  };

  render() {
    return (
      <div>
        <h1>Hello User!</h1>

        {this.state.showPopup ? (
          <PopUp title={this.state.title} closePopup={this.togglePopup} />
        ) : null}
        <div className="TableView">
          <table>
            <tr>
              <th>Name</th>
              <th>Number</th>
            </tr>
            {this.state.ContactData.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.number}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="button">
          <button onClick={this.togglePopup}>
            {" "}
            {this.state.showPopup ? "" : "Add Data"}{" "}
          </button>
          {/* <button onClick={this.addUserData}>Add Data</button> */}
        </div>
      </div>
    );
  }
}

export default App;
