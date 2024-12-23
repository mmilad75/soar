import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryTheme } from 'victory';
import BarChartLegend from './BarChartLegend';
import { useMemo } from 'react';

export interface IBarChartDataSet {
  label: string;
  values: Array<{ x: string; y: number }>;
  color: string;
}

interface IBarChartProps {
  data: IBarChartDataSet[];
  height?: number;
}

const BarChart: React.FC<IBarChartProps> = ({ data, height = 150 }) => {
  const maxYDomain = useMemo(() => {
    const max = data.reduce((max, dataset) => {
      const datasetMax = Math.max(...dataset.values.map((v) => v.y));
      return Math.max(max, datasetMax);
    }, 0);

    return Math.ceil(max / 50) * 50;
  }, [data]);

  return (
    <div>
      <BarChartLegend data={data} />

      <VictoryChart
        theme={VictoryTheme.clean}
        padding={{
          left: 30,
          bottom: 30,
          top: 10,
          right: 20,
        }}
        height={height}
        domain={{ y: [0, maxYDomain] }}
      >
        <VictoryAxis
          style={{
            axis: { stroke: '#F3F3F5' },
            tickLabels: { fontSize: 9, fill: '#718EBF' },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fontSize: 9, fill: '#718EBF' },
            grid: {
              stroke: '#F3F3F5',
            },
          }}
        />

        <VictoryGroup offset={20} style={{ data: { width: 10 } }}>
          {data.map(({ color, values, label }) => (
            <VictoryBar
              key={label}
              style={{ data: { fill: color, stroke: color, fillOpacity: 1 } }}
              data={values}
              cornerRadius={{
                topLeft: 5,
                topRight: 5,
                bottomLeft: 5,
                bottomRight: 5,
              }}
            />
          ))}
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default BarChart;
