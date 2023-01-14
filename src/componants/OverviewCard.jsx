import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate , renderMatches, useParams } from "react-router-dom";
import "../componants/pagestyles/OverviewCard.css"



function OverviewCard ({Stock}) {
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
  //{data.open} {data.PrevClose} {data.DayHigh} {data.DayLow}{data.YearHigh} 
  // }, []);

  return(
    <div className="card"> 
      <table>

      
      <tr><td>Open :</td> <td>17,632</td></tr>
      <tr><td>Previous Close : </td><td>17,632</td></tr>
      <tr><td>Day High:</td><td>17,632</td> </tr>
      
      <tr><td>DayLow :</td><td> 17,632</td></tr>
      <tr><td>52WeekHigh :</td><td>17,632 </td></tr>
      <tr><td>52WeekLow : </td><td>17,632</td></tr>
     
      </table>
      
    </div>
  )
}

export default OverviewCard;