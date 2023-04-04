import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Nabvar/Navbar";
import Counter from "./components/redux/redux-toolkit/Counter/Counter";
import Shop from "./pages/Shop";


function App() {


 

  return (
    <>
      
      <Navbar/>
      
      <Routes>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/redux/redux-toolkit/counter" element={<Counter />}></Route>
      </Routes>


 
    </>
  );
}

export default App;
