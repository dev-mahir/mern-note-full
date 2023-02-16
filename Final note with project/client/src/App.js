import React from "react";
import { Route, Routes } from "react-router-dom";
import Cloud from "./components/CloudSystem/CloudSystem";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cloud-system" element={<Cloud />}></Route>
      </Routes>
    </>
  );
}

export default App;
