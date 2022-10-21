import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import LogoFooter from "./../assets/images/LogoFooter.png"
import Footer from 'components/Footer/Footer'

import "./../index.scss"

import Home from "./../pages/Home/Home"
import About from "./../pages/About/About";
import SingleProduct  from 'pages/SingleProduct/SingleProduct';

function Layout() {

  return (
  <div className="Layout">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/logement/:logementId" element={ SingleProduct } />
    </Routes>
    <Footer image={LogoFooter} />
  </div>
  );
}

export default Layout;