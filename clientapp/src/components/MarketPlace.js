import "./css/login.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import etherDone from "./etherCheck";
// const eth = new ethers.JsonRpcProvider(
//   "https://eth-sepolia.g.alchemy.com/v2/AxJV_qAMMt6cXXLiZuw2jV_t_q_3nPfV"
// );
// const { ethers } = require("ethers");
// const eth = new ethers.JsonRpcProvider(
//   "https://eth-sepolia.g.alchemy.com/v2/AxJV_qAMMt6cXXLiZuw2jV_t_q_3nPfV"
// );
const ListOfLands = JSON.parse(localStorage.getItem("listOfLands")) || [];

export default function MainPanel() {
  const navigate = useNavigate();
  const [blockNum, setBlockNum] = useState("");
  const urlParam = useParams();
  const moveDashBoard = () => {
    if (!urlParam.username == " ") {
      navigate(`/dashboard/${urlParam.username}`);
    } else {
      navigate("/login");
    }
  };

  return <h1> Market Place </h1>;
}
