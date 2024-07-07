
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultPage } from './DefaultPage.js';
export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Registers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:username" element={<DashBoard />} />
          <Route path="/errorPage" element={<ErrorPage />} />
          <Route path="/marketPlace" element={<ListedLand />} /> 
          <Route path="/marketPlace/:username" element={<ListedLand/>} />
          <Route path="/agent" element={<Inspector />} />
          <Route path="/addUser" element={<AddUserForm/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
