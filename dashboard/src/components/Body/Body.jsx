import React from 'react'
import "./Body.scss";
import ReactApexChart from 'react-apexcharts';

const Body = () => {

  const options = {
    series: [
      {
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
      },
      {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
      },
      {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
      }
    ],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%'
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    xaxis: {
      categories: [
        '2011 Q1',
        '2011 Q2',
        '2011 Q3',
        '2011 Q4',
        '2012 Q1',
        '2012 Q2',
        '2012 Q3',
        '2012 Q4'
      ]
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'right',
      offsetX: 0,
      offsetY: 50
    }
  }


  return (
    <div >

      <div className='container' style={{marginTop:"40px", display:"flex"}}>

      <div className='box'  style={{width:"300px", height:"150px", backgroundColor:"#e74c3c", borderRadius:"10px", display:"flex", flexDirection:"column" ,alignItems:"center",justifyContent:"center", marginRight:"10px"}}>
            <span style={{color:"white", fontWeight:"bold"}}>Total Users</span>
            <h2 style={{color:"white", fontWeight:"bold"}}>5</h2>
        </div>

        <div className='box'  style={{width:"300px", height:"150px", backgroundColor:"#27ae60", borderRadius:"10px", display:"flex", flexDirection:"column" , alignItems:"center",justifyContent:"center", marginRight:"10px"}}>
            <span style={{color:"white", fontWeight:"bold"}}>Total Profiles</span>
            <h2 style={{color:"white", fontWeight:"bold"}}>4</h2>
        </div>

        <div className='box'  style={{width:"300px", height:"150px", backgroundColor:"#70a1ff", borderRadius:"10px", display:"flex", flexDirection:"column" , alignItems:"center",justifyContent:"center"}}>
            <span style={{color:"white", fontWeight:"bold"}}>Total Subscription</span>
            <h2 style={{color:"white", fontWeight:"bold"}}>10</h2>
        </div>

      </div>
        
        <ReactApexChart options={options} series={options.series} type="bar" height={350} />
        
    </div>
  )
}

export default Body;
