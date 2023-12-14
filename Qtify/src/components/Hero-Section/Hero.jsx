import React from "react";
import Headphone  from "../../assets/Vibrating-Headphone.svg";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-para">
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
     
       <img src={Headphone} alt="vibrating-headphone"></img> 
    </section>
  );
};
export default Hero;
