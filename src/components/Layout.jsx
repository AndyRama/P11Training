import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

import "./../index.scss"

import Home from "./../pages/Home/Home";

function Layout() {

  return (
  <div className="Layout">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  </div>
  );
}

export default Layout;