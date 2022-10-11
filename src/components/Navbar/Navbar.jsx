import React from "react";
import "./Navbar.scss"
import Logo from './../../assets/images/Logo.png'

function Navbar() {
  return(

    <header className="header">
      <nav className="Navbar">
        <img src={Logo} alt="Logo entreprise kasa" />
      </nav>
    </header>

  )
}

export default Navbar;