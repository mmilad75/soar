import { PieChart } from '@/components/common';
import { Widget } from '@/components/UI';
import { RootState } from '@/store';
import { useAppDispatch } from '@/store/hooks';
import { fetchExpenseStatistics } from '@/store/slices/reportsSlice';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

const ExpenseStatisticsWidget: React.FC = () => {
  const { expenseStatistics } = useSelector((state: RootState) => state.reports);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchExpenseStatistics());
  }, [dispatch]);

  const data = useMemo(() => {
    return expenseStatistics.map(({ label, value }) => ({
      x: label,
      y: value,
    }));
  }, [expenseStatistics]);

  return (
    <Widget title="Expense Statistics" size="small">
      <PieChart
        height={260}
        width={270}
        data={data}
        radius={({ datum }) => datum.y + 75}
        padAngle={5}
        innerRadius={5}
        labels={({ datum }) => `${datum.y}%\n${datum.x}`}
        labelRadius={({ datum }) => datum.y + 85}
        labelPlacement="perpendicular"
        // labelPosition="centroid"
        style={{
          labels: {
            fill: '#718EBF',
            fontSize: 12,
            fontWeight: 500,
            lineHeight: 18,
          },
        }}
      />
    </Widget>
  );
};

export default ExpenseStatisticsWidget;
