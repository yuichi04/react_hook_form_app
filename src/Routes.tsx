import { FC } from "react";
import { BrowserRouter, Routes as RouteList, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

const Routes: FC = () => {
  return (
    <BrowserRouter>
      <RouteList>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </RouteList>
    </BrowserRouter>
  );
};

export default Routes;
