import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { ChartsHeader } from '../../components'

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <ChartsHeader
        category='Bar'
      />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#fff' : ''}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>

  )
}

export default Bar