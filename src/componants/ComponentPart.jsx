import React from "react";
import OverviewCard from "./OverviewCard";
import "./pagestyles/ComponentPart.css";


function ComponentPart(){



  return (
  <div >

  <div className="field">
    
    <button className="side-button">NSE</button>
    <button className="side-button">BSE</button>

    </div>

    <div className='main'>
    <div className="details">
      NIFTY
      SENSEX
      
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