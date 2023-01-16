import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate , renderMatches, useParams } from "react-router-dom";
import "../componants/css/OverviewCard.css"



function OverviewCard ({Stock}) {

const data = {Stock};

  // const [data, setData] = useState({});

  // const stock = {Stock};
 
  // useEffect(function () {
  //     const url = `${process.env.REACT_APP_SERVER}/${stock}` ;
  //     fetch(url, {
  //        method: 'get',
  //        headers: {
  //            'Content-Type': 'application/json;charset=utf-8'
  //        }
  //     }).then(rs => {
         
  //        setData(rs.data) 
  //     });
  //     console.log(data)
  //  } 
  // }, []);

  return(
    <div className="card"> 
      <table>

      
      <tr><td>Open :</td> <td>{data.Stock.Open}</td></tr>
      <tr><td>Previous Close : </td><td>{data.Stock.Close}</td></tr>
      <tr><td>Day High:</td><td>{data.Stock.High}</td> </tr>
      
      <tr><td>DayLow :</td><td> {data.Stock.Low}</td></tr>
      {/* <tr><td>52WeekHigh :</td><td>{data}  </td></tr>
      <tr><td>52WeekLow : </td><td>17,632</td></tr> */}
     
      </table>
      
    </div>
  )
}

export default OverviewCard;