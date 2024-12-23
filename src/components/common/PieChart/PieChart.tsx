import { VictoryPie, VictoryPieProps, VictoryTheme } from 'victory';

const colorPalette = ['#343C6A', '#FC7900', '#396AFF', '#232323'];

const PieChart: React.FC<VictoryPieProps> = (props) => {
  return (
    <div>
      <VictoryPie theme={VictoryTheme.clean} colorScale={colorPalette} {...props} />
    </div>
  );
};

export default PieChart;
