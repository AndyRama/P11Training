import './Footer.scss'
import React from "react";
import LogoFooter from "./../../assets/images/LogoFooter.png";

function Footer() {

  return(
    <footer>
      <img src={ LogoFooter } alt="Logo d'entreprise" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>    
  )
}

export default Footer;