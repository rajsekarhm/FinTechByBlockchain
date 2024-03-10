import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import addLandtoStorage from "./setLocalStorage";
import * as React from "react";
import { Avatar } from "@mui/material";
import { Card } from "@mui/material";
// import { motion } from "framer-motion";

function ProfileInfo(props) {
  const username = props.value;
  const userData = JSON.parse(localStorage.getItem("users"))
    .filter((fetchvalue) => {
      if (fetchvalue.name === username) {
        return true;
      }
      return false;
    })
    .pop();

  return (
    <Card
      style={{
        backgroundColor: "aquamarine",
        width: 400,
        height: 100,
        border: "radius",
        borderBlockColor: "coral",
        fontFamily: "monospace",
        padding: 5,
      }}
    >
      <h5>Username : {username}</h5>
      <h5>Email ID : {userData.email}</h5>
    </Card>
  );
}

function YourLand(props) {
  const lands = JSON.parse(localStorage.getItem("listOfLands")) || [];
  let isLand = false;
  const toDisplay = lands.filter((land) => {
    if (land.accountOwner === undefined) {
      return false;
    }
    if (land.accountOwner === props.value) {
      isLand = true;
      return true;
    }
    return false;
  });

  return isLand ? (
    <React.Fragment>
      <h3 style={{ fontFamily: "monospace" }}>Your Land</h3>
      <table className="table-striped table-bordered table-sm table">
        <thead>
          <tr>
            <th style={{ fontFamily: "monospace" }}>Land Address</th>
            <th style={{ fontFamily: "monospace" }}>
              Land Owner Wallet Address
            </th>
            <th style={{ fontFamily: "monospace" }}>Land Location</th>
            <th style={{ fontFamily: "monospace" }}>Property ID</th>
            <th style={{ fontFamily: "monospace" }} className="text-right">
              Is Land Verified
            </th>
          </tr>
        </thead>
        <tbody>
          {toDisplay.map((land) => (
            <tr key={land.landID}>
              <td>{land.landAddress}</td>
              <td>{land.landOwner}</td>
              <td>{land.landlocation}</td>
              <td>{land.propertyPID}</td>
              <td className="text-right">{land.isVerified ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  ) : null;
}
export const DashBoard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const { username } = useParams();
  const navigate = useNavigate();
  const [isLandAdded, setLandAdded] = useState(false);
  const [isError, setError] = useState(false);
  const [landDetails, setLandDetails] = useState({
    landAddress: " ",
    landID: " ",
    landlocation: " ",
    price: " ",
    allLatitudeLongitude: " ",
    propertyPID: " ",
    isforSell: " ",
    isLandVerified: " ",
    landOwner: " ",
    accountOwner: " ",
  });

  const handleInput = (event) => {
    setLandDetails({ ...landDetails, [event.target.name]: event.target.value });
  };

  const moveMarketplace = () => {
    if (username !== " ") {
      navigate(`/marketPlace/${username}`);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    landDetails.isLandVerified = false;
    landDetails.accountOwner = username;
    landDetails.isforSell = true;
    landDetails.allLatitudeLongitude = 1000;
    Object.keys(landDetails).forEach((key) => {
      if (landDetails[key] === " ") {
        setError(true);
      }
    });
    addLandtoStorage(landDetails);
    window.location.reload();
  };

  function handleMouseMover(event) {
    if (event.clientX + 100 > window.innerWidth / 2 + 100) {
      console.log(event.clientX, window.innerWidth);
      setShowProfile(true);
      return;
    }
    setShowProfile(false);
  }

  return (
    <div className="dashboard">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <button
          style={{ fontFamily: "monospace" }}
          className="btn btn-secondary"
          onClick={() => moveMarketplace()}
        >
          Visit Market Place
        </button>
        <div className="navbar-collapse collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Avatar
                style={{ fontFamily: "monospace", backgroundColor: "violet" }}
              >
                R
              </Avatar>
              <br />
              <button
                style={{
                  fontFamily: "monospace",
                  borderBlock: 5,
                  backgroundColor: "skyblue",
                  alignItems: "end",
                  padding: 5,
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main role="main">
        <div className="container">
          <h3 className="text-center" style={{ fontFamily: "monospace" }}>
            Profile Access
          </h3>
          <div
            className="profileAccess"
            style={{ position: "relative", left: 1000 }}
          >
            <ProfileInfo value={username} />
          </div>
          {showProfile ? "okk" : null}
        </div>
      </main>
    </div>
  );
};

// function addForm() {
//   return (
//     <form>
//       <div className="form-group">
//         <label style={{fontFamily:"monospace"}}>Enter your Land wallet Address</label>
//         <input
//           type="text"
//           className="form-control"
//           name="landAddress"
//           onChange={handleInput}
//         />
//       </div>

//       <div className="form-group">
//         <label style={{fontFamily:"monospace"}}> Land ID</label>
//         <input
//           type="text"
//           className="form-control"
//           name="landID"
//           onChange={handleInput}
//         />
//       </div>

//       <div className="form-group">
//         <label style={{fontFamily:"monospace"}}> Land Location</label>
//         <input
//           type="text"
//           className="form-control"
//           name="landlocation"
//           onChange={handleInput}
//         />
//       </div>

//       <div className="form-group">
//         <label style={{fontFamily:"monospace"}}> Property ID</label>
//         <input
//           type="text"
//           className="form-control"
//           name="propertyPID"
//           onChange={handleInput}
//         />
//       </div>

//       <div className="form-group">
//         <label style={{fontFamily:"monospace"}}>Land Owner Wallet Address </label>
//         <input
//           type="text"
//           className="form-control"
//           name="landOwner"
//           onChange={handleInput}
//         />
//       </div>

//       <div className="form-group">
//         <label style={{fontFamily:"monospace"}}> Price   (In Ethereum)</label>
//         <input
//           type="text"
//           className="form-control"
//           name="price"
//           onChange={handleInput}
//         />
//       </div>
//     <div className="text-center">
//       <button className="btn btn-primary" onClick={handleClick}>
//         Submit
//       </button>
//       </div>
//     </form>
//   );
// }
