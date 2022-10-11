import React from "react";
import "./Navbar.scss"
import Logo from './../../assets/images/Logo.png'
import {  Link , useLocation } from'react-router-dom'

function Navbar() {

  const location = useLocation()

  return(

    <header className="header">
      <nav className="Navbar">
        <img src={Logo} alt="Logo entreprise kasa"/>

        <div className="Nav-Btn-Wrapper">
          <Link to="/" className={ location.page === '/' ? 'Home-page active' : 'Home-page'} page="home">Acceuil</Link>
          <Link to="/About" className={ location.page === '/About' ? 'About-page active' : 'About-page'} page="About">A Propos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;