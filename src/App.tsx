import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
