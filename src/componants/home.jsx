import React from "react";
import "./css/home.css";
import  {ReactComponent as Logo} from "../assets/Logo.svg"

function Home(){



  return (
  <div className="main" >
    <div className="upperNavBar">
    <div className="logo">
    <Logo />
    <input type="submit">login</input>

    </div>
    
    </div>
 
  </div>);
}

export default Home