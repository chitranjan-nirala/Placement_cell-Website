import React from "react";
import TIU from "../assets/images/TIU.jpg";
import Ex from "./ex";
const Home = (props) => (
  <div>
    <div className="homepic">
      <img src={TIU} alt="" className="logo-img" />
      <div className="Text-overlay">
        <h1>EVOLVING A BRAND-NAME TAKES YEARS OF NURTURING,
          <br/> HARD WORK AND PASSION.</h1>
      </div>
    </div>
    <h1 className="elegantshadow">The Institute Speaks</h1>
    <Ex />
  </div>
);

export default Home;
