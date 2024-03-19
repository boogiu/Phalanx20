import React from 'react';
import ApexCharts from "react-apexcharts";

const CollegeGraph = () => {
  const series= [
    {
      data: [
        {
          x: "서울대",
          y: '86%',
        },{
          x: "가우다",
          y: '23%',
        },{
          x: "서울대",
          y: '86%',
        },{
          x: "가우다",
          y: '23%',
        },{
          x: "서울대",
          y: '86%',
        },{
          x: "가우다",
          y: '23%',
        },
      ]
  }
  ]
  
  const options = {
    
    chart: {
      type : "treemap",
      toolbar: {
        show: false
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          distributed: true,
          useFillColorAsStroke: false,
          dataLabels: {
            format:  "scale"
         },
         
        }
      },
  
      fontFamily: '한나, Arial, sans-serif',
      height: 'auto',
      parentHeightOffset: 0,
      stroke: {
        show: false,
      }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.3,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: []
        }
      }
  }

    

    return (
        <div style={{ width :"100%",height :"100%", display:"flex",justifyContent:"center",alignItems:"center",flexFlow:"row"}}>
          <ApexCharts
          options={options}
          series={series}
          type="treemap"
        />
        </div>
    );
}

export default CollegeGraph;
