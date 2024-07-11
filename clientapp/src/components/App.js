
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultPage } from './DefaultPage.js';
export const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< DefaultPage/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
