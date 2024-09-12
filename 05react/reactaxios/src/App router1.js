import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomeComp from "./components/home/HomeComp";
import AboutComp from "./components/AboutComp";
import ProductComp from "./components/ProductComp";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">홈</Link>|<Link to="/about">About</Link>|
        <Link to="/products">Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/products/:num" element={<ProductComp />} />
      </Routes>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eaque.
      </footer>
    </div>
  );
}

export default App;
