import React from "react";
import OverviewCard from "./OverviewCard";
import "./css/ComponentPart.css";
import {AiFillQuestionCircle} from 'react-icons/ai';
import  {ReactComponent as Logo} from "../assets/Logo.svg"
function ComponentPart(){



  return (
  <div >
    
    <div className="upperbar">
    <div className="logo">
    <Logo />
    </div>
    <div className="field">
    
    <button className="side-button">NSE</button>
    <button className="side-button">BSE</button>

    </div>
    <AiFillQuestionCircle size={40}/>
</div>

    
    <div className='main'>
    <div className="details">
     <input type="button" value="NIFTY50" ></input>
     <input type = "button" value= "SENSEX"></input>
      
      </div>
      <div className="overview">
        <div className="net" >
      <div className="Score"><h1>17,927.15<sup>INR</sup></h1>
       +113.95(0.64%) 
       
       </div>
       <hr></hr>
       </div>
      
       <OverviewCard></OverviewCard>
       </div>
     
        </div>
 
  </div>);
}

export default ComponentPart