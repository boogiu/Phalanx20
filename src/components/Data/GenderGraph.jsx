import React from 'react';
import ApexCharts from "react-apexcharts";

const GenderGraph = () => {
    const series = [73, 27];
    const options= {
      chart: {
        type: 'donut',
      },
      responsive: [{
        options: {
          chart: {
            width: '100%',
            height: '100%',
            fontFamily: '한나, Arial, sans-serif',
          },
          fill: {
            colors: ['#F44336', '#0080FF']
          },
          dataLabels: {
            style: {
              fontSize: '36px',
              fontFamily: '한나, Arial, sans-serif',
              fontWeight: 'bold',
              colors:  ['#fff', '#fff']
          },
          },
          stroke: {
            show: false, 
          },
          subtitle: {
            text: "지원자 성비",
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '18px',
              fontWeight:  'normal',
              fontFamily:  "스윗",
              color:  '#E6E6E6'
            },
          },
          labels: [ '여성', '남성'],
          legend: {
          show: true,
          position: 'bottom',
          horizontalAlign: 'center', 
          fontSize: '24px',
          fontFamily: '스윗, Arial',
          fontWeight: 400,
          width: 500,
          height: undefined,

          labels: {
              colors: "white",
              useSeriesColors:  false,
          },
          markers: {
              width: 24,
              height: 24,
              strokeColor: '#fff',
              fillColors: ['#F44336', '#0080FF'],
          },

          }
        }
      }]
    }
    return (
        <div style={{ width :"100%",height :"100%", border : "1px solid red"}}>
          <ApexCharts
          options={options}
          series={series}
          type="donut"
        />
        </div>
    );
}

export default GenderGraph;
