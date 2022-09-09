import React from 'react'
import AreaChart from '../../Charts/AreaChart'
import HorizontalBarChart from '../../Charts/HorizontalBarChart'
import LineChart from '../../Charts/LineChart'
import VerticalBarChart from '../../Charts/VerticalBarChart'
import DashNavbar from '../../components/DashNavbar/DashNavbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Chart.css";

const Chart = () => {
  return (
    <>
    <Sidebar/>
    <DashNavbar/>

    <div className="charts">
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