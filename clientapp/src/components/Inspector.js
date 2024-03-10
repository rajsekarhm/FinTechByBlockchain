import { Card } from "@mui/material";
import Button from "react-bootstrap/Button";
function Agent() {
  const listOfLands = JSON.parse(localStorage.getItem("listOfLands")) || [];
  const toVerify = listOfLands.filter((land) => {
    if (!land.isLandVerified) {
      return true;
    }
    return false;
  });
  const handleVerify = (land) => {
    const index = listOfLands.findIndex(
      (object) => land.landID === object.landID,
    );
    listOfLands[index].isforSell = true;
    listOfLands[index].isLandVerified = true;
    localStorage.setItem("listOfLands", JSON.stringify(listOfLands));
    window.location.reload();
  };
  return (
    <>
      <h1> Agent Will Be Here</h1>
    </>
  );
}

export default Agent;
