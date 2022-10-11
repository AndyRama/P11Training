import { Routes, Route } from "react-router-dom";

import "./../index.scss"
import Home from "../Pages/Home/Home"

function Layout() {
  return (
  <div className="Layout">
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  </div>
  );
}

export default Layout;