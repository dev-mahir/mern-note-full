import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Checkbox from "./components/Checkbox/Checkbox";
import Upload from "./components/CloudSystem/Gallery/Upload";

import Shop from "./pages/Shop";
import { get_all_product } from "./redux/product/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(get_all_product());
  }, []);

  return (
    <>
      {/* <Routes>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/form" element={<Checkbox />}></Route>
      </Routes> */}

      <Upload/>
    </>
  );
}

export default App;
