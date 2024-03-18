import React from 'react';
import ApexCharts from "react-apexcharts";

const MajorGraph = () => {
    
  const options = {
    plotOptions: {
      treemap: {
        colorScale: {
          ranges: [
            {
              from: -6,
              to: 0,
              color: '#CD363A'
            },
            {
              from: 0.001,
              to: 6,
              color: '#52B12C'
            }
          ]
        }
      }
    }
  }

    const series= [
      {
        data: [
          {
            x: "New Delhi",
            y: 218,
          },
          {
            x: "Kolkata",
            y: 149,
          },
          {
            x: "Mumbai",
            y: 184,
          },
          {
            x: "Ahmedabad",
            y: 55,
          },
          {
            x: "Bangaluru",
            y: 84,
          },
          {
            x: "Pune",
            y: 31,
          },
          {
            x: "Chennai",
            y: 70,
          }
        ]
    }
    ]

    return (
        <div style={{ width :"100%",height :"100%"}}>
          <ApexCharts
          options={options}
          series={series}
          type="treemap"
        />
        </div>
    );
}

export default MajorGraph;
