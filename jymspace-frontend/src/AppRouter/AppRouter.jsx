import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Pages/Home/Home";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
