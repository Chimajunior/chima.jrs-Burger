import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer">
       
      </div>
    </div>
  );
}

export default Home;
