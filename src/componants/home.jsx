import React from "react";
import "./css/home.css";
import  { ReactComponent as Logo } from "../assets/Logo.svg"

function Home(){
  return (
    <div className="body">
      <div className="top"><Logo/></div>
      <div className="middle">The Right manner to Grow Money</div>
      <div className="bottomhome">Check out live stocks from Reliance,
Cipla, Tata Steel and many more</div>
    </div>
  );
}

export default Home