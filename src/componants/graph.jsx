// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import * as ReactDOM from "react-dom";
import './css/graph.css'
import { useState, useEffect } from "react";
import { getElement } from '@syncfusion/ej2-react-charts';


function Graph() {
  const [data,setdata] = useState([]) 
  const [Time,setTime] = useState() 
  const [Comp,setComp] = useState('')
  useEffect(()=>{
    setTimeout(()=>{
      setTime();
    }, 1000);
  });

  useEffect(() => {
    setTimeout(() => {
      setdata([
        [1327359600000,30.95],
        [1327446000000,31.34],
        [1327532400000,31.18],
        [1327618800000,31.05],
        [1327878000000,31.00],
        [1327964400000,30.95],
        [1328050800000,31.24],
        [1328137200000,31.29],
        [1328223600000,31.85],
        [1328482800000,31.86],
        [1328569200000,32.28],
        [1328655600000,32.10],
        [1328742000000,32.65],
        [1328828400000,32.21],
        [1329087600000,32.35],
        [1329174000000,32.44],
        [1329260400000,32.46],
        [1329346800000,32.86],
        [1329433200000,32.75],
        [1329778800000,32.54],
        [1329865200000,32.33],
        [1329951600000,32.97],
        [1330038000000,33.41],
        [1330297200000,33.27],
        [1330383600000,33.27],
        [1330470000000,32.89],
        [1330556400000,33.10],
        [1330642800000,33.73],
        [1330902000000,33.22],
        [1330988400000,31.99],
        [1331074800000,32.41],
        [1331161200000,33.05],
        [1331247600000,33.64],
        [1331506800000,33.56],
        [1331593200000,34.22],
        [1331679600000,33.77],
        [1331766000000,34.17],
        
        
      ]);
    }, 1000);
  },[Comp]);
    

    const chart = {
          
      series: [{
        name: "STOCK ABC",
        data: data
      }],
      style:{
        color: '#7462F7'
      },
      options: {
        chart: {
          type: 'area',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Fundamental Analysis of Stocks',
          align: 'left'
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left'
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      },
    
    
    };
      
    return (
      
        <div className='component'>
          <div className='company'>

          </div>
          <div className='timefilter'>
          <div>
          </div>
            </div>
        <div className='graph'>
            <Chart options={chart.options} series={chart.series} type="area" width="100%" />
        </div>
        </div>
    );
  }

export default Graph;


