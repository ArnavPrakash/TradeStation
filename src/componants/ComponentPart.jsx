import React from "react";
import OverviewCard from "./OverviewCard";
import "./css/ComponentPart.css";
import {AiFillQuestionCircle} from 'react-icons/ai';
import  {ReactComponent as Logo} from "../assets/Logo.svg"
import { useState, useEffect } from "react";
function ComponentPart(){

  const [data,setdata] = useState([]) 
  const [Time,setTime] = useState() 
  const [Comp,setComp] = useState('NSE')
 
  async function getdata() {
    try {
      const response = await fetch(
        `http://localhost:8000/fetchStockData`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            "stock": Comp,
            "returntype": "dict"
          }),
        }
      );
      const data = await response.json();


      console.log(data.data[0]);

      if(response.status === 200){
        setdata(data["data"])
      }
      else{
        alert("Unable to fetch data.")
      }
    } catch (err) {
      console.log(err);
    } 
  };
  useEffect(() => {
    getdata();
  }, [Comp]);
    


  return (
  <div >
    
    <div className="upperbar">
    <div className="logo">
    <Logo />
    </div>
    <div className="field">
    
    <button className="side-button" value ="NSE"  onChange={(e) => setComp(e.target.value)}>NSE</button>
    <button className="side-button" value = "BSE" onChange={(e) => setComp(e.target.value)}>BSE</button>

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
      <div className="Score"><h1>{data[1253].Volume}<sup>INR</sup></h1>
      +113.02
       
       </div>
       <hr></hr>
       </div>
      
       <OverviewCard Stock = {data[1253]} ></OverviewCard>
       </div>
     
        </div>
 
  </div>);
}

export default ComponentPart