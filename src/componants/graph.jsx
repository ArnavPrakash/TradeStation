
import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import * as ReactDOM from "react-dom";
import './css/graph.css'
import { useState, useEffect } from "react";
// import { getElement } from '@syncfusion/ej2-react-charts';


function Graph() {
  const [data,setdata] = useState([]) 
  const [Time,setTime] = useState() 
  const [Comp,setComp] = useState('RELIANCE')
 
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
            "returntype": "graph"
          }),
        }
      );
      const data = await response.json();


      console.log(data);

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
    

    const chart = {
          
      series: [{
        name: "STOCK ABC",
        data: data
      }],
      options: {
        chart: {
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'Advandced Chart for '+Comp,
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },
    
    
    };
      console.log(Comp)
    return (
      
        <div className='component'>
          <div className='company'>
          <select
                    required
                    name=""
                    id="input_dist"
                    onChange={(e) => setComp(e.target.value)}
                  >
                      <option value="RELIANCE" className="text-black">
                        Reliance
                      </option>
                      <option value="ASHOKLEY" className="text-black">
                        Ashok Leyland
                      </option>
                      <option value="CIPLA" className="text-black">
                        Cipla
                      </option>
                      <option value="EICHERMOT" className="text-black">
                        Eichermot
                      </option>
                      <option value="TATASTEEL" className="text-black">
                        Tata Steel
                      </option>
                  </select>
                  {/* <Downkey/> */}
          </div>
        <div className='graph'>
            <Chart options={chart.options} series={chart.series} type="candlestick" width="100%" />
        </div>
        </div>
    );
  }

export default Graph;


