import React from 'react'
import { ChartsHeader } from '../../components'
import PieChart from '../../components/Charts/Pie'

const Pie = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader
        category='Pie'
      />
      <div className='w-full'>
        <PieChart />
      </div>
    </div>
  )
}

export default Pie