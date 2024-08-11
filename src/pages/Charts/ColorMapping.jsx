import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';
import { colorMappingData, rangeColorMapping, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../components';

const StackedChart = ({ width, height }) => {
  const { currentMode } = useStateContext();

  const seriesData = colorMappingData[0];

  const getPointColor = (yValue) => {
    for (let range of rangeColorMapping) {
      if (yValue >= range.start && yValue <= range.end) {
        return range.colors[0];
      }
    }
    return '#000';
  };

  const processedData = seriesData.map(item => ({
    ...item,
    color: getPointColor(item.y),
  }));

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header
        category='Chart'
        title='Temperature Variation'
      />
      <div className='w-full'>
        <ChartComponent
          width={width}
          height={height}
          id='charts'
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#fff' : ''}
        >
          <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
          <SeriesCollectionDirective>
            {rangeColorMapping.map(range => (
              <SeriesDirective
                dataSource={processedData.filter(data => data.y >= range.start && data.y <= range.end)}
                xName='x'
                yName='y'
                type='StackingColumn'
                pointColorMapping='color'
                name={range.label}
              />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default StackedChart;