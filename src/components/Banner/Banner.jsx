import './Banner.scss'
import React from "react";
import imageBanner from "./../../assets/images/BannerHome.png";

const Banner = ({ image, text, page }) => {

  let bannerClass = "";
  if(page === "about")  {
    bannerClass = "about";
  }

  return (
    <div className={`banner ${bannerClass}`}>
      <img src={imageBanner} alt="" className="banner__img" />
      <div className="banner__overlay"></div>        
      {text ? <h1 className="banner__text">{text}</h1> : null}
    </div>
  );
};

export default Banner;