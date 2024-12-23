import { IBarChartDataSet } from './BarChart';

interface IBarChartLegendProps {
  data: IBarChartDataSet[];
}

const BarChartLegend: React.FC<IBarChartLegendProps> = ({ data }) => {
  return (
    <div className="flex justify-end gap-x-7 mb-6">
      {data.map(({ color, label }) => (
        <div key={label} className="flex items-center">
          <span className="h-[15px] w-[15px] rounded-full" style={{ background: color }}></span>
          <span className="ml-2">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChartLegend;
