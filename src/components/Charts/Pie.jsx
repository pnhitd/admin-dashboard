import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const PieChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='w-full'>
      <AccumulationChartComponent
        id='pie-chart'
        legendSettings={{ position: 'Bottom' }}
        background={currentMode === 'Dark' ? '#fff' : ''}
        tooltip={{ enable: true }}
        chartArea={{ border: { width: 0 } }}
      >
        <Inject services={[PieSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationLegend]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            type='Pie'
            dataSource={pieChartData}
            xName='x'
            yName='y'
            radius='90%'
            dataLabel={{
              visible: true,
              position: 'Inside',
              name: 'text',
              font: {
                fontWeight: '600'
              }
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default PieChart;