import { useMemo } from 'react';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryTheme } from 'victory';
import * as d3Scale from 'd3-scale';
// @ts-expect-error there are no types available for this module
import { scaleDiscontinuous } from '@d3fc/d3fc-discontinuous-scale';
import { skipNonMonthStartDates } from '@/utils/chart';
import FinancialAreaChartGradient from './FinancialAreaChartGradient';

interface IFinancialAreaChartProps {
  data: Array<{ x: Date; y: number }>;
}

const FinancialAreaChart: React.FC<IFinancialAreaChartProps> = ({ data = [] }) => {
  const maxYDomain = useMemo(() => {
    const max = data.reduce((max, dataset) => {
      return Math.max(max, dataset.y);
    }, 0);

    return Math.ceil(max / 50) * 50;
  }, [data]);

  const discontinuousScale = scaleDiscontinuous(d3Scale.scaleTime()).discontinuityProvider(skipNonMonthStartDates());

  const axisStyles = {
    axis: { stroke: '#F3F3F5', strokeDasharray: '8, 4' },
    tickLabels: { fontSize: 9, fill: '#718EBF' },
    grid: {
      stroke: '#F3F3F5',
      strokeDasharray: '8, 4',
    },
  };

  if (!data.length) return;

  return (
    <div>
      <VictoryChart
        domain={{ y: [0, maxYDomain] }}
        height={162}
        padding={{
          left: 30,
          bottom: 30,
          top: 10,
          right: 20,
        }}
        scale={{ x: discontinuousScale }}
      >
        <VictoryChart theme={VictoryTheme.material}>
          <FinancialAreaChartGradient />

          <VictoryAxis
            style={axisStyles}
            tickFormat={(t) => new Date(t).toLocaleString('default', { month: 'short' })}
          />
          <VictoryAxis dependentAxis style={axisStyles} />

          <VictoryArea
            data={data}
            interpolation="monotoneX"
            style={{
              data: { fill: 'url(#gradientFill)', stroke: '#396AFF', strokeWidth: 2 },
            }}
          />
        </VictoryChart>
      </VictoryChart>
    </div>
  );
};

export default FinancialAreaChart;
