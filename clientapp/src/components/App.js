import { Registers } from "./Register.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./HomePage.js";
import { Login } from "./Login.js";
import { DashBoard } from "./DashBoard.js";
import ErrorPage from "./ErrorPage.js";
import styles from "./css/App.css";
import MainPanel from "./MarketPlace.js";
import Agent from "./Inspector.js";
export const App = () => {
  return (
    <div className={`${styles.App}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Registers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:username" element={<DashBoard />} />
          <Route path="/errorPage" element={<ErrorPage />} />
          <Route path="/marketPlace" element={<MainPanel />} />
          <Route path="/marketPlace/:username" element={<MainPanel />} />
          <Route path="/agent" element={<Agent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
