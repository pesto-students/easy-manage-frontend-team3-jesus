import React from 'react'
import AreaChart from '../../Charts/AreaChart'
import ComingSoon from '../../assets/coming-soon.gif'
import HorizontalBarChart from '../../Charts/HorizontalBarChart'
import LineChart from '../../Charts/LineChart'
import VerticalBarChart from '../../Charts/VerticalBarChart'
import "./Chart.css";

const Chart = () => {
  return (
    <>
   
    <div className="charts">
    <img style={{marginLeft:'700px',marginBottom:'30px'}} src={ComingSoon} alt="coming soon" />
    <br />
      <div>
        
        <HorizontalBarChart/>
      </div>
      <div>
        <VerticalBarChart/>
      </div>
      <div>
        <LineChart/>
      </div>
      <div>
        <AreaChart/>
      </div>
    </div>
    </>
  )
}

export default Chart;