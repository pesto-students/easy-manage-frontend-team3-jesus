import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const MaleFemale = ({ males, females }) => {
  const data = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        label: 'Profit',
        data: [females, males],
        backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
        hoverOffset: 16,
      },
    ],
  }
  return (
    <div className='chart'>
      <Doughnut data={data} />
    </div>
  )
}

export default MaleFemale
