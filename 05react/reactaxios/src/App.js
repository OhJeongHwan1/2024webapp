import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutComp from "./layout/LayoutComp";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/AboutComp";
import ProductComp from "./components/ProductComp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<HomeComp />} />
          <Route path="/about" element={<AboutComp />} />
          <Route path="/products" element={<ProductComp />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
